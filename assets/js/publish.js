document.addEventListener("DOMContentLoaded", function () {
  let pageName = ["Dashboard", "Report", "Device", "Setting"];
  if (document.getElementById("main")) {
    let main = new Swiper("#main", {
      pagination: {
        el: "#page-nav",
        clickable: true,
        bulletActiveClass: "nav-btn-active",
        bulletClass: "nav-btn",
        renderBullet: function (index, className) {
          return `<button type="button" class="${className} ${className}-${
            index + 1
          }">${pageName[index]}</button>`;
        },
      },
    });
  }
  if (document.getElementById("now_state")) {
    var nowState = new Swiper("#now_state", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // paginationClickable: true,
      direction: "horizontal",
      nested: true,
    });
  }
});

if (document.querySelectorAll(".chart").length > 0) {
  // Highcharts.chart("sleep_chart", {
  //   chart: {
  //     type: "line",
  //   },
  //   title: {
  //     text: "",
  //   },
  //   yAxis: {
  //     title: "",
  //     minorGridLineWidth: 0,
  //     gridLineWidth: 0,
  //     alternateGridColor: null,
  //     plotBands: [
  //       {
  //         from: 0,
  //         to: 2,
  //         color: "#0A2647",
  //         label: {
  //           text: "깊은수면",
  //           style: {
  //             color: "#fff",
  //           },
  //         },
  //       },
  //       {
  //         // Light breeze
  //         from: 2,
  //         to: 4,
  //         color: "#144272",
  //         label: {
  //           text: "얕은수면",
  //           style: {
  //             color: "#fff",
  //           },
  //         },
  //       },
  //       {
  //         // Gentle breeze
  //         from: 4,
  //         to: 6,
  //         color: "#205295",
  //         label: {
  //           text: "렘수면",
  //           style: {
  //             color: "#fff",
  //           },
  //         },
  //       },
  //       {
  //         // Moderate breeze
  //         from: 6,
  //         to: 8,
  //         color: "#2C74B3",
  //         label: {
  //           text: "비수면",
  //           style: {
  //             color: "#fff",
  //           },
  //         },
  //       },
  //     ],
  //   },
  //   exporting: {
  //     enabled: false,
  //   },

  //   plotOptions: {
  //     line: {
  //       step: true,
  //       lineWidth: 4,
  //       showInLegend: false,
  //       marker: {
  //         enabled: false,
  //       },
  //       pointStart: 0,
  //     },
  //   },
  //   series: [
  //     {
  //       name: "Hestavollane",
  //       color: "#FFE15D",
  //       data: [
  //         "",
  //         "",
  //         7,
  //         5,
  //         7,
  //         3,
  //         1,
  //         5,
  //         1,
  //         3,
  //         7,
  //         3,
  //         3,
  //         5,
  //         3,
  //         1,
  //         1,
  //         3,
  //         5,
  //         7,
  //         7,
  //         7,
  //       ],
  //     },
  //   ],
  //   navigation: {
  //     menuItemStyle: {
  //       fontSize: "10px",
  //     },
  //   },
  // });

  Highcharts.chart("chart1_1", {
    chart: {
      type: "line",
      animation: Highcharts.svg, // don't animate in old IE
      marginRight: 10,
      events: {
        load: function () {
          // set up the updating of the chart each second
          var series = this.series[0];
          setInterval(function () {
            var x = new Date().getTime(), // current time
              y = Math.random();
            series.addPoint([x, y], true, true);
          }, 1000);
        },
      },
    },

    time: {
      useUTC: false,
    },
    height: "200px",
    title: {
      text: "",
    },
    accessibility: {
      announceNewData: {
        enabled: true,
        minAnnounceInterval: 15000,
        announcementFormatter: function (allSeries, newSeries, newPoint) {
          if (newPoint) {
            return "New point added. Value: " + newPoint.y;
          }
          return false;
        },
      },
    },

    xAxis: {
      type: "datetime",
      tickPixelInterval: 150,
    },

    yAxis: {
      title: {
        text: "",
      },
      plotLines: [
        {
          value: 0,
          width: 1,
        },
      ],
    },

    // tooltip: {
    //   headerFormat: '<b>{series.name}</b><br/>',
    //   pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
    // },

    legend: {
      enabled: false,
    },

    exporting: {
      enabled: false,
    },

    series: [
      {
        name: "Random data",
        color: "#DC3535",
        marker: false,
        data: (function () {
          // generate an array of random data
          var data = [],
            time = new Date().getTime(),
            i;

          for (i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 1000,
              y: Math.random(),
            });
          }
          return data;
        })(),
      },
    ],
  });
  Highcharts.chart("chart1_2", {
    chart: {
      type: "line",
      animation: Highcharts.svg, // don't animate in old IE
      marginRight: 10,
      events: {
        load: function () {
          // set up the updating of the chart each second
          var series = this.series[0];
          setInterval(function () {
            var x = new Date().getTime(), // current time
              y = Math.random();
            series.addPoint([x, y], true, true);
          }, 1000);
        },
      },
    },

    time: {
      useUTC: false,
    },
    height: "200px",
    title: {
      text: "",
    },
    accessibility: {
      announceNewData: {
        enabled: true,
        minAnnounceInterval: 15000,
        announcementFormatter: function (allSeries, newSeries, newPoint) {
          if (newPoint) {
            return "New point added. Value: " + newPoint.y;
          }
          return false;
        },
      },
    },

    xAxis: {
      type: "datetime",
      tickPixelInterval: 150,
    },

    yAxis: {
      title: {
        text: "",
      },
      plotLines: [
        {
          value: 0,
          width: 1,
        },
      ],
    },

    // tooltip: {
    //   headerFormat: '<b>{series.name}</b><br/>',
    //   pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
    // },

    legend: {
      enabled: false,
    },

    exporting: {
      enabled: false,
    },

    series: [
      {
        name: "Random data",
        color: "#68B984",
        marker: false,
        data: (function () {
          // generate an array of random data
          var data = [],
            time = new Date().getTime(),
            i;

          for (i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 1000,
              y: Math.random(),
            });
          }
          return data;
        })(),
      },
    ],
  });

  Highcharts.chart("chart3_1", {
    chart: {
      type: "line",
      animation: Highcharts.svg, // don't animate in old IE
      marginRight: 10,
      events: {
        load: function () {
          // set up the updating of the chart each second
          var series = this.series[0];
          setInterval(function () {
            var x = new Date().getTime(), // current time
              y = Math.random();
            series.addPoint([x, y], true, true);
          }, 1000);
        },
      },
    },

    time: {
      useUTC: false,
    },
    height: "200px",
    title: {
      text: "",
    },
    accessibility: {
      announceNewData: {
        enabled: true,
        minAnnounceInterval: 15000,
        announcementFormatter: function (allSeries, newSeries, newPoint) {
          if (newPoint) {
            return "New point added. Value: " + newPoint.y;
          }
          return false;
        },
      },
    },

    xAxis: {
      type: "datetime",
      tickPixelInterval: 150,
    },

    yAxis: {
      title: {
        text: "",
      },
      plotLines: [
        {
          value: 0,
          width: 1,
        },
      ],
    },

    // tooltip: {
    //   headerFormat: '<b>{series.name}</b><br/>',
    //   pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
    // },

    legend: {
      enabled: false,
    },

    exporting: {
      enabled: false,
    },

    series: [
      {
        name: "Random data",
        color: "#DC3535",
        marker: false,
        data: (function () {
          // generate an array of random data
          var data = [],
            time = new Date().getTime(),
            i;

          for (i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 1000,
              y: Math.random(),
            });
          }
          return data;
        })(),
      },
    ],
  });
  Highcharts.chart("chart3_2", {
    chart: {
      type: "line",
      animation: Highcharts.svg, // don't animate in old IE
      marginRight: 10,
      events: {
        load: function () {
          // set up the updating of the chart each second
          var series = this.series[0];
          setInterval(function () {
            var x = new Date().getTime(), // current time
              y = Math.random();
            series.addPoint([x, y], true, true);
          }, 1000);
        },
      },
    },

    time: {
      useUTC: false,
    },
    height: "200px",
    title: {
      text: "",
    },
    accessibility: {
      announceNewData: {
        enabled: true,
        minAnnounceInterval: 15000,
        announcementFormatter: function (allSeries, newSeries, newPoint) {
          if (newPoint) {
            return "New point added. Value: " + newPoint.y;
          }
          return false;
        },
      },
    },

    xAxis: {
      type: "datetime",
      tickPixelInterval: 150,
    },

    yAxis: {
      title: {
        text: "",
      },
      plotLines: [
        {
          value: 0,
          width: 1,
        },
      ],
    },

    // tooltip: {
    //   headerFormat: '<b>{series.name}</b><br/>',
    //   pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
    // },

    legend: {
      enabled: false,
    },

    exporting: {
      enabled: false,
    },

    series: [
      {
        name: "Random data",
        color: "#68B984",
        marker: false,
        data: (function () {
          // generate an array of random data
          var data = [],
            time = new Date().getTime(),
            i;

          for (i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 1000,
              y: Math.random(),
            });
          }
          return data;
        })(),
      },
    ],
  });
  // Highcharts.chart('chart2_1', {
  //   chart: {
  //     type: 'line',
  //     marginRight: 10,
  //   },

  //   time: {
  //     useUTC: false
  //   },
  //   height: '150px',
  //   title: {
  //     text: ''
  //   },
  //   accessibility: {
  //     announceNewData: {
  //       enabled: true,
  //       minAnnounceInterval: 15000,
  //       announcementFormatter: function (allSeries, newSeries, newPoint) {
  //         if (newPoint) {
  //           return 'New point added. Value: ' + newPoint.y;
  //         }
  //         return false;
  //       }
  //     }
  //   },

  //   xAxis: {
  //     type: 'datetime',
  //     tickPixelInterval: 150
  //   },

  //   yAxis: {
  //     title: {
  //       text: ''
  //     },
  //     plotLines: [{
  //       value: 0,
  //       width: 1,
  //     }]
  //   },

  //   // tooltip: {
  //   //   headerFormat: '<b>{series.name}</b><br/>',
  //   //   pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
  //   // },

  //   legend: {
  //     enabled: false,
  //   },

  //   exporting: {
  //     enabled: false,
  //   },

  //   series: [{
  //     name: 'Random data',
  //     color: '#DC3535',
  //     marker: false,
  //     data: (function () {
  //       // generate an array of random data
  //       var data = [],
  //         time = (new Date()).getTime(),
  //         i;

  //       for (i = -19; i <= 0; i += 1) {
  //         data.push({
  //           x: time + i * 1000,
  //           y: Math.random()
  //         });
  //       }
  //       return data;
  //     }())
  //   }]
  // });
  // Highcharts.chart('chart2_2', {
  //   chart: {
  //     type: 'line',
  //     marginRight: 10,
  //   },

  //   time: {
  //     useUTC: false
  //   },
  //   height: '150px',
  //   title: {
  //     text: ''
  //   },
  //   accessibility: {
  //     announceNewData: {
  //       enabled: true,
  //       minAnnounceInterval: 15000,
  //       announcementFormatter: function (allSeries, newSeries, newPoint) {
  //         if (newPoint) {
  //           return 'New point added. Value: ' + newPoint.y;
  //         }
  //         return false;
  //       }
  //     }
  //   },

  //   xAxis: {
  //     type: 'datetime',
  //     tickPixelInterval: 150
  //   },

  //   yAxis: {
  //     title: {
  //       text: ''
  //     },
  //     plotLines: [{
  //       value: 0,
  //       width: 1,
  //     }]
  //   },

  //   // tooltip: {
  //   //   headerFormat: '<b>{series.name}</b><br/>',
  //   //   pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
  //   // },

  //   legend: {
  //     enabled: false,
  //   },

  //   exporting: {
  //     enabled: false,
  //   },

  //   series: [{
  //     name: 'Random data',
  //     color: '#68B984',
  //     marker: false,
  //     data: (function () {
  //       // generate an array of random data
  //       var data = [],
  //         time = (new Date()).getTime(),
  //         i;

  //       for (i = -19; i <= 0; i += 1) {
  //         data.push({
  //           x: time + i * 1000,
  //           y: Math.random()
  //         });
  //       }
  //       return data;
  //     }())
  //   }]
  // });
}
