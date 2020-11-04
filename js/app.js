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

//these create new object instances for each store, you can add more if you are reading this
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

//this runs the method above! 
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

// this functions runs method above with informator from the object array to get and insent cookies sold for each hour
var callThisToUpdateaverageCookieSold = function(){
  for(var i = 0;i<timesHours.length;i++){
    for(var j=0;j<allStoresInfo.length;j++){
      allStoresInfo[j].cookiesMaths(i);
    }
  }
};

callThisToUpdateaverageCookieSold();

//this function will insert the top line of the time row with an empty space at the beginning, also gives the element a class name, the text content for thelement
//with the emepty ' ' string is just to make the top left corner of the table empty and look invisible
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

// this will insert into html whatever object instance you made with StoreMaster
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

//these was just to called the functions above
timesHeaders();
seattleStoreFront.renderThetable();
tokyoStoreFront.renderThetable();
dubaiStoreFront.renderThetable();
parisStoreFront.renderThetable();
limaStoreFront.renderThetable();


