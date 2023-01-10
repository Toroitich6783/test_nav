let map = L.map('map').setView([-0.3922278490878398, 36.95883973290574], 13).setZoom(16);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoieGtvdmFjaWttNiIsImEiOiJja2d1dzdqY20wejF4MnNwOTFvMHZ6bjkyIn0.Srve4i5c9BhBV3nW9t8Ryg'
}).addTo(map);

L.Routing.control({
    waypoints: [
        L.latLng(-0.39660703091344596, 36.95750671190558),
        L.latLng(-0.3968432864130948, 36.95708144179428),
    ],
    routeWhileDragging: true,
    geocoder: L.Control.Geocoder.nominatim()
}).addTo(map);
// ######

var baseMaps = {
    "OpenStreetMap": osm,
    "Mapbox Streets": streets
};

var overlayMaps = {
    "Cities": cities
};
var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
var baseMaps = {
    "<span style='color: gray'>Grayscale</span>": grayscale,
    "Streets": streets
};

var crownHill = L.marker([39.75, -105.09]).bindPopup('This is Crown Hill Park.'),
    rubyHill = L.marker([39.68, -105.00]).bindPopup('This is Ruby Hill Park.');
    
var parks = L.layerGroup([crownHill, rubyHill]);
var satellite = L.tileLayer(mapboxUrl, {id: 'map', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution});

layerControl.addBaseLayer(satellite, "Satellite");
layerControl.addOverlay(parks, "Parks");
// #####

//array of features, each representing a faculty block
let blocks = [{
    "type": "Feature",
    "properties": {
        "name": "Blok A",
        "ustavy": [
            "Ústav jadrového a fyzikálneho inžinierstva"
        ],
        "instituty" : [
            "Inštitút komunikácie a aplikovanej lingvistiky"
        ]
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [17.07257, 48.15183], //left bottom corner
            [17.07257, 48.15195], //left top corner
            [17.07386, 48.15195], //right top
            [17.07386, 48.15183] //right bottom
        ]]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "Blok B",
        "ustavy": [
            "Ústav elektrotechniky",
            "Ústav multimediálnych informačných a komunikačných technológií"
        ]
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [17.073024, 48.152342],
            [17.073024, 48.152453],
            [17.074355, 48.152453],
            [17.074355, 48.152342],
        ]]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "Blok C",
        "ustavy": [
            "Ústav elektroenergetiky a aplikovanej elektrotechniky",
            "Ústav informatiky a matematiky"
        ]
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [17.072829, 48.152834],
            [17.072829, 48.152968],
            [17.073883, 48.152968],
            [17.073883, 48.152834],
        ]]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "Blok D",
        "ustavy": [
            "Ústav automobilovej mechatroniky",
            "Ústav robotiky a kybernetiky"
        ]
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [17.073217, 48.153340],
            [17.073217, 48.153472],
            [17.074376, 48.153472],
            [17.074376, 48.153340],
        ]]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "Blok E",
        "ustavy": [
            "Ústav elektroniky a fotoniky"
        ]
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [17.072850, 48.153835],
            [17.072850, 48.153980],
            [17.073907, 48.153980],
            [17.073907, 48.153835],
        ]]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "Blok T",
        "ustavy": [
            "Ústav telovýchovy a športu"
        ]
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [17.07257, 48.15197],
            [17.07257, 48.15444],
            [17.07279, 48.15444],
            [17.07279, 48.15197],
        ]]
    }
}];

let busIcon = L.icon({
    iconUrl: 'img/bus_marker.png',
    iconSize: [50, 50],
});

let tramIcon = L.icon({
    iconUrl: 'img/tram_marker.png',
    iconSize: [50, 50],
});

//markers for bus and tram stops
L.marker([48.15417, 17.07512], {icon: busIcon}).bindPopup("<h4>Autobusová zastávka</h4>" + "<h5>Zoo</h5>" //
    + "<h5>Spoje:</h5> <span>31</span>" 
    + "<span>39</span>"
    + "<span>N31</span>"
).addTo(map);

