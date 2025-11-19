const sgTowns = {
    "Ang Mo Kio": [1.3778, 103.8554],
    "Bedok": [1.3244, 103.9301],
    "Bishan": [1.3508, 103.8485],
    "Bukit Batok": [1.3496, 103.7499],
    "Bukit Merah": [1.2776, 103.8198],
    "Bukit Panjang": [1.3784, 103.7642],
    "Bukit Timah": [1.3294, 103.8021],
    "Boon Lay":	[1.325, 103.7116],
    "Central": [1.2903, 103.8519],
    "Changi":	[1.3570, 103.9870],
    "Changi Bay":	[1.320, 104.030],
    "Choa Chu Kang": [1.3850, 103.7450],
    "Clementi": [1.3151, 103.7656],
    "Downtown Core":	[1.2920, 103.8510],
    "Geylang": [1.3160, 103.8860],
    "Hougang": [1.3711, 103.8864],
    "Jurong East": [1.3331, 103.7430],
    "Jurong West": [1.3521, 103.7074],
    "Kallang":	[1.3100, 103.8710],
    "Kallang/Whampoa": [1.3089, 103.8660],
    "Lim Chu Kang":	[1.4230, 103.7090],
    "Mandai":	[1.4180, 103.8150],
    "Marina South":	[1.2800, 103.8700],
    "Marina East":	[1.2950, 103.8790],
    "Marine Parade": [1.3039, 103.9057],
    "Museum":	[1.2960, 103.8480],
    "Newton":	[1.3120, 103.8390],
    "Novena":	[1.3200, 103.8430],
    "Orchard":	[1.3040, 103.8310],
    "Outram":	[1.2810, 103.8390],
    "Pasir Ris": [1.3736, 103.9497],
    "Paya Lebar":	[1.3540, 103.9110],
    "Pioneer":	[1.3220, 103.6950],
    "Punggol": [1.4043, 103.9020],
    "Queenstown": [1.2946, 103.8030],
    "River Valley":	[1.2950, 103.8360],
    "Rochor":	[1.3070, 103.8530],
    "Seletar":	[1.3990, 103.8740],
    "Sembawang": [1.4491, 103.8185],
    "Sengkang": [1.3911, 103.8950],
    "Serangoon": [1.3644, 103.8701],
    "Simpang":	[1.4420, 103.8350],
    "Singapore River":	[1.2890, 103.8460],
    "Straits View":	[1.2700, 103.8600],
    "Sungei Kadut":	[1.4180, 103.7470],
    "Tanglin":	[1.3120, 103.8160],
    "Tampines": [1.3496, 103.9568],
    "Tengah": [1.3587, 103.7295],
    "Toa Payoh": [1.3345, 103.8490],
    "Tuas":	[1.3210, 103.6350],
    "Woodlands": [1.4380, 103.7865],
    "Yishun": [1.4294, 103.8355]
};

