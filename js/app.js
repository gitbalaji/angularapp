(function(){
 var app = angular.module('store', [ ]);
 app.controller('StoreController', function(){
 	this.products = gem;
 });

 var gem = [{
 name: 'Dodecahedron',
 price: 2.95,
 description: 'Some gems have hidden qualities beyond thier luster' +
 'beyond their shine.. Dodeca is one of those gems',
 canPurchase : true
},
{
 name: "Pentagonal Gem",
 price: 5.95,
 description: 'Origin of Pentagonal Gem is unknown os its low value' +
 'it has very high shine however',
 canPurchase: false,
 }
 ]
})();