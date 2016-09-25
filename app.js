(function(){
  'use strict';
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService){
    var toBuyList = this;
    toBuyList.items = ShoppingListCheckOffService.getItems();
    toBuyList.removeItem = function(itemIndex){
      ShoppingListCheckOffService.removeItem(itemIndex);
    };
  }

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
    var boughtList = this;
    boughtList.items = ShoppingListCheckOffService.getBougthItems();
  }

  function ShoppingListCheckOffService() {
  var service = this;
  // List of shopping items
  var itemsToBuy = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Sprite",
    quantity: "3"
  },
  {
    name: "Chocolate",
    quantity: "5"
  }
  ];

  var itemsBought = [];

  service.removeItem = function (itemIdex) {
    var it = itemsToBuy[itemIdex];
    itemsToBuy.splice(itemIdex, 1);
    itemsBought.push(it);
  };

  service.getItems = function () {
    return itemsToBuy;
  };

  service.getBougthItems = function(){
    return itemsBought;
  };
}

})();
