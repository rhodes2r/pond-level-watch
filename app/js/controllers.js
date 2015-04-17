'use strict';

/* Controllers */
google.load("visualization", "1", {packages:["corechart"]});
google.load("visualization", "1", {packages:["gauge"]});

google.setOnLoadCallback(function () {
    angular.bootstrap(document.body, ['myApp']);
});
angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope',function($scope) {
		var data1 = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);
		
		var options1 = {
          title: 'Company Performance'
        };
        
        var data2 = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Memory', 80],
          ['CPU', 55],
          ['Network', 68]
        ]);

        var options2 = {
          width: 400, height: 120,
          redFrom: 90, redTo: 100,
          yellowFrom:75, yellowTo: 90,
          minorTicks: 5
        };

        var chart1 = new google.visualization.LineChart(document.getElementById('chartdiv1'));
        chart1.draw(data1, options1);
        
        var chart2 = new google.visualization.Gauge(document.getElementById('chartdiv2'));
		chart2.draw(data2, options2);
		
		
		setInterval(function() {
          data2.setValue(0, 1, 40 + Math.round(60 * Math.random()));
          chart2.draw(data2, options2);
        }, 13000);
        setInterval(function() {
          data2.setValue(1, 1, 40 + Math.round(60 * Math.random()));
          chart2.draw(data2, options2);
        }, 5000);
        setInterval(function() {
          data2.setValue(2, 1, 60 + Math.round(20 * Math.random()));
          chart2.draw(data2, options2);
        }, 26000);

  }])
  .controller('MyCtrl2', [function() {

  }]);


