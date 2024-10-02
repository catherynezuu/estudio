//  Distribución de consumo energético total (Kwh)
const data1 = [{
    values: [19, 26, 55, 20],
    labels: ['Aire', 'Compresor', 'banda1','banda2'],
    type: 'pie',
    insidetextorientation: 'radial',
    marker: {
        colors: ['#47bd62', '#c52d20', '#0b9ed8','#781ad0']
    }
}];

const layout1 = {
    paper_bgcolor: "transparent",
    plot_bgcolor: "transparent",
    font: {
        color: "#eff2f6",
    },
    margin: {
        t: 50,
    },
    xaxis: {
        gridcolor: "#303030",
    },
    yaxis: {
        gridcolor: "#303030",
    },
    height: 300,
};

Plotly.newPlot('failures-count-dash', data1, layout1);


//  Comparación de KPIs vs esperados 
function getRandomKPI() {
    return getRandomInt(60, 100);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const data2 = [{
    type: 'scatterpolar',
    r: [getRandomKPI(), getRandomKPI(), getRandomKPI(), getRandomKPI()],
    theta: ['rendimiento', 'Calidad', 'disponibilidad', 'OEE de la linea'],
    fill: 'toself',
    name: 'KPIs Actuales'
}, {
    type: 'scatterpolar',
    r: [getRandomKPI(), getRandomKPI(), getRandomKPI(), getRandomKPI()],
    theta: ['rendimiento', 'Calidad', 'disponibilidad', 'OEE de la linea'],
    fill: 'toself',
    name: 'KPIs Esperados'
}];

const layout2 = {
    polar: {
        radialaxis: {
            visible: true,
            range: [0, 100]
        }
    },
    paper_bgcolor: "transparent",
    plot_bgcolor: "transparent",
    
    font: {
        color: "#eff2f6",
    },
    margin: {
        t: 50,
    },
    xaxis: {
        gridcolor: "#303030",
    },
    yaxis: {
        gridcolor: "#303030",
    },
    height: 300,
    
};

Plotly.newPlot('failures-types-dash', data2, layout2);



// Consumo energético vs referencia 
const data3 = [
    {
        x: ['aire', 'compresor', 'banda1', 'banda2'],
        y: [500, 600, 700, 800, ],
        type: 'bar',
        name: 'Consumo Actual',
        marker: { color: '#1f77b4' }
    },
    {
        x: ['aire', 'compresor', 'banda1', 'banda2'],
        y: [450, 550, 650, 750,],
        type: 'bar',
        name: 'Referencia',
        marker: { color: '#ff7f0e' }
    }
];

const layout3 = {
    paper_bgcolor: "transparent",
    plot_bgcolor: "transparent",
    font: {
        color: "#eff2f6",
    },
    margin: {
        t: 50,
    },
    xaxis: {
        gridcolor: "#303030",
    },
    yaxis: {
        gridcolor: "#303030",
        title: 'Consumo (Kwh)',
    },
    height: 300,
    with:1000,
};

Plotly.newPlot('failures-equipment-dash', data3, layout3);


//  Contribución al consumo energético total 
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomYValues = [
    getRandomInt(200, 500),
    getRandomInt(100, 400),
    getRandomInt(-300, -100),
    getRandomInt(50, 300),
    getRandomInt(400, 800)
];

const data4 = [{
    type: 'waterfall',
    relative: ['total', 'increment', 'decrement', 'increment', 'total'],
    x: ['aire', 'compresor', 'banda1', 'banda2'],
    y: randomYValues,
    text: ['aire', 'compresor', 'banda1', 'banda2'],
    marker: {
        color: ['#6A3D9A', '#B15928', '#E31A1C', '#33A02C', '#1F78B4']
    }
}];

const layout4 = {
    paper_bgcolor: "transparent",
    plot_bgcolor: "transparent",
    font: {
        color: "#eff2f6",
    },
    margin: {
        t: 50,
    },
    xaxis: {
        gridcolor: "#303030",
    },
    yaxis: {
        gridcolor: "#303030",
    },
    height: 300,
};

Plotly.newPlot('kpi-dash', data4, layout4);



