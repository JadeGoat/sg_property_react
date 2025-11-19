import { getTownFromPostal } from './SgTownHelper.js'

export function extractPostalCodeFromPropertiesData(geoJsonData) {
    const metaData = geoJsonData.features.map(item => item.properties);
    const metaPostalCodeData = metaData.map(item => {
        const result = {
            "postal_code": item.ADDRESSPOSTALCODE,
            "address": item.ADDRESSSTREETNAME,
            "name": item.NAME,
        }
        return result;
    });
    return metaPostalCodeData;
}

export function extractPostalCodeFromMetaData(geoJsonData) {
      
    const parser = new DOMParser();
    const metaData = geoJsonData.features.map(item => item.properties);
    const metaPostalCodeData = metaData.map(item => {
        const result = extractFromDescription(parser, item.Description)
        return result
    });

    return metaPostalCodeData;
}

function extractFromDescription(parser, htmlText) {

    // Parse the html content in the meta block
    const doc =  parser.parseFromString(htmlText, 'text/html');
    const rows = doc.querySelectorAll('table tr');

    // Look through all table rows and extract cell value where row header is postal code
    let postal_code = null;
    let address = null;
    let name = null
    rows.forEach(row => {
        const rowDesc = row.querySelectorAll('th');
        const rowValue = row.querySelectorAll('td');
        if (rowValue.length && rowDesc.length && rowDesc[0].textContent.trim() === 'ADDRESSPOSTALCODE') {
            const tempValue =  rowValue[0].textContent.trim()
            if (tempValue.length === 5) {
                postal_code = "0" + rowValue[0].textContent.trim();
            }
            else {
                postal_code = rowValue[0].textContent.trim();
            }
        }
        if (rowValue.length && rowDesc.length && rowDesc[0].textContent.trim() === 'ADDRESSSTREETNAME') {
            address = rowValue[0].textContent.trim();
        }
        if (rowValue.length && rowDesc.length && rowDesc[0].textContent.trim() === 'NAME') {
            name = rowValue[0].textContent.trim();
        }
    });

    return {
        "postal_code": postal_code,
        "address": address,
        "name": name
    }
}

export function extractAndMerge(geoJsonFeature) {
    
    const geoJsonData = constructGeoJsonFromFeature(geoJsonFeature)
    const metaPostalCodeData = extractPostalCodeFromMetaData(geoJsonData)

    // Merge feature together
    const mergedGeoJsonData = geoJsonData.features.map((item, index) => ({
        ...item,
        ...metaPostalCodeData[index]
    }));
    return mergedGeoJsonData
}

export function filterGeoJsonData(geoJsonData, postalCodeData, selectedTown) {

    // Map postal to town
    const enrichedData = postalCodeData.map(item => {
        const fullPostal = item.postal_code
        const town = getTownFromPostal(fullPostal);
        return { ...item, town };
    });

    // Find matching indexes based on selected town
    const matchingIndexes  = enrichedData
        .map((item, index) => item.town.includes(selectedTown) ? index : null)
        .filter(index => index !== null);

    // Filter the Geo Json based on matching indexes
    var filteredFeatures = geoJsonData.features.filter((_, index) => matchingIndexes.includes(index))
    const selectedEnrichedData = enrichedData.filter(item => item.town.includes(selectedTown))
    
    // Merge feature together
    const mergedFeatures = filteredFeatures.map((item, index) => ({
        ...item,
        ...selectedEnrichedData[index]
    }));
    //console.log(mergedFeatures)

    // Reconstruct full geojson structure
    const filteredData = {
        type: "FeatureCollection",
        features: mergedFeatures
    };
    //console.log(filteredData)

    return filteredData;
}

export const constructGeoFeatureFromData = (data) => {
    return data.map(f => ({
            type: "Feature",
            properties: f.properties,
            postal_code: f.postal_code,
            geometry: {
                type: "Point",
                coordinates: JSON.parse(f.coordinates)
            }
    }));
};

export const constructGeoJsonFromData = (data) => {
    const featureData = constructGeoFeatureFromData(data);
    return {
        "type": "FeatureCollection",
        "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
        "features": featureData
    };
}

export const constructGeoJsonFromFeature = (featureData) => {
    return {
        "type": "FeatureCollection",
        "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
        "features": featureData
    };
}