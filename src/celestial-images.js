// var config = {
//     width: 0,     // Default width, 0 = full parent width; height is determined by projection
//     projection: "aitoff",  // Map projection used: airy, aitoff, armadillo, august, azimuthalEqualArea, azimuthalEquidistant, baker, berghaus, boggs, bonne, bromley, collignon, craig, craster, cylindricalEqualArea, cylindricalStereographic, eckert1, eckert2, eckert3, eckert4, eckert5, eckert6, eisenlohr, equirectangular, fahey, foucaut, ginzburg4, ginzburg5, ginzburg6, ginzburg8, ginzburg9, gringorten, hammer, hatano, healpix, hill, homolosine, kavrayskiy7, lagrange, larrivee, laskowski, loximuthal, mercator, miller, mollweide, mtFlatPolarParabolic, mtFlatPolarQuartic, mtFlatPolarSinusoidal, naturalEarth, nellHammer, orthographic, patterson, polyconic, rectangularPolyconic, robinson, sinusoidal, stereographic, times, twoPointEquidistant, vanDerGrinten, vanDerGrinten2, vanDerGrinten3, vanDerGrinten4, wagner4, wagner6, wagner7, wiechel, winkel3
//     projectionRatio: null, // Optional override for default projection ratio
//     transform: "equatorial", // Coordinate transformation: equatorial (default), ecliptic, galactic, supergalactic
//     center: null,       // Initial center coordinates in equatorial transformation [hours, degrees, degrees],
//     // otherwise [degrees, degrees, degrees], 3rd parameter is orientation, null = default center
//     orientationfixed: true,  // Keep orientation angle the same as center[2]
//     background: { fill: "#000000", stroke: "#000000", opacity: 1 }, // Background style
//     adaptable: true,    // Sizes are increased with higher zoom-levels
//     interactive: true,  // Enable zooming and rotation with mousewheel and dragging
//     disableAnimations: false, // Disable all animations
//     form: false,        // Display settings form
//     location: false,    // Display location settings
//     controls: true,     // Display zoom controls
//     lang: "",           // Language for names, so far only for constellations: de: german, es: spanish
//     // Default:en or empty string for english
//     container: "celestial-map",   // ID of parent element, e.g. div
//     datapath: "data/",  // Path/URL to data files, empty = subfolder 'data'
//     stars: {
//         show: false,    // Show stars
//         limit: 6,      // Show only stars brighter than limit magnitude
//         colors: true,  // Show stars in spectral colors, if not use "color"
//         style: { fill: "#ffffff", opacity: 1 }, // Default style for stars
//         names: true,   // Show star names (Bayer, Flamsteed, Variable star, Gliese, whichever applies first)
//         proper: true, // Show proper name (if present)
//         desig: false,  // Show all names, including Draper and Hipparcos
//         namelimit: 2.5,  // Show only names for stars brighter than namelimit
//         namestyle: { fill: "#ddddbb", font: "11px Georgia, Times, 'Times Roman', serif", align: "left", baseline: "top" },
//         propernamestyle: { fill: "#ddddbb", font: "11px Georgia, Times, 'Times Roman', serif", align: "right", baseline: "bottom" },
//         propernamelimit: 1.5,  // Show proper names for stars brighter than propernamelimit
//         size: 7,       // Maximum size (radius) of star circle in pixels
//         exponent: -0.28, // Scale exponent for star size, larger = more linear
//         data: 'stars.6.json' // Data source for stellar data
//         //data: 'stars.8.json' // Alternative deeper data source for stellar data
//     },
//     dsos: {
//         show: false,    // Show Deep Space Objects
//         limit: 6,      // Show only DSOs brighter than limit magnitude
//         names: true,   // Show DSO names
//         desig: true,   // Show short DSO names
//         namelimit: 4,  // Show only names for DSOs brighter than namelimit
//         namestyle: { fill: "#cccccc", font: "11px Helvetica, Arial, serif", align: "left", baseline: "top" },
//         size: null,    // Optional seperate scale size for DSOs, null = stars.size
//         exponent: 1.4, // Scale exponent for DSO size, larger = more non-linear
//         data: 'dsos.bright.json',  // Data source for DSOs
//         //data: 'dsos.6.json'  // Alternative broader data source for DSOs
//         //data: 'dsos.14.json' // Alternative deeper data source for DSOs
//         symbols: {  //DSO symbol styles
//             gg: { shape: "circle", fill: "#ff0000" },                                 // Galaxy cluster
//             g: { shape: "ellipse", fill: "#ff0000" },                                // Generic galaxy
//             s: { shape: "ellipse", fill: "#ff0000" },                                // Spiral galaxy
//             s0: { shape: "ellipse", fill: "#ff0000" },                                // Lenticular galaxy
//             sd: { shape: "ellipse", fill: "#ff0000" },                                // Dwarf galaxy
//             e: { shape: "ellipse", fill: "#ff0000" },                                // Elliptical galaxy
//             i: { shape: "ellipse", fill: "#ff0000" },                                // Irregular galaxy
//             oc: { shape: "circle", fill: "#ffcc00", stroke: "#ffcc00", width: 1.5 },  // Open cluster
//             gc: { shape: "circle", fill: "#ff9900" },                                 // Globular cluster
//             en: { shape: "square", fill: "#ff00cc" },                                 // Emission nebula
//             bn: { shape: "square", fill: "#ff00cc", stroke: "#ff00cc", width: 2 },    // Generic bright nebula
//             sfr: { shape: "square", fill: "#cc00ff", stroke: "#cc00ff", width: 2 },    // Star forming region
//             rn: { shape: "square", fill: "#00ooff" },                                 // Reflection nebula
//             pn: { shape: "diamond", fill: "#00cccc" },                                // Planetary nebula
//             snr: { shape: "diamond", fill: "#ff00cc" },                                // Supernova remnant
//             dn: { shape: "square", fill: "#999999", stroke: "#999999", width: 2 },    // Dark nebula grey
//             pos: { shape: "marker", fill: "#cccccc", stroke: "#cccccc", width: 1.5 }   // Generic marker
//         }
//     },
//     constellations: {
//         show: false,    // Show constellations
//         names: false,   // Show constellation names
//         desig: false,   // Show short constellation names (3 letter designations)
//         namestyle: {
//             fill: "#cccc99", align: "center", baseline: "middle", opacity: 0.8,
//             font: ["bold 14px Helvetica, Arial, sans-serif",  // Different fonts for brighter &
//                 "bold 12px Helvetica, Arial, sans-serif",  // sdarker constellations
//                 "bold 11px Helvetica, Arial, sans-serif"]
//         },
//         lines: false,   // Show constellation lines
//         linestyle: { stroke: "#cccccc", width: 1, opacity: 0.6 },
//         bounds: false,  // Show constellation boundaries
//         boundstyle: { stroke: "#cccc00", width: 0.5, opacity: 0.8, dash: [2, 4] }
//     },
//     mw: {
//         show: false,    // Show Milky Way as filled polygons
//         style: { fill: "#ffffff", opacity: "0.15" }
//     },
//     lines: {
//         graticule: {
//             show: true, stroke: "#cccccc", width: 0.6, opacity: 0.8,      // Show graticule lines
//             // grid values: "outline", "center", or [lat,...] specific position
//             lon: { pos: ["center"], fill: "#eee", font: "10px Helvetica, Arial, sans-serif" },
//             // grid values: "outline", "center", or [lon,...] specific position
//             lat: { pos: ["center"], fill: "#eee", font: "10px Helvetica, Arial, sans-serif" }
//         },
//         equatorial: { show: true, stroke: "#aaaaaa", width: 1.3, opacity: 0.7 },    // Show equatorial plane
//         ecliptic: { show: true, stroke: "#66cc66", width: 1.3, opacity: 0.7 },      // Show ecliptic plane
//         galactic: { show: false, stroke: "#cc6666", width: 1.3, opacity: 0.7 },     // Show galactic plane
//         supergalactic: { show: false, stroke: "#cc66cc", width: 1.3, opacity: 0.7 } // Show supergalactic plane
//     }
// };

