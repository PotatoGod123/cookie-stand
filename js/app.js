'use strict';

//this object will use the first stores data to caculate how many cookies are sold per hour
var seatleStore = {
  storeName: 'Seattle',
  minCustormers: 23,
  maxCustormers: 65,
  averageCookieSale: 6.3,
  averageMath: function(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
  },
  actualHours: function(){
    return this.averageMath(this.minCustormers,this.maxCustormers);
  },
  cookieSold: function(){
    var hourCookies= [];
    for(var i =0;i<14;i++){
      var mathCookies = this.actualHours() * Math.round(this.averageCookieSale);
      hourCookies.push(mathCookies);
    }
    return hourCookies;
  },
};

var totalSold = seatleStore.cookieSold();
var timesHours = ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:',
  '2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'];
console.log(totalSold);

//this object will take the data from previous object and output it and insent into html
var insertingCookieData = {
  cookiesLOL:' cookies',
  totalCookies: 0,
  render: function(){
    for(var j = 0;j<=totalSold.length;j++){
      var listParent = document.getElementById('seatleChart');
      var ulAppend = document.createElement('ul');
      ulAppend.textContent = timesHours[j]+' '+totalSold[j]+this.cookiesLOL;
      listParent.appendChild(ulAppend);
    }
    this.totalCookies= totalSold.reduce(function(a,b){
      return a+b;
    },0),
    ulAppend.textContent = 'Total: '+this.totalCookies+this.cookiesLOL;
    listParent.appendChild(ulAppend);
  },
};

insertingCookieData.render();


// this is for the tokyo store
var tokyoStore = {
  storeName: 'Tokyo',
  minCustormers: 3,
  maxCustormers: 24,
  averageCookieSale: 1.2,
  averageMath: function(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
  },
  actualHours: function(){
    return this.averageMath(this.minCustormers,this.maxCustormers);
  },
  cookieSold: function(){
    var hourCookies= [];
    for(var i =0;i<14;i++){
      var mathCookies = this.actualHours() * Math.round(this.averageCookieSale);
      hourCookies.push(mathCookies);
    }
    return hourCookies;
  },
};

totalSold= tokyoStore.cookieSold();


var insertingCookieDatetwo = {
  cookiesLOL:' cookies',
  totalCookies: 0,
  render: function(){
    for(var j = 0;j<=totalSold.length;j++){
      var listParent = document.getElementById('tokyoChart');
      var ulAppend = document.createElement('ul');
      ulAppend.textContent = timesHours[j]+' '+totalSold[j]+this.cookiesLOL;
      listParent.appendChild(ulAppend);
    }
    this.totalCookies= totalSold.reduce(function(a,b){
      return a+b;
    },0),
    ulAppend.textContent = 'Total: '+this.totalCookies+this.cookiesLOL;
    listParent.appendChild(ulAppend);
  },
};

insertingCookieDatetwo.render();
//this is for the dubai store
var dubaiStore = {
  storeName: 'Dubai',
  minCustormers: 11,
  maxCustormers: 38,
  averageCookieSale: 3.7,
  averageMath: function(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
  },
  actualHours: function(){
    return this.averageMath(this.minCustormers,this.maxCustormers);
  },
  cookieSold: function(){
    var hourCookies= [];
    for(var i =0;i<14;i++){
      var mathCookies = this.actualHours() * Math.round(this.averageCookieSale);
      hourCookies.push(mathCookies);
    }
    return hourCookies;
  },
};

totalSold= dubaiStore.cookieSold();

var insertingCookieDatethree = {
  cookiesLOL:' cookies',
  totalCookies: 0,
  render: function(){
    for(var j = 0;j<=totalSold.length;j++){
      var listParent = document.getElementById('dubaiChart');
      var ulAppend = document.createElement('ul');
      ulAppend.textContent = timesHours[j]+' '+totalSold[j]+this.cookiesLOL;
      listParent.appendChild(ulAppend);
    }
    this.totalCookies= totalSold.reduce(function(a,b){
      return a+b;
    },0),
    ulAppend.textContent = 'Total: '+this.totalCookies+this.cookiesLOL;
    listParent.appendChild(ulAppend);
  },
};

insertingCookieDatethree.render();
// this is for the paris store
var parisStore = {
  storeName: 'Paris',
  minCustormers: 20,
  maxCustormers: 38,
  averageCookieSale: 2.3,
  averageMath: function(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
  },
  actualHours: function(){
    return this.averageMath(this.minCustormers,this.maxCustormers);
  },
  cookieSold: function(){
    var hourCookies= [];
    for(var i =0;i<14;i++){
      var mathCookies = this.actualHours() * Math.round(this.averageCookieSale);
      hourCookies.push(mathCookies);
    }
    return hourCookies;
  },
};

totalSold= parisStore.cookieSold();

var insertingCookieDatefour = {
  cookiesLOL:' cookies',
  totalCookies: 0,
  render: function(){
    for(var j = 0;j<=totalSold.length;j++){
      var listParent = document.getElementById('parisChart');
      var ulAppend = document.createElement('ul');
      ulAppend.textContent = timesHours[j]+' '+totalSold[j]+this.cookiesLOL;
      listParent.appendChild(ulAppend);
    }
    this.totalCookies= totalSold.reduce(function(a,b){
      return a+b;
    },0),
    ulAppend.textContent = 'Total: '+this.totalCookies+this.cookiesLOL;
    listParent.appendChild(ulAppend);
  },
};

insertingCookieDatefour.render();
// this is for the lima store
var limaStore = {
  storeName: 'Lima',
  minCustormers: 2,
  maxCustormers: 16,
  averageCookieSale: 4.6,
  averageMath: function(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
  },
  actualHours: function(){
    return this.averageMath(this.minCustormers,this.maxCustormers);
  },
  cookieSold: function(){
    var hourCookies= [];
    for(var i =0;i<14;i++){
      var mathCookies = this.actualHours() * Math.round(this.averageCookieSale);
      hourCookies.push(mathCookies);
    }
    return hourCookies;
  },
};

totalSold= limaStore.cookieSold();

var insertingCookieDatefive = {
  cookiesLOL:' cookies',
  totalCookies: 0,
  render: function(){
    for(var j = 0;j<=totalSold.length;j++){
      var listParent = document.getElementById('limaChart');
      var ulAppend = document.createElement('ul');
      ulAppend.textContent = timesHours[j]+' '+totalSold[j]+this.cookiesLOL;
      listParent.appendChild(ulAppend);
    }
    this.totalCookies= totalSold.reduce(function(a,b){
      return a+b;
    },0),
    ulAppend.textContent = 'Total: '+this.totalCookies+this.cookiesLOL;
    listParent.appendChild(ulAppend);
  },
};

insertingCookieDatefive.render();

