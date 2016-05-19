module.exports = function dalinkedlist() {
  'use strict';

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

      return linkedList;
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

      var array = [];
      var current = head;

      while (current.next) {
        array.push(current.value);
        current = current.next;
      }

      array.push(current.value);

      return array;
    }

  };


  // if arguments are passed, append them all

  if (arguments.length) {
    Array.prototype.slice.call(arguments).forEach(linkedList.append);
  }


  return Object.freeze(linkedList);
};
