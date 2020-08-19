d3.json("http://localhost:5000/api/landingModified")
  .then(function (response) {
    mass = []
    year = []
    console.log(response);
    console.log(typeof (response))
    // Object.entries(response.data[0]).forEach(function ([key, value]) {
    //   console.log(key, value)
    //   mass.push
    // });
    response.data.forEach((row)=>{
      console.log(row)
      mass.push(row.mass);
      year.push(row.year);
      //mass.push(row["mass (g)"]


    })
console.log(mass)

    var search1 = {
      x: year,
      y: mass,
      mode: 'markers',
      type: 'bar',
      // name: 'a',
      // text: ['', '', '', '', ''],
      marker: { size: 12 }
    };

    // var search2 = {
    //   x: [0].recclass,
    //   y: [0].year,
    //   mode: 'markers',
    //   type: 'scatter',
    //   name: 'B',
    //   text: ['', '', '', '', ''],
    //   marker: { size: 12 }
    // };

    var data = [search1, ];

    var layout = {
      xaxis: {
        range: [0, ], //use for grams?
       },
      // yaxis: {
      //   range: [0, 100] // use for ??
      // },
      title: 'Total Mass of Meteorites Landed on Earth by Each Year',
      xaxis: { title: "Year" },
      yaxis: { title: "Meteorite Size" }
    };

    Plotly.newPlot('myDiv', data, layout);
  })