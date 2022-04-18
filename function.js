// https://www.chartjs.org/


window.function = function (names, minutes, colors, label, width, height) {

  // data
  names = names.value ?? "";
  minutes = minutes.value ?? "";
  colors = colors.value ?? "";
  label = label.value ?? "white";
  width = width.value ?? "100";
  height = height.value ?? "80";
 

  let ht = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Glide Yes-Code</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0/dist/chartjs-plugin-datalabels.min.js"></script>
  </head>
  <body>
  <div class="chart-container" style="position: relative; height:${height}vh; width:${width}vw">
  <canvas id="gr1"></canvas>
</div>
    <script>
    let config = {
  type: 'bar',
  data: {
    labels: [${names}],
    datasets: [
      {
        label: '',
        backgroundColor: ${colors},
        borderColor: 'black',
        borderWidth: 1,
        data: [${minutes}],
      }
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
            ticks: {
                fontSize: 10
            },
            gridLines: {
                drawOnChartArea: false
            }
        }],
        yAxes: [{
            ticks: {
                fontSize: 12,
                beginAtZero: true
            },
            gridLines: {
                drawOnChartArea: false
            }
        }]
    },
    legend: {
        display: false
    },
    title: {
      display: true,
      text: 'Overview by participant (min)',
      fontSize: 20,
      padding: 30
    },
    plugins: {
      datalabels: {
        display: false,
        anchor: 'center',
        align: 'center',
        color: ${label},
        font: {
          weight: 'bold',
        },
      },
    },
  },
}
;

    var canv = document.getElementById('gr1');
    var ctx = canv.getContext('2d');
    let graph1 = new Chart(ctx, config);
    </script>
  </body>
</html>`

  let enc = encodeURIComponent(ht);
  let uri = `data:text/html;charset=utf-8,${enc}`
  return uri; 
}