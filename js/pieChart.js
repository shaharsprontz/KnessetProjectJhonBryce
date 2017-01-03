/**
 * Created by Shahar on 23/12/2016.
 */

$.ajax({
    method: "GET",
    url: "http://oknesset.org/api/v2/party",
    success: function (datapParty) {
        drawChart(datapParty.objects)

    }
});
    function drawChart(dataParty) {
        var parties = [];
        parties[0] = ['parties', 'number_of_seats'];
        for (var i = 1; i < dataParty.length; i++) {
            parties[i] = [dataParty[i].name, dataParty[i].number_of_seats];
        }
        var data = google.visualization.arrayToDataTable(parties);
        var options = {
            title: 'מפלגות הכנסת',
                width: '100%',
                height: '100%',
            chartArea : {
                height: '100%',
                width: '100%',
                left: 50
            },
            backgroundColor: '#eee'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
    }