const rangeToTowns = {
  "0-89": ["Central"],
  "90-99": ["Bukit Merah"],
  "100-116": ["Bukit Merah"],
  "117-119": ["Queenstown"],
  "120-129": ["Clementi"],
  "131-131": ["Queenstown"],
  "132-137": ["Clementi"],
  "138-139": ["Queenstown"],
  "140-149": ["Queenstown"],
  "150-159": ["Bukit Merah"],
  "160-169": ["Central"],
  "170-178": ["Central"],
  "179-199": ["Central"],
  "200-249": ["Central"],
  "250-259": ["Central"],
  "260-266": ["Bukit Timah"],
  "267-269": ["Bukit Timah"],
  "270-276": ["Queenstown"],
  "277-279": ["Bukit Timah"],
  "280-289": ["Bukit Timah"],
  "290-297": ["Bukit Timah"],
  "298-298": ["Toa Payoh"],
  "299-299": ["Bukit Timah"],
  "300-307": ["Toa Payoh"], // Novena
  "309-310": ["Toa Payoh"],
  "310-319": ["Toa Payoh"],
  "320-322": ["Toa Payoh", "Kallang/Whampoa"], // Balestier
  "323-329": ["Toa Payoh", "Kallang/Whampoa"], // Balestier
  "330-331": ["Kallang/Whampoa"], // Whampoa
  "332-339": ["Kallang/Whampoa"], // Whampoa
  "340-349": ["Kallang/Whampoa"],
  "350-359": ["Kallang/Whampoa"],
  "360-369": ["Geylang"],
  "370-379": ["Geylang"],
  "380-389": ["Geylang"],
  "390-399": ["Geylang"],
  "400-409": ["Bedok"],
  "410-419": ["Bedok"],
  "420-429": ["Marine Parade"],
  "430-439": ["Marine Parade"],
  "440-449": ["Marine Parade"],
  "450-459": ["Bedok"],
  "460-469": ["Bedok"],
  "470-479": ["Bedok"],
  "480-489": ["Bedok"],
  "490-499": ["Bedok", "Tampines"],
  "500-509": ["Pasir Ris"],
  "510-519": ["Pasir Ris"],
  "520-529": ["Tampines"],
  "530-539": ["Hougang"],
  "540-544": ["Sengkang"],
  "545-549": ["Sengkang", "Hougang"],
  "550-559": ["Serangoon"],
  "560-569": ["Ang Mo Kio", "Bishan"],
  "570-579": ["Bishan"],
  "580-585": ["Toa Payoh"],
  "586-589": ["Bukit Timah"],
  "590-590": ["Bukit Timah"],
  "591-591": ["Bukit Timah"],
  "592-599": ["Bukit Timah"],
  "600-609": ["Jurong East"],
  "610-619": ["Jurong West"],
  "620-629": ["Jurong West"],
  "630-631": ["Jurong West", "Bukit Batok"],
  "632-632": ["Jurong West"],
  "633-639": ["Jurong West", "Bukit Batok"],
  "640-644": ["Jurong West"],
  "645-649": ["Bukit Batok"],
  "650-659": ["Bukit Batok"],
  "660-669": ["Bukit Panjang"],
  "670-679": ["Bukit Panjang"],
  "680-689": ["Choa Chu Kang"],
  "690-699": ["Tengah"],
  "700-729": ["Woodlands"],
  "730-739": ["Woodlands"],
  "740-749": ["Yishun"],
  "750-759": ["Yishun", "Sembawang"],
  "760-769": ["Yishun"],
  "770-779": ["Ang Mo Kio"],
  "780-789": ["Ang Mo Kio"],
  "790-799": ["Sengkang"],
  "800-804": ["Punggol"],
  "805-809": ["Ang Mo Kio"],
  "810-819": ["Sembawang"],
  "820-829": ["Punggol"],
  "830-839": ["Sengkang"],
  "840-849": ["Hougang"],
  "850-859": ["Hougang"],
  "860-869": ["Sengkang", "Hougang"],
  "870-879": ["Sengkang"],
  "880-889": ["Sengkang"],
  "890-899": ["Punggol"],
  "900-999": ["Bedok"]
};

export function getTownFromPostal(postalCode) {
  var strPostalCode = postalCode.toString()
  if (strPostalCode.length === 5) {
    strPostalCode = "0" + strPostalCode
  }
  const prefix = parseInt(strPostalCode.slice(0, 3), 10);

  for (const range in rangeToTowns) {
    const [start, end] = range.split("-").map(Number);
    if (prefix >= start && prefix <= end) {
      const townUpperCaseList = rangeToTowns[range].map(town => town.toUpperCase());
      return townUpperCaseList;
    }
  }

  return ["Unknown"];
}

export function getTownLatLon(town) {
  const key = findOriginalKey(town)
  return sgTowns[key]
}

function findOriginalKey(searchKey) {
  const upperSearch = searchKey.toUpperCase();
  return Object.keys(sgTowns).find(key => key.toUpperCase() === upperSearch);
}