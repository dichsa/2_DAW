var ctx = document.getElementById('myChart').getContext('2d');
var ctx1 = document.getElementById('myChart1').getContext('2d');
var chart = new Chart(ctx, {

    type: 'line',


    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'My First Line Dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45, 87, 12, 23, 54, 62, 11]
        }]
    },


    options: {}

});
    var chart1 = new Chart(ctx1, {

        type: 'bar',

        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'My First Bar Dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45, 87, 12, 23, 54, 62, 11]
            }]
        },


        options: {}

});