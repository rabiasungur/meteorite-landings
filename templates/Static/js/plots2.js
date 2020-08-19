d3.json("http://localhost:5000/api/landingModified")
  .then(function (response) {
    mass = []
    year = []
    console.log(response);
    console.log(typeof (response))

    response.data.forEach((row) => {
      console.log(row)
      mass.push(row.mass);
      year.push(row.year);

    })
    console.log(mass)

    var search1 = {
      x: year,
      y: mass,
      mode: 'markers',
      type: 'scatter',

      marker: { size: 12 }
    };
    
    var data = [search1,];

    var layout = {
      xaxis: {
        range: [0,], 
      },
      
      title: 'Does Size count?',
      xaxis: { title: "year" },
      yaxis: { title: "size" }
    };

    Plotly.newPlot('myDiv', data, layout);
  })