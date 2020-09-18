var ctx = document.getElementById('myChart').getContext('2d');
var ctx2 = document.getElementById('myChart2').getContext('2d');
var ctx3 = document.getElementById('myChart3').getContext('2d');
var ctx4 = document.getElementById('myChart4').getContext('2d');
var ctx5 = document.getElementById('myChart5').getContext('2d');

var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'transparent',
          borderColor: '#8B6BFF',
          data: [0, 10, 5, 2, 20, 30, 45, 23, 10, 44]
        },{
          label: 'My Second dataset',
          backgroundColor: 'transparent',
          borderColor: '#EA8E51',
          data: [20, 30, 17, 30, 12, 3, 4, 9, 15, 30]
        }
      ]
    },

    // Configuration options go here
    options: {
      legend: {
        position: 'bottom',
        usePointStyle: true
      }
    }
});
var chart = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'transparent',
          borderColor: '#8B6BFF',
          data: [0, 10, 5, 2, 20, 30, 45, 23, 10, 44]
        },{
          label: 'My Second dataset',
          backgroundColor: 'transparent',
          borderColor: '#EA8E51',
          data: [20, 30, 17, 30, 12, 3, 4, 9, 15, 30]
        }
      ]
    },

    // Configuration options go here
    options: {
      legend: {
        position: 'bottom',
        usePointStyle: true
      }
    }
});
var chart = new Chart(ctx3, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'transparent',
          borderColor: '#8B6BFF',
          data: [0, 10, 5, 2, 20, 30, 45, 23, 10, 44]
        },{
          label: 'My Second dataset',
          backgroundColor: 'transparent',
          borderColor: '#EA8E51',
          data: [20, 30, 17, 30, 12, 3, 4, 9, 15, 30]
        }
      ]
    },

    // Configuration options go here
    options: {
      legend: {
        position: 'bottom',
        usePointStyle: true
      }
    }
});
var chart = new Chart(ctx4, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'transparent',
          borderColor: '#8B6BFF',
          data: [0, 10, 5, 2, 20, 30, 45, 23, 10, 44]
        },{
          label: 'My Second dataset',
          backgroundColor: 'transparent',
          borderColor: '#EA8E51',
          data: [20, 30, 17, 30, 12, 3, 4, 9, 15, 30]
        }
      ]
    },

    // Configuration options go here
    options: {
      legend: {
        position: 'bottom',
        usePointStyle: true
      }
    }
});
var chart = new Chart(ctx5, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'transparent',
          borderColor: '#8B6BFF',
          data: [0, 10, 5, 2, 20, 30, 45, 23, 10, 44]
        },{
          label: 'My Second dataset',
          backgroundColor: 'transparent',
          borderColor: '#EA8E51',
          data: [20, 30, 17, 30, 12, 3, 4, 9, 15, 30]
        }
      ]
    },

    // Configuration options go here
    options: {
      legend: {
        position: 'bottom',
        usePointStyle: true
      }
    }
});