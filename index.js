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

    insertAt: function (value, position) {

      var node = {value: value};
      var index = 0;
      var current = head;
      var previous;

      if (!(position > -1 && position < length)) {
        throw new RangeError('Invalid index');
      }
      else {
        if (position === 0) {
          node.next = current;
          head = node;
        }
        else {
          while (index < position) {
            previous = current;
            current = current.next;
            index++;
          }
          node.next = current;
          previous.next = node;
        }
      }
      return linkedList;
    },

    removeAt: function (position) {
      if (!(position > -1 && position < length)) {
        throw new RangeError('Invalid index');
      }
      else {

        var previous;
        var current = head;
        var index = 0;

        if (position === 0) {
          head = current.next;
        }
        else {

          while (index < position) {
            previous = current;
            current = current.next;
            index++;
          }

          previous.next = current.next;

        }

        length--;

        return current.value;
      }
    },

    remove: function () {
      
    },

    indexOf: function (value) {
      var current = head;
      var index = 0;

      while (current) {
        if (value === current.value) return index;
        current = current.next;
        index++;
      }

      return -1;
    },

    toString: function () {
      return linkedList.toArray().toString();
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
