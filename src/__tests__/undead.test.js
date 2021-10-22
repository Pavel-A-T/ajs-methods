import Undead from '../undead';

test(('class Undead'), () => {
  const undead = new Undead('Petr', 'Undead');
  expect(undead.name).toBe('Petr');
  expect(undead.type).toBe('Undead');
  expect(undead.health).toBe(100);
  expect(undead.level).toBe(1);
  expect(undead.attack).toBe(25);
  expect(undead.defense).toBe(25);
});

test(('class Undead'), () => {
  expect(() => new Undead('P', 'Undead')).toThrow('field name must have type string & length must be from 2 to 10 character');
});

test(('class Undead'), () => {
  expect(() => new Undead('Zooker', 'Kriminal')).toThrow('This type Kriminal is wrong');
});