function generateID(length) {
    return parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(length).toString().replace(".", ""));
}

function hour2degree(ra) { 
    return ra > 12 ? (ra - 24) * 15 : ra * 15;
}

class AnimatedImage {

    id;
    path;
    name;
    numImages;
    loaded;
    images;
    currentIndex = 0;
    replaceString = "%%";

    constructor(id, path, name, numImages) {
        this.id = id;
        this.path = path;
        this.name = name;
        this.numImages = numImages;
        this.loaded = false;
        this.images = [];
    }

    load() {
        if (!this.loaded) {
            for (let i = 0; i < this.numImages; i++) {
                const tempImage = new Image();
                let numberString = `${i}`;
                if (i < 10) {
                    numberString = "0" + numberString;
                }
                const imageName = this.path + `/${this.name.replace(this.replaceString, numberString)}`;
                tempImage.src = imageName;
                this.images.push(tempImage);
            }
            this.loaded = true;
        }
    }

    free() {
        this.loaded = false;
        this.images = [];
    }

    getImage() {
        if (this.loaded) {
            const imageIndex = this.currentIndex;
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
            return this.images[imageIndex];
        } else {
            return undefined;
        }
    }
}


class DataPoint {

    uid;
    observerID;
    dec;
    ra;
    year;
    machine;

