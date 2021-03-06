/**
 * Created by Shahar on 23/12/2016.
 */

// "Calling all parties
$.ajax({
    method: "GET",
    url: "http://oknesset.org/api/v2/party",
    success: function (datapParty) {
        drawChart(datapParty.objects)

    }
});
// Painting the pie chart
function drawChart(dataParty) {
    var parties = [];

    for (var i = 0; i < dataParty.length; i++) {
        parties[i] = [dataParty[i].name, dataParty[i].number_of_seats];
    }
    parties.unshift(['parties', 'number_of_seats']);
    var data = google.visualization.arrayToDataTable(parties);
    var options = {
        colors: ['#CB4335', '#D7BDE2', '#7D3C98', '#2980B9', '#F9E79F', '#FAD7A0', '#F5CBA7', '#229954', '#85929E', '#34495E'],
        width: '100%',
        height: '100%',
        is3D: true,
        chartArea: {
            height: '100%',
            width: '100%'
        },
        legend: {
            position: 'labeled',
            textStyle: {color: 'black', fontSize: 16}
        },
        backgroundColor: '#fff'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);


}

