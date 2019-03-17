# [Progressive Web Apps]()

# [Progressive Web Maps]()

## What
> Set of components to allow a website to behave more like a native application

# Benefits

## Caching
## Custom Theme Colors
## Push Notifications

## Multi-Platform
* Android
* Chromebooks
* iOS
* Windows Store

[](install-windows.png)

## Examples

<iframe src="https://www.pwastats.com" width="100%" height="500px"></iframe>

## manifest.json
```
{
  "name": "Clear Creek Trail Map",
  "short_name": "CC Maps",
  "scope": "/",
  "start_url": "/",
  "icons": [...],
  "background_color": "#d8e8c8",
  "theme_color": "#d8e8c8",
  "display": "standalone"
}

```

## service-worker.js
* Cache Control via JavaScript
* Created using Node JS (or manually)

## How 

## Creating the Basemap

## OpenMapTiles
``https://openmaptiles.com/downloads/tileset/osm/north-america/us/ohio/``

## Create an Extract
- GeoJSON to clip OpenMapTiles
- Node JS Package ``mbtiles-extracts``
- Edit to allow for not passing in a property name
- Unpack raw vector tiles from mbtiles
  - Then use https://www.npmjs.com/package/mbtiles2ungzpbf to extract the tiles from the mbtiles file

## Map Data

### GeoJSON

- Convert your data to GeoJSON
- ``Feature to JSON`` or ``esri2open`` or ``mapshaper`` or ``QGIS Save As`` ...

## Build Your Map

- Leaflet, Mapbox, OpenLayers, Esri JS API
- Depends on your platform, we will use Mapbox Style Spec

## Take it Offline
- Verify all resources needed for offline use
- Install Node JS package ``swprecache``
- Run the precache tool to create your service worker
- Create your ``manifest.json`` file