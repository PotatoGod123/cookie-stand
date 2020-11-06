'use strict';
//global variables
var timesHours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm',
  '2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
var allStoresInfo = [];
var total_cookie_sold_per_Hour = [];
var totaldailyCookies= 0 ;
var formParent = document.getElementById('form');
// contructor funtions
// this will make an object for whatever input and put it into the allstoreinfo var as well 
function StoreMaster(cityName,minCustormers,maxCustormers,averageCookieSale){
  this.cityName = cityName;
  this.minCustormers= minCustormers;
  this.maxCustormers= maxCustormers;
  this.averageCookieSale = averageCookieSale;
  this.averageCustomer= [];
  this.averageCookieSold=[];
  this.totalCookiesSold=[];

  allStoresInfo.push(this);
}

//these create new object instances for each store, you can add more if you are reading this
var seattleStoreFront = new StoreMaster('Seattle', 23, 65, 6.3);
var tokyoStoreFront = new StoreMaster('Tokyo', 3, 24, 1.2);
var dubaiStoreFront = new StoreMaster('Dubai', 11, 38, 3.7);
var parisStoreFront = new StoreMaster('Paris', 20, 38, 2.3);
var limaStoreFront = new StoreMaster('Lima', 2, 16, 4.6);
//under here is event listener looking for form to submit then trigget function
formParent.addEventListener('submit',newStore);
//this fuction will add new store from form and add it to the bottom while
//updating the footer row with a special render function
function newStore(event){
  event.preventDefault();
  var remove_foot_Row = document.getElementById('footrowremove');
  if(event.target){
    var newcitynames= event.target.cityname.value;
    var newmincustomers= parseInt(event.target.mincustomer.value);
    var newmaxcustomer = parseInt(event.target.maxcustomer.value);
    var newaveragecookie = parseInt(event.target.averagecookie.value);
    //console.log(newcitynames,newmincustomers,newmaxcustomer,newaveragecookie);
    new StoreMaster(newcitynames,newmincustomers,newmaxcustomer,newaveragecookie);
    callThisToUpdateaverageCustomerInfo();
    callThisToUpdateaverageCookieSold();
    call_this_to_update_totals_per_Hour();
    callthistoupdatetotalcookiesSold();
    totaldailyCookies-=totaldailyCookies;
    dailyTotaltotal();
    allStoresInfo[allStoresInfo.length-1].renderThetable();
    remove_foot_Row.remove();
    special_call_this_to_render_the_footer_Table();
  }
}

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

//this method will caculate total cokies sold in all city per hour 
// error for this bs was it was concatenated strings instead of intergers, 
// solution was to declare variable as a interger and to parseInt info from Object Instance
var call_this_to_update_totals_per_Hour = function(){
  for(var i=0;i<timesHours.length;i++){
    var tempRary= 0;
    for(var j=0;j<allStoresInfo.length;j++){
      tempRary += parseInt(allStoresInfo[j].averageCookieSold[i]);
    }
    total_cookie_sold_per_Hour.push(tempRary);
  }
};

// this method is used to caculate total cookies for the day 
StoreMaster.prototype.allCookiesSold = function(){
  var totalcookiesforDay = this.averageCookieSold.reduce(function(a,b){
    return a+b;
  },0);
  this.totalCookiesSold.push(totalcookiesforDay);
};

var callthistoupdatetotalcookiesSold = function(){
  for(var i=0;i<allStoresInfo.length;i++){
    allStoresInfo[i].allCookiesSold();
  }
};

var dailyTotaltotal = function(){
  var tempRary=0;
  for(var i=0;i<allStoresInfo.length;i++){
    tempRary += parseInt(allStoresInfo[i].totalCookiesSold);
  }
  totaldailyCookies= totaldailyCookies +tempRary;
};


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
  tdElement =document.createElement('td');
  tdElement.textContent= 'Daily Location Total';
  tdElement.id = 'totalCell';
  tdElement.className+='notthisROW';
  trElement.appendChild(tdElement);

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
  tdElement = document.createElement('td');
  tdElement.textContent = this.totalCookiesSold[0];
  trElement.appendChild(tdElement);
};
// this will take whatever is in the array of total_cookie_sold_per_Hour and print it out at the bottom with a 
// trow in the tfoot of the html the word total at the front
var call_this_to_render_the_footer_Table =function(){
  var table_footer_Parent = document.getElementById('thetableFooter');
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  table_footer_Parent.appendChild(trElement);
  thElement.textContent= 'Totals';
  trElement.id ='footrowremove';
  trElement.appendChild(thElement);
  for(var i= 0;i<timesHours.length;i++){
    var tdElement = document.createElement('td');
    tdElement.textContent= total_cookie_sold_per_Hour[i];
    trElement.appendChild(tdElement);
  }
  tdElement=document.createElement('td');
  tdElement.textContent= totaldailyCookies;
  trElement.appendChild(tdElement);
};
// this is the same as the before footer render function but tweaked to put in
// new values from updated information, used in event listener above!!
var special_call_this_to_render_the_footer_Table =function(){
  var table_footer_Parent = document.getElementById('thetableFooter');
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  table_footer_Parent.appendChild(trElement);
  thElement.textContent= 'Totals';
  trElement.id ='footrowremove';
  trElement.appendChild(thElement);
  for(var i= 0;i<timesHours.length;i++){
    var tdElement = document.createElement('td');
    tdElement.textContent= total_cookie_sold_per_Hour[i+total_cookie_sold_per_Hour.length-14];
    trElement.appendChild(tdElement);
  }
  tdElement=document.createElement('td');
  tdElement.textContent= totaldailyCookies;
  trElement.appendChild(tdElement);
};

//these was just to called the functions above
callThisToUpdateaverageCustomerInfo();
callThisToUpdateaverageCookieSold();
call_this_to_update_totals_per_Hour();
callthistoupdatetotalcookiesSold();
dailyTotaltotal();
timesHeaders();
seattleStoreFront.renderThetable();
tokyoStoreFront.renderThetable();
dubaiStoreFront.renderThetable();
parisStoreFront.renderThetable();
limaStoreFront.renderThetable();

call_this_to_render_the_footer_Table();
