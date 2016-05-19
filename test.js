import test from 'ava';
import createLinkedList from './';

test('linkedList.size', t => {

  var list = createLinkedList();
  t.is(list.size, 0);

});

test('linkedList.append()', t => {

  var list = createLinkedList();
  list.append('hat');
  t.is(list.size, 1);

});
