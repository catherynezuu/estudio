// Datos de ejemplo para el gráfico
const time = [...Array(100).keys()];
const flow = [48.5, 51.2, 53.1, 54.5, 52.3, 49.8, 55.2, 56.1, 54.8, 50.3, 
              // (agrega los valores suavizados aquí) 
              48.5]; 

const warningSetPoint = 60;
const alarmSetPoint = 70;

// Crear el gráfico
const data1 = [{
    x: time,
    y: flow,
    mode: 'lines',
    name: 'Flujo',
    line: {
        color: '#0b9ed8',
        width: 2
    }
}];

// Líneas de set points
const warningLine = {
    type: 'line',
    x0: 0,
    x1: 100,
    y0: warningSetPoint,
    y1: warningSetPoint,
    line: {
        color: 'orange',
        width: 2,
        dash: 'dash'
    },
    name: 'Set Point de Advertencia'
};

const alarmLine = {
    type: 'line',
    x0: 0,
    x1: 100,
    y0: alarmSetPoint,
    y1: alarmSetPoint,
    line: {
        color: 'red',
        width: 2,
        dash: 'dash'
    },
    name: 'Set Point de Alarma'
};

const layout1 = {
    title: 'Tendencia de Flujo',
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
        title: 'Tiempo',
    },
    yaxis: {
        gridcolor: "#303030",
        title: 'Flujo',
    },
    shapes: [warningLine, alarmLine],
    height: 300,
};

Plotly.newPlot('failures-count-dash', data1, layout1);
