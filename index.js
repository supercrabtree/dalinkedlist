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


  // if arguments are passed, append them all

  if (arguments.length) {
    Array.prototype.slice.call(arguments).forEach(linkedList.append);
  }


  return Object.freeze(linkedList);
};
