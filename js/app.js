'use strict';


var seatleStore = {
  storeName: 'Seattle',
  minCustormers: 23,
  maxCustormers: 62,
  averageCookieSale: 6.3,
  averageMath: function(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
  },
  actualHours: function(){
    return this.averageMath(this.minCustormers,this.maxCustormers);
  }

};