    constructor(observerID, dec, ra, year, machine) {
        this.observerID = observerID;
        this.dec = dec;
        this.ra = ra;
        this.year = year;
        this.machine = machine;

        this.uid = generateID(16);
    }
}

class DisplayFilter {

    dataPoints;
    currentlyVisiblePoints;
    nameMaps;

    filtersEnabled;
    enableNameFilter;
    enableYearFilter;

    selectedMinYear;
    selectedMaxYear;selectedMaxYear
    minYear;
    maxYear;

    constructor() {
        this.dataPoints = {};
        this.currentlyVisiblePoints = {};
        this.nameMaps = {};

        this.filtersEnabled = 0;
        this.enableNameFilter = false;
        this.enableYearFilter = false;
        
        this.selectedMinYear = undefined;
        this.selectedMaxYear = undefined;
        this.minYear = 1891;
        this.maxYear = 1928;
    }

    registerNameFilter(name, ids) {
        if (name in this.nameMaps) {
            console.error(`Name filter already contains name: ${name}`, ids, this.nameMaps[name]);
            return;
        }

        this.nameMaps[name] = ids;
    }

    registerDataPoint(dataPoint) {
        if (dataPoint.uid in this.dataPoints) {
            console.error(`Data points already contains id: ${dataPoint.uid}`, dataPoint, this.dataPoints[dataPoint.uid]);
            return;
        }

        this.dataPoints[dataPoint.uid] = dataPoint;
    }

    displayPoint(pointID) {
        this.currentlyVisiblePoints[pointID] = true;
        const imageID = this.dataPoints[pointID].observerID;
        animatedImages[imageID].load();
    }

    pointDisplaying(pointID) {
        return pointID in this.currentlyVisiblePoints;
    }
}
const DF = new DisplayFilter();

const imageCount = {
     1: 29,
     2: 50,
     3: 55,
     4: 41,
     5: 58,
     6: 64,
     7: 58,
     8: 55,
     9: 61,
    10: 55,
    11: 61,
    12: 64,
    13: 45,
    14: 53,
    15: 64,
    16: 53,
    17: 64,
    18: 60,
    19: 55,
    20: 62,
    21: 63,
    22: 64,
    23: 55,
    24: 65,
    25: 64,
    26: 62,
    27: 64,
    28: 63,
    29: 59,
    30: 48,
    31: 63,
    32: 64,
    33: 57,
    34: 59,
    35: 63,
    36: 59,
    37: 64,
    38: 64,
    39: 42,
    40: 65,
    41: 61,
    42: 64,
    43: 55,
    44: 64,
    45: 59,
    46: 60,
    47: 65,
    48: 65,
    49: 47,
    50: 24,
    51: 40,
    52: 40,
    53: 43,
    54: 43,
    55: 48,
    56: 40,
    57: 40
};

const PLATE_DATA_FILE = "data-custom/FilterData.json";

const rateLimit = false;
var usedIds = [];

// const test = new AnimatedImage("36", "data-custom/36", "frame_%%_delay-0.01s.png", 59);

var animatedImages = {};

var config = {
    width: 0,     // Default width, 0 = full parent width; height is determined by projection
    projection: "aitoff",
    projectionRatio: null,
    transform: "equatorial",
    center: null,
    // center: [-65, 0],
    orientationfixed: true,
    background: { fill: "#000000", stroke: "#000000", opacity: 1 },
    adaptable: true,
    interactive: true,
    disableAnimations: false,
    form: false,
    location: false,    // Display location settings
    controls: true,
    container: "celestial-map",
    datapath: "data",
    stars: {
        show: true,    // Show stars
        limit: 6,      // Show only stars brighter than limit magnitude
        colors: true,  // Show stars in spectral colors, if not use "color"
        style: { fill: "#ffffff", opacity: 1 }, // Default style for stars
        names: true,   // Show star names (Bayer, Flamsteed, Variable star, Gliese, whichever applies first)
        proper: true, // Show proper name (if present)
        desig: false,  // Show all names, including Draper and Hipparcos
        namelimit: 2.5,  // Show only names for stars brighter than namelimit
        namestyle: { fill: "#ddddbb", font: "11px Georgia, Times, 'Times Roman', serif", align: "left", baseline: "top" },
        propernamestyle: { fill: "#ddddbb", font: "11px Georgia, Times, 'Times Roman', serif", align: "right", baseline: "bottom" },
        propernamelimit: 1.5,  // Show proper names for stars brighter than propernamelimit
        size: 7,       // Maximum size (radius) of star circle in pixels
        exponent: -0.28, // Scale exponent for star size, larger = more linear
        data: 'stars.6.json' // Data source for stellar data
        //data: 'stars.8.json' // Alternative deeper data source for stellar data
      },
    dsos: { show: false },
    mw: {
        style: { fill: "#996", opacity: 0.1 }
    },
};

