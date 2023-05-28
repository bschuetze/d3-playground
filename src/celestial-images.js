const CFG = {
    signatureWidthDivisor: 15,
    signatureTimeStepMillis: 100,
};

function generateID(length) {
    return parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(length).toString().replace(".", ""));
}

function hour2degree(ra) {
    return ra > 12 ? (ra - 24) * 15 : ra * 15;
}

const MACHINES = [
    "Rep1",
    "Rep2",
    "Slide",
    "Slide1",
    "Syd",
    "Syd2",
    "SydA",
    "SydB",
    "Comb"
];

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
            return this.images[this.currentIndex];
        } else {
            return undefined;
        }
    }

    nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
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
    nameFilterEnabled;
    yearFilterEnabled;
    machineFilterEnabled;
    decFilterEnabled;

    nameFilteredDataPoints;
    yearFilteredDataPoints;
    machineFilteredDataPoints;
    decFilteredDataPoints;
    raFilteredDataPoints;

    decMin;
    decMax;
    raMin;
    raMax;

    selectedYears;
    selectedMachines;
    selectedDecs;
    selectedRAs;

    minYear;
    maxYear;

    constructor() {
        this.dataPoints = {};
        this.currentlyVisiblePoints = new Set();
        this.nameMaps = {};

        this.selectedMachines = {};
        for (const machine of MACHINES) {
            this.selectedMachines[machine] = false;
        }

        this.filtersEnabled = 0;
        this.nameFilterEnabled = false;
        this.yearFilterEnabled = false;
        this.machineFilterEnabled = false;
        this.decFilterEnabled = false;

        this.nameFilteredDataPoints = new Set();
        this.yearFilteredDataPoints = new Set();
        this.machineFilteredDataPoints = new Set();
        this.decFilteredDataPoints = new Set();
        this.raFilteredDataPoints = new Set();

        this.selectedRAs = {};
        this.raMin = 0;
        this.raMax = 23;
        for (let i = this.raMin; i <= this.raMax; i++) {
            this.selectedRAs[i] = false;
        }

        this.selectedDecs = {};
        this.decMin = -64;
        this.decMax = -55;
        for (let i = this.decMin; i <= this.decMax; i++) {
            this.selectedDecs[i] = false;
        }

        this.selectedYears = {};
        this.minYear = 1891;
        this.maxYear = 1928;
        for (let i = this.minYear; i <= this.maxYear; i++) {
            this.selectedYears[i] = false;
        }
    }

    registerNameFilter(name, ids) {
        if (name in this.nameMaps) {
            console.error(`Name filter already contains name: ${name}`, ids, this.nameMaps[name].ids);
            return;
        }

        this.nameMaps[name] = {
            "ids": ids,
            "enabled": false,
        };
    }

    registerDataPoint(dataPoint) {
        if (dataPoint.uid in this.dataPoints) {
            console.error(`Data points already contains id: ${dataPoint.uid}`, dataPoint, this.dataPoints[dataPoint.uid]);
            return;
        }

        this.dataPoints[dataPoint.uid] = dataPoint;
    }

    getNameFilterOptions() {
        return Object.keys(this.nameMaps);
    }

    getRAFilterOptions() {
        return Object.keys(this.selectedRAs);
    }

    getDecFilterOptions() {
        return Object.keys(this.selectedDecs);
    }

    getYearFilterOptions() {
        return ["1891 - 1899", "1900 - 1909", "1910 - 1919", "1920 - 1929"];
    }

    getMachineFilterOptions() {
        return Object.keys(this.selectedMachines);
    }

    setNameFilter(names) {
        // Disable all first
        for (const name in this.nameMaps) {
            this._disableNameFilter(name);
        }

        // Enable selected
        for (const name of names) {
            this._enableNameFilter(name);
        }

        this.updateNameFilteredDataPoints();
    }

    _enableNameFilter(name) {
        if (!(name in this.nameMaps)) {
            console.error(`Name filter does not contain name: ${name}`);
            return;
        }

        if (this.nameMaps[name]["enabled"]) {
            // console.info(`Name filter for ${name} is already enabled`);
            return;
        }

        this.nameMaps[name]["enabled"] = true;
    }

    _disableNameFilter(name) {
        if (!(name in this.nameMaps)) {
            console.error(`Name filter does not contain name: ${name}`);
            return;
        }

        if (!this.nameMaps[name]["enabled"]) {
            // console.info(`Name filter for ${name} is already disabled`);
            return;
        }

        this.nameMaps[name]["enabled"] = false;
    }

    updateNameFilteredDataPoints() {
        let visibleIDs = new Set();
        this.nameFilteredDataPoints = new Set();

        for (const name in this.nameMaps) {
            const nameFilter = this.nameMaps[name];
            if (nameFilter["enabled"]) {
                for (const id of nameFilter["ids"]) {
                    visibleIDs.add(id);
                }
            }
        }

        if (visibleIDs.size == 0) {
            this.nameFilterEnabled = false;
        } else {
            this.nameFilterEnabled = true;
            for (const dataPointID in this.dataPoints) {
                const dataPoint = this.dataPoints[dataPointID];
                if (visibleIDs.has(dataPoint["observerID"])) {
                    this.nameFilteredDataPoints.add(dataPoint["uid"]);
                }
            }
        }

        this.updateFilteredDataPoints();
    }


    setYearFilter(years) {
        // Disable all first
        for (const year in this.selectedYears) {
            this._disableYearFilter(year);
        }

        // Enable selected
        for (const year of years) {
            this._enableYearFilter(year);
        }

        this.updateYearFilter();
    }

    _enableYearFilter(year) {
        if (year < this.minYear || year > this.maxYear) {
            console.error(`Year must be in range [${this.minYear} - ${this.maxYear}]`);
            return;
        }

        if (this.selectedYears[year]) {
            // console.log(`Filter for year ${year} is already enabled`);
            return;
        }

        this.selectedYears[year] = true;
    }

    _disableYearFilter(year) {
        if (year < this.minYear || year > this.maxYear) {
            console.error(`Year must be in range [${this.minYear} - ${this.maxYear}]`);
            return;
        }

        if (!this.selectedYears[year]) {
            // console.log(`Filter for year ${year} is already disabled`);
            return;
        }

        this.selectedYears[year] = false;
    }

    updateYearFilter() {
        this.yearFilteredDataPoints = new Set();

        let visibleYears = new Set();
        for (const year in this.selectedYears) {
            if (this.selectedYears[year]) {
                visibleYears.add(Number.parseInt(year));
            }
        }

        if (visibleYears.size > 0) {
            for (const dataPointID in this.dataPoints) {
                const dataPoint = this.dataPoints[dataPointID];
                if (visibleYears.has(dataPoint["year"])) {
                    this.yearFilteredDataPoints.add(dataPoint["uid"]);
                }
            }
        }

        this.updateFilteredDataPoints();
    }


    setDecFilter(declinations) {
        // Disable all first
        for (const dec in this.selectedDecs) {
            this._disableDecFilter(dec);
        }

        // Enable selected
        for (const dec of declinations) {
            this._enableDecFilter(dec);
        }

        this.updateDecFilter();
    }


    _enableDecFilter(declination) {
        if (declination < this.decMin || declination > this.decMax) {
            console.error(`Declination must be in range [${this.decMin} - ${this.decMax}]`);
            return;
        }

        // Round it
        if (declination != Math.round(declination)) {
            console.warn(`Declination should be an integer value, rounding from ${declination} to ${Math.round(declination)}`)
            declination = Math.round(declination);
        }

        if (this.selectedDecs[declination]) {
            // console.log(`Filter for declination ${declination} is already enabled`);
            return;
        }

        this.selectedDecs[declination] = true;
    }

    _disableDecFilter(declination) {
        if (declination < this.decMin || declination > this.decMax) {
            console.error(`Declination must be in range [${this.decMin} - ${this.decMax}]`);
            return;
        }

        // Round it
        if (declination != Math.round(declination)) {
            console.warn(`Declination should be an integer value, rounding from ${declination} to ${Math.round(declination)}`)
            declination = Math.round(declination);
        }

        if (!this.selectedDecs[declination]) {
            // console.log(`Filter for declination ${declination} is already disabled`);
            return;
        }

        this.selectedDecs[declination] = false;
    }

    updateDecFilter() {
        this.decFilteredDataPoints = new Set();

        let visibleDeclinations = new Set();
        for (const declination in this.selectedDecs) {
            if (this.selectedDecs[declination]) {
                visibleDeclinations.add(Number.parseInt(declination));
            }
        }

        if (visibleDeclinations.size > 0) {
            for (const dataPointID in this.dataPoints) {
                const dataPoint = this.dataPoints[dataPointID];
                if (visibleDeclinations.has(dataPoint["dec"])) {
                    this.decFilteredDataPoints.add(dataPoint["uid"]);
                }
            }
        }

        this.updateFilteredDataPoints();
    }


    setRAFilter(rightAscensions) {
        // Disable all first
        for (const rightAscension in this.selectedRAs) {
            this._disableRAFilter(rightAscension);
        }

        // Enable selected
        for (const rightAscension of rightAscensions) {
            this._enableRAFilter(rightAscension);
        }

        this.updateRAFilter();
    }
    
    _enableRAFilter(rightAscension) {
        // Floor it
        if (rightAscension != Math.floor(rightAscension)) {
            console.warn(`Right Ascension should be an integer value, rounding down from ${rightAscension} to ${Math.floor(rightAscension)}`)
            declination = Math.floor(declination);
        }

        if (rightAscension < this.raMin || rightAscension > this.raMax) {
            console.error(`Right Ascension must be in range [${this.raMin} - ${this.raMax}]`);
            return;
        }

        if (this.selectedRAs[rightAscension]) {
            // console.log(`Filter for Right Ascension ${rightAscension} is already enabled`);
            return;
        }

        this.selectedRAs[rightAscension] = true;
    }

    _disableRAFilter(rightAscension) {
        // Floor it
        if (rightAscension != Math.floor(rightAscension)) {
            console.warn(`Right Ascension should be an integer value, rounding down from ${rightAscension} to ${Math.floor(rightAscension)}`)
            declination = Math.floor(declination);
        }

        if (rightAscension < this.raMin || rightAscension > this.raMax) {
            console.error(`Right Ascension must be in range [${this.raMin} - ${this.raMax}]`);
            return;
        }

        if (!this.selectedRAs[rightAscension]) {
            // console.log(`Filter for Right Ascension ${rightAscension} is already disabled`);
            return;
        }

        this.selectedRAs[rightAscension] = false;
    }

    updateRAFilter() {
        this.raFilteredDataPoints = new Set();

        let visibleRAs = new Set();
        for (const rightAscension in this.selectedRAs) {
            if (this.selectedRAs[rightAscension]) {
                visibleRAs.add(Number.parseInt(rightAscension));
            }
        }

        if (visibleRAs.size > 0) {
            for (const dataPointID in this.dataPoints) {
                const dataPoint = this.dataPoints[dataPointID];
                if (visibleRAs.has(Math.floor(dataPoint["ra"]))) {
                    this.raFilteredDataPoints.add(dataPoint["uid"]);
                }
            }
        }

        this.updateFilteredDataPoints();
    }


    setMachineFilter(machines) {
        // Disable all first
        for (const machine in this.selectedMachines) {
            this._disableMachineFilter(machine);
        }

        // Enable selected
        for (const machine of machines) {
            this._enableMachineFilter(machine);
        }

        this.updateMachineFilter();
    }

    _enableMachineFilter(machineName) {
        if (!(machineName in this.selectedMachines)) {
            console.error(`List of machines does not include ${machineName}`);
            return;
        }

        if (this.selectedMachines[machineName]) {
            // console.log(`Filter for machine ${machineName} is already enabled`);
            return;
        }

        this.selectedMachines[machineName] = true;
    }

    _disableMachineFilter(machineName) {
        if (!(machineName in this.selectedMachines)) {
            console.error(`List of machines does not include ${machineName}`);
            return;
        }

        if (!this.selectedMachines[machineName]) {
            // console.log(`Filter for machine ${machineName} is already disabled`);
            return;
        }

        this.selectedMachines[machineName] = false;
    }

    updateMachineFilter() {
        this.machineFilteredDataPoints = new Set();

        let visibleMachineNames = new Set();
        for (const machine in this.selectedMachines) {
            if (this.selectedMachines[machine]) {
                visibleMachineNames.add(machine);
            }
        }

        if (visibleMachineNames.size > 0) {
            for (const dataPointID in this.dataPoints) {
                const dataPoint = this.dataPoints[dataPointID];
                if (visibleMachineNames.has(dataPoint["machine"])) {
                    this.machineFilteredDataPoints.add(dataPoint["uid"]);
                }
            }
        }

        this.updateFilteredDataPoints();
    }


    updateFilteredDataPoints() {
        // Everything is visible initially, then filter.
        this.currentlyVisiblePoints = new Set(Object.keys(this.dataPoints).map((x) => Number.parseInt(x)));

        if (this.nameFilteredDataPoints.size > 0) {
            this.currentlyVisiblePoints = new Set([...this.currentlyVisiblePoints].filter(x => this.nameFilteredDataPoints.has(x)));
        }

        if (this.yearFilteredDataPoints.size > 0) {
            this.currentlyVisiblePoints = new Set([...this.currentlyVisiblePoints].filter(x => this.yearFilteredDataPoints.has(x)));
        }

        if (this.machineFilteredDataPoints.size > 0) {
            this.currentlyVisiblePoints = new Set([...this.currentlyVisiblePoints].filter(x => this.machineFilteredDataPoints.has(x)));
        }

        if (this.decFilteredDataPoints.size > 0) {
            this.currentlyVisiblePoints = new Set([...this.currentlyVisiblePoints].filter(x => this.decFilteredDataPoints.has(x)));
        }

        if (this.raFilteredDataPoints.size > 0) {
            this.currentlyVisiblePoints = new Set([...this.currentlyVisiblePoints].filter(x => this.raFilteredDataPoints.has(x)));
        }

        let visibleImages = new Set();
        for (const pointID of this.currentlyVisiblePoints.values()) {
            visibleImages.add(this.dataPoints[pointID].observerID);
        }

        for (const imageID of visibleImages.values()) {
            animatedImages[imageID].load();
        }
    }

    // displayPoint(pointID) {
    //     // this.currentlyVisiblePoints[pointID] = true;
    //     const imageID = this.dataPoints[pointID].observerID;
    //     animatedImages[imageID].load();
    // }

    pointDisplaying(pointID) {
        return this.currentlyVisiblePoints.has(pointID);
    }
}
const DF = new DisplayFilter();

