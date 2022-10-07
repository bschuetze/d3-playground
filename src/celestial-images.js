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

class AnimatedImage {

    id;
    images;
    currentIndex = 0;
    replaceString = "%%";

    constructor(id, path, name, numImages) {
        this.id = id;
        this.images = [];

        for (let i = 0; i < numImages; i++) {
            const tempImage = new Image();
            let numberString = `${i}`;
            if (i < 10) {
                numberString = "0" + numberString;
            }
            const imageName = path + `/${name.replace(this.replaceString, numberString)}`;
            tempImage.src = imageName;
            this.images.push(tempImage);
        }
    }

    getImage() {
        const imageIndex = this.currentIndex;
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        return this.images[imageIndex];
    }
}

const imageCount = {
    "01": 29,
    "02": 50,
    "03": 55,
    "04": 41,
    "05": 58,
    "06": 64,
    "07": 58,
    "08": 55,
    "09": 61,
    "10": 55,
    "11": 61,
    "12": 64,
    "13": 45,
    "14": 53,
    "15": 64,
    "16": 53,
    "17": 64,
    "18": 60,
    "19": 55,
    "20": 62,
    "21": 63,
    "22": 64,
    "23": 55,
    "24": 65,
    "25": 64,
    "26": 62,
    "27": 64,
    "28": 63,
    "29": 59,
    "30": 48,
    "31": 63,
    "32": 64,
    "33": 57,
    "34": 59,
    "35": 63,
    "36": 59,
    "37": 64,
    "38": 64,
    "39": 42,
    "40": 65,
    "41": 61,
    "42": 64,
    "43": 55,
    "44": 64,
    "45": 59,
    "46": 60,
    "47": 65,
    "48": 65,
    "49": 47,
    "50": 24,
    "51": 40,
    "52": 40,
    "53": 43,
    "54": 43,
    "55": 48,
    "56": 40,
    "57": 40
};

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
    
        animatedImages[indexString] = new AnimatedImage(
            indexString,
            path,
            frameName,
            numImages
        );
    }

    fetch("data-custom/plateLocations.json")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            for (const point of data["Items"]) {
                const id = point["id"] < 10 ? "0" + point["id"] : "" + point["id"];
                if (usedIds.includes(id)) {
                    continue;
                } else {
                    usedIds.push(id);
                }
                jsonLine["features"].push(
                    {
                        "type": "Feature",
                        "id": id,
                        "properties": {
                            "loc": [
                                hour2degree(point["ra"]), point["dec"]
                                // point["dec"], point["ra"]
                            ]
                        }
                    }
                )
            }

            console.log(jsonLine);

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
                            Celestial.context.rect(pt[0], pt[1], 10, 10);
                            Celestial.context.fill();
                            // Set text styles
                            // Celestial.setTextStyle(textStyle);
                            // and draw text on canvas
                            // Celestial.context.fillText(d.properties.n, pt[0], pt[1]);
                            if (animatedImages[d.id] != undefined) {
                                const currentImage = animatedImages[d.id].getImage();
                                // const xOff = 0;
                                // const yOff = 0;
                                // const xOff = currentImage.width / 2;
                                // const yOff = currentImage.height / 2;
                                const imgWidth = Celestial.context.canvas.width / 10;
                                const imgHeight = currentImage.height / (currentImage.width / imgWidth);
                                const xOff = imgWidth / 2;
                                const yOff = imgHeight / 2;
                                Celestial.context.drawImage(currentImage, pt[0] - xOff, pt[1] - yOff, imgWidth, imgHeight);
                                // console.log(image)
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
}

setup();

function hour2degree(ra) { 
    return ra > 12 ? (ra - 24) * 15 : ra * 15;
}

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



