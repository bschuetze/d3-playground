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

    images;
    currentIndex = 0;
    replaceString = "%%";

    constructor(path, name, numImages) {
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

const test = new AnimatedImage("data-custom/36", "frame_%%_delay-0.01s.png", 59);

const image = new Image();
image.src = "data-custom/36.gif";

var config = {
    projection: "airy",
    center: [-65, 0],
    background: { fill: "#fff", stroke: "#000", opacity: 1, width: 1 },
    datapath: "https://ofrohn.github.io/data/",
    stars: {
        colors: false,
        names: false,
        style: { fill: "#000", opacity: 1 },
        limit: 6,
        size: 5
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
},
    textStyle = {
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
    "features": [
        {
            "type": "Feature",
            "id": "SummerTriangle",
            "properties": {
                // Name
                "n": "Summer Triangle",
                // Location of name text on the map
                "loc": [-67.5, 52]
            }, "geometry": {
                // the line object as an array of point coordinates
                "type": "MultiLineString",
                "coordinates": [[
                    [-80.7653, 38.7837],
                    [-62.3042, 8.8683],
                    [-49.642, 45.2803],
                    [-80.7653, 38.7837]
                ]]
            }
        }
    ]
};

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
                // Set text styles
                Celestial.setTextStyle(textStyle);
                // and draw text on canvas
                Celestial.context.fillText(d.properties.n, pt[0], pt[1]);
                
                const currentImage = test.getImage();
                const xOff = currentImage.width / 2;
                const yOff = currentImage.height / 2;
                Celestial.context.drawImage(currentImage, pt[0] - xOff, pt[1] - yOff);
                // console.log(image)
            }
        });
    }
});

Celestial.display(config);

test = setInterval(
    () => {
        Celestial.redraw();
    },
    100
);