function getSelectedOptions(selectElement) {
    return [...selectElement.options].filter(o => o.selected).map(o => o.value);
}

function getYearsFromRangeString(yearString) {
    let years = yearString.replace("-", "").split(" ");
    let startYear = Number.parseInt(years[0]);
    let endYear = Number.parseInt(years[years.length - 1]);

    if (startYear > endYear) {
        let tmp = startYear;
        startYear = endYear;
        endYear = tmp;
    }

    let ret = [];
    for (let i = startYear; i <= endYear; i++) {
        ret.push(i);
    }

    return ret;
}

class FilterForm {

    nameSelector;
    rightAscensionSelector;
    declinationSelector;
    yearSelector;
    machineSelector;

    constructor() {
    }

    init() {
        this.nameSelector = document.getElementById("observer");
        this.rightAscensionSelector = document.getElementById("rightAscension");
        this.declinationSelector = document.getElementById("declination");
        this.yearSelector = document.getElementById("year");
        this.machineSelector = document.getElementById("machine");

        this.nameSelector.onchange = () => {
            // const selectedItems = [...this.nameSelector.options].filter(o => o.selected).map(o => o.value);
            const selectedItems = getSelectedOptions(this.nameSelector);
            DF.setNameFilter(selectedItems);
        }

        this.rightAscensionSelector.onchange = () => {
            const selectedItems = getSelectedOptions(this.rightAscensionSelector);
            DF.setRAFilter(selectedItems);
        }

        this.declinationSelector.onchange = () => {
            const selectedItems = getSelectedOptions(this.declinationSelector);
            DF.setDecFilter(selectedItems);
        }

        this.yearSelector.onchange = () => {
            const selectedItems = getSelectedOptions(this.yearSelector);

            let years = [];
            for (const yearRange of selectedItems) {
                years = years.concat(getYearsFromRangeString(yearRange));
            }
            console.log(years);
            DF.setYearFilter(years);
        }

        this.machineSelector.onchange = () => {
            const selectedItems = getSelectedOptions(this.machineSelector);
            DF.setMachineFilter(selectedItems);
        }
    }

