const postalToTown = {
    // Central Area
    "01": "Central Area", "02": "Central Area", "03": "Central Area", "04": "Central Area",
    "05": "Central Area", "06": "Central Area", "07": "Central Area", "08": "Central Area",
    "09": "Central Area", "10": "Central Area", "17": "Central Area", "18": "Central Area",
    "19": "Central Area", "20": "Central Area", "21": "Central Area", "22": "Central Area",
    "23": "Central Area", "28": "Central Area", "29": "Central Area", "30": "Central Area",
    "229": "Central Area",
    "247": "Central Area", "248": "Central Area", "249": "Central Area",
    "259": "Central Area",
    // Clementi
    "11": "Clementi", "12": "Clementi", "13": "Clementi",
    // Queenstown
    "14": "Queenstown",
    "27": "Queenstown", // Ghim Moh Road
    // Bukit Merah
    "15": "Bukit Merah", "16": "Bukit Merah",
    "088": "Bukit Merah", // Raeburn Park
    "090": "Bukit Merah", // Telok Blangah Rise/Crescent
    "098": "Bukit Merah", // Wishart Road
    "099": "Bukit Merah", // Harbourfront place
    "100": "Bukit Merah", "101": "Bukit Merah", "102": "Bukit Merah", // Telok Blangah Street
    "103": "Bukit Merah", "109": "Bukit Merah", // Depot Road
    // Bukit Timah
    "240": "Bukit Timah", "241": "Bukit Timah", "242": "Bukit Timah", "243": "Bukit Timah",
    "244": "Bukit Timah", "245": "Bukit Timah", "246": "Bukit Timah", 
    "261": "Bukit Timah", // Farrer Road
    "277": "Bukit Timah", //@
    "278": "Bukit Timah", //@
    "286": "Bukit Timah", // Fairways Drive
    "287": "Bukit Timah", // Turf Club Road
    "288": "Bukit Timah", // Linden Drive
    "289": "Bukit Timah", // Bukit Tinggi Road
    "297": "Bukit Timah", // Plymouth Avenue
    "299": "Bukit Timah", // Duneran Close
    "589": "Bukit Timah", "590": "Bukit Timah", "591": "Bukit Timah", //@
    "597": "Bukit Timah", //@
    "599": "Bukit Timah", //@
    // Bishan
    "570": "Bishan", "571": "Bishan", "572": "Bishan", 
    "575": "Bishan", "576": "Bishan", "579": "Bishan",
    // Ang Mo Kio
    "560": "Ang Mo Kio", "561": "Ang Mo Kio", "562": "Ang Mo Kio", "563": "Ang Mo Kio", 
    "568": "Ang Mo Kio", "569": "Ang Mo Kio",
    "809": "Ang Mo Kio", // Seletar Hills Estate
    // Toa Payoh
    "298": "Toa Payoh", // Thomson Road
    "310": "Toa Payoh", "311": "Toa Payoh", "312": "Toa Payoh", "313": "Toa Payoh",
    "340": "Toa Payoh", "341": "Toa Payoh", "360": "Toa Payoh", // Bidadari
    "347": "Toa Payoh", // Tai Thong Crescent
    "350": "Toa Payoh", // Potong Pasir
    "359": "Toa Payoh", // Jalan Lateh
    "361": "Toa Payoh", "367": "Toa Payoh", // Upper Aljunied Lane
    // Kallang/Whampoa
    "319": "Kallang/Whampoa", "320": "Kallang/Whampoa", "321": "Kallang/Whampoa", 
    "322": "Kallang/Whampoa", "323": "Kallang/Whampoa", 
    "328": "Kallang/Whampoa", "330": "Kallang/Whampoa", //@
    "331": "Kallang/Whampoa", "338": "Kallang/Whampoa", "339": "Kallang/Whampoa",
    // Geylang
    "348": "Geylang", //@
    "370": "Geylang", "371": "Geylang", "372": "Geylang", // Circuit Road/Pipit Road???
    "380": "Geylang", "381": "Geylang", "389": "Geylang", 
    "390": "Geylang", "391": "Geylang", "392": "Geylang", //@
    "399": "Geylang",
    "401": "Geylang", // Eunos Crescent
    // Marine Parade
    "402": "Marine Parade", // Geylang Serai
    "420": "Marine Parade", // Joo Chiat Road
    "430": "Marine Parade", // Haig Road
    "431": "Marine Parade", "432": "Marine Parade", // Kampong Arang Road
    "437": "Marine Parade", "438": "Marine Parade", "439": "Marine Parade", 
    "440": "Marine Parade", "441": "Marine Parade", "449": "Marine Parade",
    // Bedok
    "400": "Bedok", // Eunos Cresent
    "410": "Bedok", // Lengkong Tiga
    "411": "Bedok", // Jalan Tenaga
    "415": "Bedok", // Kaki Bukit Road
    "456": "Bedok", // Palm Avenue
    "458": "Bedok", // Frankel Avenue
    "460": "Bedok", "461": "Bedok", "462": "Bedok", "463": "Bedok", "465": "Bedok", "466": "Bedok",
    "467": "Bedok", "468": "Bedok", "469": "Bedok", "470": "Bedok", "471": "Bedok",
    // Tampines
    "486": "Tampines", // Upper Changi Road
    "520": "Tampines", "521": "Tampines", "522": "Tampines", "523": "Tampines", "524": "Tampines", 
    "526": "Tampines", "527": "Tampines", "529": "Tampines",
    // Pasir Ris
    "500": "Pasir Ris", "509": "Pasir Ris", // Changi Village
    "508": "Pasir Ris", // Changi Grove
    "510": "Pasir Ris", "511": "Pasir Ris", "519": "Pasir Ris",
    // Hougang
    "530": "Hougang", "531": "Hougang", "532": "Hougang", "538": "Hougang",
    "534": "Hougang", // Upper Serrangoon Road
    "536": "Hougang", //@
    "537": "Hougang", // Kensington Square
    "549": "Hougang", // Flower Road
    // Sengkang
    "540": "Sengkang", "541": "Sengkang", "542": "Sengkang", "543": "Sengkang", //@
    "544": "Sengkang", //@@ Mix serangoon & sengkang
    "545": "Sengkang", //@@ Mix serangoon & sengkang
    "546": "Sengkang", //@
    "790": "Sengkang", "791": "Sengkang", // Fernvale Street
    // Serangoon
    "550": "Serangoon", "551": "Serangoon", "552": "Serangoon", 
    "554": "Serangoon", "555": "Serangoon", "556": "Serangoon",
    // Jurong East
    "598": "Jurong East", //@
    "600": "Jurong East", "601": "Jurong East", "602": "Jurong East",  "603": "Jurong East", 
    "605": "Jurong East", //@
    "609": "Jurong East",
    // Jurong West
    "610": "Jurong West", "611": "Jurong West", "614": "Jurong West", //@
    "632": "Jurong West", // Upper Jurong Road
    "640": "Jurong West", "641": "Jurong West", "642": "Jurong West", "643": "Jurong West", "644": "Jurong West",
    // Bukit Batok
    "650": "Bukit Batok", "651": "Bukit Batok", "652": "Bukit Batok", "653": "Bukit Batok", 
    "655": "Bukit Batok", "657": "Bukit Batok", "659": "Bukit Batok",
    // Bukit Panjang
    "670": "Bukit Panjang", "671": "Bukit Panjang", 
    "672": "Bukit Panjang", //@
    "678": "Bukit Panjang",
    "679": "Bukit Panjang", //@
    "688": "Bukit Panjang", // Teck Whye Lane
    // Choa Chu Kang
    "680": "Choa Chu Kang", "681": "Choa Chu Kang", "682": "Choa Chu Kang", "683": "Choa Chu Kang", 
    "689": "Choa Chu Kang",
    // Tengah
    "690": "Tengah", "691": "Tengah", "692": "Tengah",
    // Woodlands
    "730": "Woodlands", "731": "Woodlands", "732": "Woodlands", "733": "Woodlands", 
    "737": "Woodlands", "738": "Woodlands", "739": "Woodlands", 
    // Sembawang
    "750": "Sembawang", 
    "751": "Sembawang", "752": "Sembawang", "753": "Sembawang", //@
    "757": "Sembawang", "759": "Sembawang",
    // Yishun
    "760": "Yishun", "761": "Yishun", "762": "Yishun", "763": "Yishun", 
    "768": "Yishun", "769": "Yishun",
    // Punggol
    "820": "Punggol", "821": "Punggol", "822": "Punggol", "823": "Punggol", "824": "Punggol", 
    "829": "Punggol"
}

