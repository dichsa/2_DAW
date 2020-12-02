let datostemperatura = [3, 4, 3, 5, 7, 10, 12, 15, 12, 12, 10, 7, 5];
let datoslluvia = [40, 60, 110, 70, 20, 15, 10, 15, 90, 120, 80, 50];
const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {

    type: 'bar',


    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'ºC',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data : datostemperatura,
        }, {
            label: 'mm3',
            backgroundColor: 'rgb(184, 184, 184)',
            borderColor: 'rgb(184, 184, 184)',
            data: datoslluvia,
            type: 'line',
        }]
    },

    options: {responsive : false}

});

function filtradoDeDatos() {
    chart.update();
    const meses = document.getElementById("meses").value;
    const temperatura = document.getElementById("temperatura").value;
    const lluvia = document.getElementById("lluvia").value;
    const arraymeses = meses.split(",");
    const arraytemperatura = temperatura.split(",");
    const arraylluvia = lluvia.split(",");
    if (meses == "" && temperatura == "" && lluvia == "") {
        alert("Introduces los datos que te faltan");

    } else {
        arraymeses.forEach((element, index) => {
            datostemperatura[element - 1] = arraytemperatura[index];
            datoslluvia[element - 1] = arraylluvia[index];
        });
    }
}

