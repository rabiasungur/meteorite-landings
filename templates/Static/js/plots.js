console.log("hey you");

d3.json("http://localhost:5000/api/landing_data")
    .then(function (data) {
        console.log(data);
    console.log(typeof(data))
    console.log(data.data);
    Object.entries(data.data[0]).forEach(function([key, value]) {
      console.log(key, value)});   
    });





var trace1 = {
    x: [0]["mass (g)"],
    y: [0].recclass,
    type: "bar"
};

var data = [trace1];

var layout = {
    title: "Test Chart",
    xaxis: { title: "size" },
    yaxis: { title: "Class" }
};

Plotly.newPlot("plot", data, layout);
// //------------------------------------------------------------
var trace2 = {
  x: [[0].recclass],
  y: [[0].year],
  type: "line"
};

var data = [trace1];

var layout = {
  title: "Test Chart",
  xaxis: { title: "size" },
  yaxis: { title: "Year" }
};

Plotly.newPlot("scat", data, layout);
// //---------------------------------------------------------------

// // Scatter plot 1
 var search1 = {
    x: [0]["mass (g)"],
    y: [0].recclass,
    x: [],
    y: [],
    mode: 'markers',
    type: 'scatter',
    name: 'a',
    text: ['', '', '', '', ''],
    marker: { size: 12 }
  };
  
  var search2 = {
    x: [0].recclass,
    y: [0].year,
    mode: 'markers',
    type: 'scatter',
    name: 'B',
    text: ['', '', '', '', ''],
    marker: { size: 12 }
  };
  
  var data = [ search1, search2 ];
  
  var layout = {
    xaxis: {
      range: [ 0.75, 2000 ] //use for grams?
    },
    yaxis: {
      range: [0, 100] // use for ??
    },
    title:'Meteorite hits',
    xaxis: { title: "size" },
    yaxis: { title: "Class" }
  };
  
  Plotly.newPlot('myDiv', data, layout);
 // -----------------------------------------