L.marker([48.15463, 17.07457], {icon: busIcon}).bindPopup("<h4>Autobusová zastávka</h4>" + "<h5>Zoo</h5>"
    + "<h5>Spoje:</h5> <span>31</span>" 
    + "<span>39</span>"
    + "<span>N31</span>"
).addTo(map);

L.marker([48.1547, 17.07578], {icon: busIcon}).bindPopup("<h4>Autobusová zastávka</h4>" + "<h5>Zoo</h5>"
    + "<h5>Spoje:</h5> <span>30</span>" 
    + "<span>32</span>"
    + "<span>37</span>"
    + "<span>92</span>"
    + "<span>192</span>"
    + "<span>N29</span>"
).addTo(map);

L.marker([48.15569, 17.07242], {icon: busIcon}).bindPopup("<h4>Autobusová zastávka</h4>" + "<h5>Televízia</h5>"
    + "<h5>Spoje:</h5> <span>31</span>" 
    + "<span>39</span>"
    + "<span>N31</span>"
).addTo(map);

L.marker([48.15655, 17.07146], {icon: busIcon}).bindPopup("<h4>Autobusová zastávka</h4>" + "<h5>Televízia</h5>"
    + "<h5>Spoje:</h5> <span>31</span>" 
    + "<span>39</span>"
    + "<span>N31</span>"
).addTo(map);

L.marker([48.14836, 17.07203], {icon: busIcon}).bindPopup("<h4>Autobusová zastávka</h4>" + "<h5>Botanická záhrada</h5>"
    + "<h5>Spoje:</h5> <span style='border-style: solid; padding:2px; margin-right: 5px;'>29</span>" 
    + "<span>32</span>"
    + "<span>N29</span>"
    + "<span>N33</span>"
    + "<span>N34</span>"
).addTo(map);

L.marker([48.14795, 17.0723], {icon: busIcon}).bindPopup("<h4>Bus zastávka</h4>" + "<h5>Botanická záhrada</h5>"
    + "<h5>Spoje:</h5> <span>29</span>" 
    + "<span>32</span>"
    + "<span>N29</span>"
    + "<span>N33</span>"
    + "<span>N34</span>"
).addTo(map);

L.marker([48.14816, 17.07178], {icon: tramIcon}).bindPopup("<h4>Tram zastávka</h4>" + "<h5>Botanická záhrada</h5>"
    + "<h5>Spoje:</h5> <span>4</span>" 
    + "<span>9</span>"
).addTo(map);

L.marker([48.14815, 17.07247], {icon: tramIcon}).bindPopup("<h4>Tram zastávka</h4>" + "<h5>Botanická záhrada</h5>"
    + "<h5>Spoje:</h5> <span>4</span>" 
    + "<span>9</span>"
).addTo(map);

function onEachFeature(feature, layer) {
    if (feature.properties.name === "Blok A") {
      layer.bindPopup("<h4>" + feature.properties.name + "</h4><h5>Inštitúty:</h5><p>" + 
      feature.properties.instituty[0] + "</p><h5>Ústavy</h5><p>" + feature.properties.ustavy[0] + "</p>");
    } else if (feature.properties.name === "Blok B" || feature.properties.name === "Blok C" || feature.properties.name === "Blok D") {
        layer.bindPopup("<h4>" + feature.properties.name + "</h4><h5>Ústavy:</h5><p>" + 
        feature.properties.ustavy[0] + "</p><p>" + feature.properties.ustavy[1] + "</p>");
    }else if (feature.properties.name === "Blok E" || feature.properties.name === "Blok T") {
        layer.bindPopup("<h4>" + feature.properties.name + "</h4><h5>Ústavy:</h5><p>" + 
        feature.properties.ustavy[0] + "</p>");
    }
}
let myGeoJson = L.geoJson(blocks, {
    onEachFeature: onEachFeature
}).addTo(map);

//https://www.flaticon.com/free-icon/map_854878?term=map&page=1&position=6 free favicon link 
