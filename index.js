module.exports = function dalinkedlist() {
  'use strict';


  // the private internal array the linked list will proxy

  var dataStore;

  var length = 0;
  var head;


  var linkedList = {

    // properties

    get size() {
      return length;
    },

    // methods
    append: function (value) {

      var current;
      var node = {value: value};

      if (head === undefined) {
        head = node;
      }
      else {
        current = head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
      length++;
    },

    insert: function () {
      
    },

    removeAt: function () {
      
    },

    remove: function () {
      
    },

    indexOf: function () {
      
    },

    toString: function () {
      
    },

    toArray: function () {
      
    }

  };

  return Object.freeze(linkedList);
};
