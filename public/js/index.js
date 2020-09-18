var app = new Vue({
  el: '#app',
  data: {
    user: 'Opik',
    data: [
      { date: '8/3/2020', sample: 'Meat', class: 'Sapi', status: 'Finished' },
      { date: '14/2/2020', sample: 'Meat', class: 'Ayam', status: 'Finished' },
      { date: '9/2/2020', sample: 'Bean', class: 'Kopi', status: 'Finished' },
      { date: '20/1/2020', sample: 'Meat', class: 'Babi', status: 'Canceled' },
    ],
    sensors: [
      { number: '2', isUsed: true},
      { number: '3', isUsed: true},
      { number: '4', isUsed: false},
      { number: '6', isUsed: false},
      { number: '9', isUsed: false},
      { number: '135', isUsed: false},
      { number: '136', isUsed: false},
    ],
    isOpenIndex: []
  },
  mounted: function() {
    for(var i = 0; i < this.data.length; i++) {
      this.isOpenIndex[i] = false
    }
  },
  methods: {
    clicked: function(index) {
      console.log('Clicked')
      if(this.isOpenIndex[index] == false) {
        // this.isOpenIndex[index] = true
        this.$set(this.isOpenIndex, index, true)
      } else {
        this.$set(this.isOpenIndex, index, false)
      }
    },
    selectSensor: function(index) {
      console.log('Select sensor number: ', this.sensors[index].number)
      if(this.sensors[index].isUsed == false) {
        this.sensors[index].isUsed = true
      } else {
        this.sensors[index].isUsed = false
      }
    }
  }
})