    registerOptions(selector, options) {
        selector.innerHTML = "";
        for (const optionName of options) {
            let option = document.createElement("option");
            option.value = optionName;
            option.innerHTML = optionName;
            selector.appendChild(option);
        }
    }

    registerNameOptions(names) {
        this.registerOptions(this.nameSelector, names);
    }

    registerRAOptions(raValues) {
        this.registerOptions(this.rightAscensionSelector, raValues);
    }

    registerDeclinationOptions(decValues) {
        this.registerOptions(this.declinationSelector, decValues);
    }

    registerYearOptions(years) {
        this.registerOptions(this.yearSelector, years);
    }

    registerMachineOptions(machines) {
        this.registerOptions(this.machineSelector, machines);
    }
}
const FF = new FilterForm();


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

const NAME_FILTER_DATA = "data-custom/FilterIDs.json";
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
    console.log("Running setup");

    for (let i = 1; i <= 57; i++) {
        const indexString = i < 10 ? "0" + i : "" + i;
        const path = `data-custom/signatures/${indexString}`;
        const frameName = "frame_%%_delay-0.1s.png";
        const numImages = imageCount[i];

        animatedImages[i] = new AnimatedImage(
            i,
            path,
            frameName,
            numImages
        );
    }

    // Load name filter data
    fetch(NAME_FILTER_DATA)
        .then(response => response.json())
        .then(data => {
            for (const nameData of data) {
                DF.registerNameFilter(
                    nameData["Name"],
                    nameData["IDs"]
                );
            }
        })
        .then(() => {
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
                                        // Celestial.context.rect(pt[0], pt[1], 10, 10);
                                        // Celestial.context.fill();

                                        if (animatedImages[d.image_id] != undefined) {
                                            const currentImage = animatedImages[d.image_id].getImage();
                                            if (currentImage == undefined) {
                                                return;
                                            }

                                            const imgWidth = Celestial.context.canvas.width / CFG.signatureWidthDivisor;
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
                                for (const imageID in animatedImages) {
                                    if (animatedImages[imageID].loaded) {
                                        animatedImages[imageID].nextImage();
                                    }
                                }
                                Celestial.redraw();
                            },
                            20
                        );
                    });

                    refreshInterval = setInterval(
                        () => {
                            for (const imageID in animatedImages) {
                                if (animatedImages[imageID].loaded) {
                                    animatedImages[imageID].nextImage();
                                }
                            }
                            Celestial.redraw();
                        },
                        CFG.signatureTimeStepMillis
                    );
                })
                .catch(error => console.log(`Error loading location data: ${error}`));
        }
        )
        .then(() => {
            // Load data into combo boxes
            FF.init();

            // Populate combo boxes
            const observerNames = DF.getNameFilterOptions();
            FF.registerNameOptions(observerNames);

            const raValues = DF.getRAFilterOptions();
            FF.registerRAOptions(raValues);

            const decValues = DF.getDecFilterOptions();
            FF.registerDeclinationOptions(decValues);

            const yearValues = DF.getYearFilterOptions();
            FF.registerYearOptions(yearValues);

            const machineValues = DF.getMachineFilterOptions();
            FF.registerMachineOptions(machineValues);
        });
}

setup();



