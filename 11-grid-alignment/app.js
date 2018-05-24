new Vue({
  el: '#app',
  data: {
    alignOptions: [
      'stretch',
      'start',
      'center',
      'end',
      'space-around',
      'space-between',
      'space-evenly'
    ],
    contentAlignment: {
      justifyContent: 'stretch',
      alignContent: 'stretch'
    }
  }
});
