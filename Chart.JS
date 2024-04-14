const ctx1 = document.getElementById("chart-1").getContext("2d");

const myChart = new Chart(ctx1, {
  type: 'polarArea',
  data: {
    labels: ['Disparos', 'Em loja', 'Redes sociais',],
    datasets: [{
      label: '# Total',
      data: [150, 150, 80],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ]
    }]
  },
  options: {
   responsive: true,
  }
});

const ctx2 = document.getElementById("chart-2").getContext("2d");

const myChart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Cadastros novos', 'Propostas', 'Vendas',],
    datasets: [{
      label: 'Total',
      data: [150, 150, 80],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ]
    }]
  },
  options: {
   responsive: true,
  }
});


