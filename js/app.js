'use strict';

var timesHours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm',
  '2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];

var allStoresInfo = [];

// this will make an object for whatever input and put it into the allstoreinfo var as well 
function StoreMaster(cityName,minCustormers,maxCustormers,averageCookieSale){
  this.cityName = cityName;
  this.minCustormers= minCustormers;
  this.maxCustormers= maxCustormers;
  this.averageCookieSale = averageCookieSale;
  this.averageCustomer= [];
  this.averageCookieSold=[];

  allStoresInfo.push(this);
}

var seattleStoreFront = new StoreMaster('Seattle', 23, 65, 6.3);
var tokyoStoreFront = new StoreMaster('Tokyo', 3, 24, 1.2);
var dubaiStoreFront = new StoreMaster('Dubai', 11, 38, 3.7);
var parisStoreFront = new StoreMaster('Paris', 20, 38, 2.3);
var limaStoreFront = new StoreMaster('Lima', 2, 16, 4.6);

// this method will be run in the for loop undereath to add the random customer per hour to this.averageCustomer key
StoreMaster.prototype.customerMath = function(){
  this.minCustormers = Math.ceil(this.minCustormers);
  this.maxCustormers = Math.floor(this.maxCustormers);
  var pushNumberCus = Math.floor(Math.random() * (this.maxCustormers - this.minCustormers + 1) + this.minCustormers);
  return this.averageCustomer.push(pushNumberCus);
};


var callThisToUpdateaverageCustomerInfo = function(){
  for(var i =0;i<timesHours.length;i++){
    for(var j =0;j<allStoresInfo.length;j++){
      allStoresInfo[j].customerMath();
    }
  }
};

callThisToUpdateaverageCustomerInfo();
// this method is used in the function bellow it to caculated the cookies and put them all in the this.averageCookieSold array
StoreMaster.prototype.cookiesMaths = function(i){
  var productCusCoo = this.averageCookieSale * this.averageCustomer[i];
  return this.averageCookieSold.push(Math.round(productCusCoo));
};

var callThisToUpdateaverageCookieSold = function(){
  for(var i = 0;i<timesHours.length;i++){
    for(var j=0;j<allStoresInfo.length;j++){
      allStoresInfo[j].cookiesMaths(i);
    }
  }
};

callThisToUpdateaverageCookieSold();

var timesHeaders = function(){
  var tableParent = document.getElementById('helloTest');
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  tableParent.appendChild(trElement);
  thElement.textContent= ' ';
  thElement.className +='notthisROW';
  trElement.appendChild(thElement);
  for(var i=0;i<timesHours.length;i++){
    var tdElement= document.createElement('td');
    tdElement.className += 'notthisROW';
    tdElement.textContent = timesHours[i];
    trElement.appendChild(tdElement);
  }
};

// this will insert into html
StoreMaster.prototype.renderThetable= function(){
  var tableParent = document.getElementById('helloTest');
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  tableParent.appendChild(trElement);
  thElement.textContent= this.cityName;
  trElement.appendChild(thElement);
  for(var j =0;j<timesHours.length;j++){
    var tdElement =document.createElement('td');
    tdElement.textContent= this.averageCookieSold[j];

    trElement.appendChild(tdElement);
  }
  
};
timesHeaders();
seattleStoreFront.renderThetable();
tokyoStoreFront.renderThetable();
dubaiStoreFront.renderThetable();
parisStoreFront.renderThetable();
limaStoreFront.renderThetable();


