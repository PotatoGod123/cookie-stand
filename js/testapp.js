// var tableParent = document.getElementById('tablesInsert');

// var trElement = document.createElement('tr');

// var thElement = document.createElement('th');

// thElement.textContent= 'test';

// tableParent.appendChild(trElement);
// trElement.appendChild(thElement);


// var seatleStore = {
//   cityName: 'Seattle',
//   minCustormers: 23,
//   maxCustormers: 65,
//   averageCookieSale: 6.3,
//   // this will generate a random number
//   // i got this code from MDN 
//   averageMath: function(min,max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   },
//   // this will run the random number and mutiply with inputs to get random customer number
//   actualHours: function(){
//     return this.averageMath(this.minCustormers,this.maxCustormers);
//   },
//   // this will use previous data of random average customers and times it to cookies 
//   // sold per customer and run it exactly 14 times so it output an array
//   cookieSold: function(){
//     var hourCookies= [];
//     for(var i =0;i<14;i++){
//       var mathCookies = this.actualHours() * Math.round(this.averageCookieSale);
//       hourCookies.push(mathCookies);
//     }
//     return hourCookies;
//   },
// };

// var totalSold = seatleStore.cookieSold();

//this object will take the data from previous object and output it and insent into html
// var insertingCookieData = {
//   cookiesLOL:' cookies',
//   totalCookies: 0,
//   render: function(){
//     for(var j = 0;j<=totalSold.length;j++){
//       var listParent = document.getElementById('seatleChart');
//       var ulAppend = document.createElement('ul');
//       ulAppend.textContent = timesHours[j]+' '+totalSold[j]+this.cookiesLOL;
//       // listParent.appendChild(ulAppend);
//     }
//     this.totalCookies= totalSold.reduce(function(a,b){
//       return a+b;
//     },0),
//     ulAppend.textContent = 'Total: '+this.totalCookies+this.cookiesLOL;
//     // listParent.appendChild(ulAppend);
//   },
// };

// insertingCookieData.render();

