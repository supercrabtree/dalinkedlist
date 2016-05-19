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

test('linkedList.toString()', t => {

  var list = createLinkedList('hat', 'cow', 'tree', 'house');
  t.deepEqual(list.toString(), 'hat,cow,tree,house')

});

test('linkedList.toArray()', t => {

  var list = createLinkedList('hat', 'cow', 'tree', 'house');
  t.deepEqual(list.toArray(), ['hat', 'cow', 'tree', 'house'])

});
