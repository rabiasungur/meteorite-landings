console.log("hey");

d3.json("http://localhost:5000/api/landing_data")
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
});

d3.json("http://localhost:5000/api/landing_data")
    .then(function (response) {
        console.log(response.data);
        createMap(response.data.GeoLocation)
     })
    .catch(function (error) {
        console.log(error);
    });



// Create the createMap function
function createMap(GeoLocation) {
    var satellitemap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/satellite-v9',
        accessToken: API_KEY
    });
  

    var myMap = L.map("map-id", {
        center: [37.74, -25.68],
        zoom: 2,
        layers: [satellitemap]
    });
    lightMap.addTo(myMap)
   };