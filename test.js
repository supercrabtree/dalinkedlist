import test from 'ava';
import createLinkedList from './';

console.log();
console.log(Date.now());

test('linkedList.size', t => {

  var list = createLinkedList();
  t.is(list.size, 0);

  var list2 = createLinkedList('hat', 2, 3, 4);
  t.is(list2.size, 4);

});

test('linkedList.append()', t => {

  var list = createLinkedList();
  list.append('hat');
  t.is(list.size, 1);

  var returnValue = list.append('cow');
  t.is(returnValue, list);

});

test('linkedList.toArray()', t => {

  var list = createLinkedList('hat', 'cow', 'tree', 'house');
  t.deepEqual(list.toArray(), ['hat', 'cow', 'tree', 'house'])

});
