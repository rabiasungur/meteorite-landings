console.log("hey");

d3.json("http://localhost:5000/api/landing_data")
.then(function(data){
    console.log(data);
   })
.catch(function(error){
    console.log(error);
});


// var newYorkCoords = [40.73, -74.0059];
// var mapZoomLevel = 12;

// // Create the createMap function
// function createmap(stations) {


//   // Adding a tile layer (the background map image) to our map
//   // We use the addTo method to add objects to our map
//   var lightMap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//     tileSize: 512,
//     maxZoom: 18,
//     zoomOffset: -1,
//     id: "mapbox/streets-v11",
//     accessToken: API_KEY
//   });



//   // Create a baseMaps object to hold the lightmap layer
//   // Put other layers here below VAR Layers
//   var layers = {
//     "lightMap": lightMap
//   }

//   // Create an overlayMaps object to hold the bikeStations layer
//   var myMap = L.map("map-id", {
//     center: newYorkCoords,
//     zoom: mapZoomLevel,
//     layers: [lightMap]
//   });


//   // Create the map object with options
//   var map = L.map("map-id", {
//     center: newYorkCoords,
//     zoom: mapZoomLevel,
//     //,
//   })
//   lightMap.addTo(myMap)
//   // Create a olayer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
// }
// // Create the createMarkers function

// // Pull the "stations" property off of response.data

// // Initialize an array to hold bike markers

// // Loop through the stations array
// // For each station, create a marker and bind a popup with the station's name

// // Add the marker to the bikeMarkers array

// // Create a layer group made from the bike markers array, pass it into the createMap function


// // Perform an API call to the Citi Bike API to get station information. Call createMarkers when complete
// var citiBikeUrl = "https://gbfs.citibikenyc.com/gbfs/en/station_information.json";
// d3.json(citiBikeUrl, function (response) {
//   console.log(response.data.stations);
//   createmap(response.data.stations);
// });