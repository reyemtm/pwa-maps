const fs = require('fs-extra')

var pwa = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  
  <link rel="manifest" href="/manifest.json" />
  <meta name="theme-color" content="#d8e8c8" />
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="msapplication-starturl" content="/">

  <title>My First PWA Map</title>
  <!--register the service worker-->
  <script>
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(function () {
          console.log("Service Worker Registered");
        });
    }
  </script>
  <link href="/mapboxgl.css" rel="stylesheet" />
  <script src="/mapboxgl.js"></script>
  <style>
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  #map {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    animation: fadeIn 0.5s ease-in-out;
    background: whitesmoke;
  }
  @keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }
  </style>
</head>
<body>
  <div id="map">
    <div id="nojs"><h1>Error: JavaScript is needed to run this page!</h1></div>
  </div>
  <script>
  document.getElementById("nojs").style.display = "none";
  var map = new mapboxgl.Map({
    container: "map",
    style: {
      "version": 8,
      "name": "blank",
      "sources": {
        "openmaptiles": {
          "type": "vector",
          "url": ""
        }
      },
      "layers": [{
        "id": "background",
        "type": "background",
        "paint": {
          "background-color": "#f8f4f0"
        }
      }]
    },
    hash: true,
    center: [-82.58844, 39.5933],
    zoom: 6
  });
  map.addControl(new mapboxgl.NavigationControl());
  map.addControl(new mapboxgl.FullscreenControl());
  
  map.on('load', function() {
    map.addLayer({
      id: "states",
      "type": "line",
      source: {
        "type": "geojson",
        "data": "/geojson/states.geojson"
      },
      "paint": {
        "line-color": "skyblue",
      }
    })
  })
  
  </script>
</body>
</html>`

fs.copy('./dist/geojson/gz_2010_us_040_00_20m.json', './public/geojson/states.geojson')
.catch(function(err) {
  console.log(err)
});

fs.copy('./dist/bright-local.json', './public/bright.json')
.catch(function(err) {
  console.log(err)
});

fs.copy('./node_modules/mapbox-gl/dist/mapbox-gl.css', './public/mapboxgl.css')
.then(function() {
  console.log('copied mapbox.css')
})

.catch(function(err) {
  console.log(err)
});

fs.copy('./node_modules/mapbox-gl/dist/mapbox-gl.js', './public/mapboxgl.js')
.then(function() {
  console.log('copied mapbox.js')
  if (!fs.existsSync('./public/index.html') || process.argv[2] === "force") {
    fs.writeFile('./public/index.html', pwa);
    console.log('copied index.html')
    }else{
      console.log('PWA index.html already exists, will not overwrite!')
    }
})

.catch(function(err) {
  console.log(err)
});