export function extractPostalCodeFromPropertiesData(geoJsonData) {
    const metaData = geoJsonData.features.map(item => item.properties);
    const metaPostalCodeData = metaData.map(item => {
        const result = {
            "postal_code": item.ADDRESSPOSTALCODE,
            "address": item.ADDRESSSTREETNAME
        }
        return result;
    });
    return metaPostalCodeData;
}

export function extractPostalCodeFromMetaData(geoJsonData) {
      
    const parser = new DOMParser();
    const metaData = geoJsonData.features.map(item => item.properties);
    const metaPostalCodeData = metaData.map(item => {

        // Parse the html content in the meta block
        const doc =  parser.parseFromString(item.Description, 'text/html');
        const rows = doc.querySelectorAll('table tr');

        // Look through all table rows and extract cell value where row header is postal code
        let postal_code = null;
        let address = null;
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
        });

        return { postal_code, address }
    });

    return metaPostalCodeData;
}

export function filterGeoJsonData(geoJsonData, postalCodeData, selectedTown) {

    // Map postal to town
    const enrichedData = postalCodeData.map(item => {
        const fullPostal = item.postal_code
        const prefix3 = fullPostal.slice(0, 3);
        const prefix2 = fullPostal.slice(0, 2);
        const town = (postalToTown[prefix3] || postalToTown[prefix2] || 'Unknown').toUpperCase();
        return { ...item, town };
    });
    
    // Find matching indexes based on selected town
    const matchingIndexes  = enrichedData
        .map((item, index) => item.town === selectedTown ? index : null)
        .filter(index => index !== null);

    //const selectedEnrichedData = enrichedData.filter(item => item.town === selectedTown)
    //console.log(selectedEnrichedData)
    
    // Filter the Geo Json based on matching indexes
    const filteredData = {
        type: "FeatureCollection",
        features: geoJsonData.features.filter((_, index) => matchingIndexes.includes(index))
    };
    
    return filteredData;
}

export const constructGeoFeatureFromData = (data) => {
    return data.map(f => ({
            type: "Feature",
            properties: f.properties,
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