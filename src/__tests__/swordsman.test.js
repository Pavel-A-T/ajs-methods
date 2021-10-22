import Swordsman from '../swordsman';

test(('class Swordsman'), () => {
  const swordsman = new Swordsman('Petr', 'Swordsman');
  expect(swordsman.name).toBe('Petr');
  expect(swordsman.type).toBe('Swordsman');
  expect(swordsman.health).toBe(100);
  expect(swordsman.level).toBe(1);
  expect(swordsman.attack).toBe(40);
  expect(swordsman.defense).toBe(10);
});

test(('class Swordsman'), () => {
  expect(() => new Swordsman('P', 'Swordsman')).toThrow('field name must have type string & length must be from 2 to 10 character');
});

test(('class Swordsman'), () => {
  expect(() => new Swordsman('Zooker', 'Kriminal')).toThrow('This type Kriminal is wrong');
});
