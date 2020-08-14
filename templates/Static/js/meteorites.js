console.log("hey Joe");

d3.json("http://localhost:5000/api/landing_data")
    .then(function (data) {
        createMap(data)
        console.log(data);
//   Object.entries(weatherReport).forEach(function([key, value]) {
//     console.log(key, value);
    });

// Create the createMap function
function createMap(planetview) {
    var satellitemap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/satellite-v9',
        accessToken: API_KEY
    });
    var darkmap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/dark-v10',
        accessToken: API_KEY
    });

    var BaseMaps = {
        "Satellite Map": satellitemap,
        "Dark Map": darkmap,
    };

    // var overlayMaps = {
    //     OverMaps: planetview
    // };



    var myMap = L.map("map-id", {
        center: [37.74, -25.68],
        zoom: 2,
        layers: [satellitemap]
    });
    //L.control.layers(BaseMaps, satellitemap)
    //satellitemap.addTo(myMap)

};