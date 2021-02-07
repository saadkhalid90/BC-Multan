const mapboxParams = {
  accessToken: 'pk.eyJ1Ijoic2FhZGtoYWxpZDkwIiwiYSI6ImNqbHJuNzRxNTA2bHMzd25tNTJ5dHlhb20ifQ.JG2i_ohQ9kuIoSotC9UvWA',
  center: [71.4849, 30.1975], // picked a center coordinate for Multan city
  initZoomVal: 11.2,
  styleMap: 'mapbox://styles/saadkhalid90/ckks4soz90paw17qdyge1lgi9'
}

const cityData = 'MultanHubs.csv';

// takes in two arguments
// 1. city Data
// 2. Array with multiple location center and zoom values (Empty if not required)
readAndMap(cityData, [], mapboxParams);
