google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawStuff);
google.charts.setOnLoadCallback(drawStuff2);

function drawStuff() {
  var data = new google.visualization.arrayToDataTable([
    ['Dia', 'Vendas'],
    ["11/10", 44],
    ["12/10", 23],
    ["13/10", 18],
    ["14/10", 17],
    ['15/10', 20],
    ['16/10', 25],
    ['17/10', 37],
  ]);

  var options = {
    width: 600,
    height: 400,
    legend: { position: 'none' },
    chart: {
      title: 'Vendas da segunda semana outubro de 2020',
      subtitle: 'Quantidade de vendas totais' },
    axes: {
      x: {
        0: { side: 'bottom', label: 'segunda semana de outubro'} // Top x-axis.
      }
    },
    bar: { groupWidth: "60%" }
  };

  var chart = new google.charts.Bar(document.getElementById('columnChart1'));
  // Convert the Classic options to Material options.
  chart.draw(data, google.charts.Bar.convertOptions(options));
};
function drawStuff2() {
  var data = new google.visualization.arrayToDataTable([
    ['Mês', 'Vendas'],
    ["Janeiro", 300],
    ["Fevereiro", 320],
    ["Março", 390],
    ["Abril", 343],
    ['Maio', 298],
    ['Junho', 376],
    ['Julho', 463],
    ['Agosto', 260],
    ['Setembro', 490],
    ['Outubro', 356],
    ['Novembro', 312],
    ['Dezembro', 389],
  ]);

  var options = {
    width: 800,
    height: 400,
    legend: { position: 'none' },
    chart: {
      title: 'Vendas dos últimos 12 mêses',
      subtitle: 'Quantidade de vendas totais' },
    axes: {
      x: {
        0: { side: 'bottom', label: 'ano de 2019'} // Top x-axis.
      }
    },
    bar: { groupWidth: "60%" }
  };

  var chart = new google.charts.Bar(document.getElementById('columnChart2'));
  // Convert the Classic options to Material options.
  chart.draw(data, google.charts.Bar.convertOptions(options));
};