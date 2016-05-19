import test from 'ava';
import createLinkedList from './';

test('linkedList.size', t => {

  var list = createLinkedList();
  t.is(list.size, 0);

});
