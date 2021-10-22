import Magician from '../magician';

test(('class Magician'), () => {
  const magician = new Magician('Petr', 'Magician');
  expect(magician.name).toBe('Petr');
  expect(magician.type).toBe('Magician');
  expect(magician.health).toBe(100);
  expect(magician.level).toBe(1);
  expect(magician.attack).toBe(10);
  expect(magician.defense).toBe(40);
});

test(('class Magician'), () => {
  expect(() => new Magician('P', 'Magician')).toThrow('field name must have type string & length must be from 2 to 10 character');
});

test(('class Character'), () => {
  expect(() => new Magician('Zooker', 'Kriminal')).toThrow('This type Kriminal is wrong');
});
