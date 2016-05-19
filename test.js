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

test('linkedList.removeAt()', t => {

  var list = createLinkedList('hat', 'tree', 'house');
  t.throws(() => list.removeAt(-1));
  t.throws(() => list.removeAt(100));

  var removed = list.removeAt(1);
  t.is(removed, 'tree');
  t.deepEqual(list.toArray(), ['hat', 'house']);

});

test('linkedList.insertAt()', t => {

  var list = createLinkedList('hat', 'tree', 'house');
  t.throws(() => list.insertAt(-1));
  t.throws(() => list.insertAt(100))

  var returnValue = list.insertAt('mouse', 1);
  t.is(returnValue, list);
  t.deepEqual(list.toArray(), ['hat', 'mouse', 'tree', 'house']);

});

test('linkedList.remove()', t => {

  var list = createLinkedList('hat', 'cow', 'tree', 'house');
  var returnValue = list.remove('tree');
  t.is(returnValue, list);
  t.is(list.size, 3);

});

test('linkedList.indexOf()', t => {

  var list = createLinkedList('hat', 'cow', 'tree', 'house');
  var index = list.indexOf('tree');
  var index2 = list.indexOf('hi mum');
  t.is(index, 2);
  t.is(index2, -1);

});

test('linkedList.toString()', t => {

  var list = createLinkedList('hat', 'cow', 'tree', 'house');
  t.deepEqual(list.toString(), 'hat,cow,tree,house')

});

test('linkedList.toArray()', t => {

  var list = createLinkedList('hat', 'cow', 'tree', 'house');
  t.deepEqual(list.toArray(), ['hat', 'cow', 'tree', 'house'])

});

test('linkedList is immutable', t => {

  var list = createLinkedList();
  t.throws(() => list.hat = 'yay');
  t.throws(() => list.indexOf = 1);
  t.throws(() => delete list.indexOf);

});