// Asterisms canvas style properties for lines and text
var lineStyle = {
    stroke: "#f00",
    fill: "rgba(255, 204, 204, 0.4)",
    width: 3
};

var textStyle = {
    fill: "#f00",
    font: "bold 15px Helvetica, Arial, sans-serif",
    align: "center",
    baseline: "middle"
};

// JSON structure of the object to be displayed, in this case
// the Summer Triangle between Vega, Deneb and Altair
var jsonLine = {
    "type": "FeatureCollection",
    // this is an array, add as many objects as you want
    "features": []
};


function setup() {
    for (let i = 1; i <= 57; i++) {
        const indexString = i < 10 ? "0" + i : "" + i;
        const path = `data-custom/signatures/${indexString}`;
        const frameName = "frame_%%_delay-0.1s.png";
        const numImages = imageCount[indexString];
    
        animatedImages[i] = new AnimatedImage(
            i,
            path,
            frameName,
            numImages
        );
    }


    // Load data
    fetch(PLATE_DATA_FILE)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            // Create data points for every json object
            for (const point of data) {
                const tempDataPoint = new DataPoint(
                    point["id"],
                    point["dec"],
                    point["ra"],
                    point["year"],
                    point["machine"]
                );

                // Register with filter
                DF.registerDataPoint(tempDataPoint);

                // Register point on the map
                jsonLine["features"].push(
                    {
                        "type": "Feature",
                        "uid": tempDataPoint.uid,
                        "image_id": point["id"],
                        "properties": {
                            "loc": [
                                hour2degree(point["ra"]), point["dec"]
                            ]
                        }
                    }
                );
            }

            Celestial.add({
                type: "line",
            
                callback: function (error, json) {
            
                    if (error) return console.warn(error);
                    // Load the geoJSON file and transform to correct coordinate system, if necessary
                    var asterism = Celestial.getData(jsonLine, config.transform);
            
                    // Add to celestial objects container in d3
                    Celestial.container.selectAll(".asterisms")
                        .data(asterism.features)
                        .enter().append("path")
                        .attr("class", "ast");
                    // Trigger redraw to display changes
                    Celestial.redraw();
                },
            
                redraw: function () {
                    // Select the added objects by class name as given previously
                    Celestial.container.selectAll(".ast").each(function (d) {
                        if (DF.pointDisplaying(d.uid)) {
                            console.log("Displaying", d)
                            // Set line styles
                            Celestial.setStyle(lineStyle);
                            // Project objects on map
                            Celestial.map(d);
                            // draw on canvas
                            Celestial.context.fill();
                            Celestial.context.stroke();

                
                            // If point is visible (this doesn't work automatically for points)
                            if (Celestial.clip(d.properties.loc)) {
                                // get point coordinates
                                pt = Celestial.mapProjection(d.properties.loc);
                                // Draw a helpful rect (TEMP)
                                Celestial.context.rect(pt[0], pt[1], 10, 10);
                                Celestial.context.fill();

                                if (animatedImages[d.image_id] != undefined) {
                                    const currentImage = animatedImages[d.image_id].getImage();

                                    const imgWidth = Celestial.context.canvas.width / 10;
                                    const imgHeight = currentImage.height / (currentImage.width / imgWidth);
                                    const xOff = imgWidth / 2;
                                    const yOff = imgHeight / 2;
                                    Celestial.context.drawImage(currentImage, pt[0] - xOff, pt[1] - yOff, imgWidth, imgHeight);
                                }
                            }
                        }
                    });
                }
            });


            Celestial.display(config);

            d3.select('#celestial-map').on('mousedown', function () { clearInterval(refreshInterval) })
            d3.select('#celestial-map').on('mouseup', function () { 
                refreshInterval = setInterval(
                    () => {
                        Celestial.redraw();
                    },
                    20
                );
            });

            refreshInterval = setInterval(
                () => {
                    Celestial.redraw();
                },
                20
            );
        })
        .catch(error => console.log(`Error loading location data: ${error}`))

    // fetch("data-custom/plateLocations.json")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         for (const point of data["Items"]) {
    //             const id = point["id"] < 10 ? "0" + point["id"] : "" + point["id"];
    //             if (rateLimit) {
    //                 if (usedIds.includes(id)) {
    //                     continue;
    //                 } else {
    //                     usedIds.push(id);
    //                 }
    //             }
    //             jsonLine["features"].push(
    //                 {
    //                     "type": "Feature",
    //                     "id": id,
    //                     "properties": {
    //                         "loc": [
    //                             hour2degree(point["ra"]), point["dec"]
    //                         ]
    //                     }
    //                 }
    //             )
    //         }

    //         console.log(jsonLine);

        //     Celestial.add({
        //         type: "line",
            
        //         callback: function (error, json) {
            
        //             if (error) return console.warn(error);
        //             // Load the geoJSON file and transform to correct coordinate system, if necessary
        //             var asterism = Celestial.getData(jsonLine, config.transform);
            
        //             // Add to celestial objects container in d3
        //             Celestial.container.selectAll(".asterisms")
        //                 .data(asterism.features)
        //                 .enter().append("path")
        //                 .attr("class", "ast");
        //             // Trigger redraw to display changes
        //             Celestial.redraw();
        //         },
            
        //         redraw: function () {
        //             // Select the added objects by class name as given previously
        //             Celestial.container.selectAll(".ast").each(function (d) {
        //                 // Set line styles
        //                 Celestial.setStyle(lineStyle);
        //                 // Project objects on map
        //                 Celestial.map(d);
        //                 // draw on canvas
        //                 Celestial.context.fill();
        //                 Celestial.context.stroke();

            
        //                 // If point is visible (this doesn't work automatically for points)
        //                 if (Celestial.clip(d.properties.loc)) {
        //                     // get point coordinates
        //                     pt = Celestial.mapProjection(d.properties.loc);
        //                     Celestial.context.rect(pt[0], pt[1], 10, 10);
        //                     Celestial.context.fill();
        //                     // Set text styles
        //                     // Celestial.setTextStyle(textStyle);
        //                     // and draw text on canvas
        //                     // Celestial.context.fillText(d.properties.n, pt[0], pt[1]);
        //                     if (animatedImages[d.id] != undefined) {
        //                         const currentImage = animatedImages[d.id].getImage();
        //                         // const xOff = 0;
        //                         // const yOff = 0;
        //                         // const xOff = currentImage.width / 2;
        //                         // const yOff = currentImage.height / 2;
        //                         const imgWidth = Celestial.context.canvas.width / 10;
        //                         const imgHeight = currentImage.height / (currentImage.width / imgWidth);
        //                         const xOff = imgWidth / 2;
        //                         const yOff = imgHeight / 2;
        //                         Celestial.context.drawImage(currentImage, pt[0] - xOff, pt[1] - yOff, imgWidth, imgHeight);
        //                         // console.log(image)
        //                     }
        //                 }
        //             });
        //         }
        //     });


        //     Celestial.display(config);

        //     d3.select('#celestial-map').on('mousedown', function () { clearInterval(refreshInterval) })
        //     d3.select('#celestial-map').on('mouseup', function () { 
        //         refreshInterval = setInterval(
        //             () => {
        //                 Celestial.redraw();
        //             },
        //             20
        //         );
        //     });

        //     refreshInterval = setInterval(
        //         () => {
        //             Celestial.redraw();
        //         },
        //         20
        //     );
        // })
        // .catch(error => console.log(`Error loading location data: ${error}`))
}

setup();

/*

        {
            "type": "Feature",
            "id": "36",
            "properties": {
                // Name
                // "n": "Summer Triangle",
                // Location of name text on the map
                "loc": [-67.5, 52]
            }, 
            // "geometry": {
            //     // the line object as an array of point coordinates
            //     "type": "MultiLineString",
            //     "coordinates": [[
            //         [-80.7653, 38.7837],
            //         [-62.3042, 8.8683],
            //         [-49.642, 45.2803],
            //         [-80.7653, 38.7837]
            //     ]]
            // }
        }
    ]
};*/



