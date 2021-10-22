import Zombie from '../zombie';

test(('class Zombie'), () => {
  const zombie = new Zombie('Petr', 'Zombie');
  expect(zombie.name).toBe('Petr');
  expect(zombie.type).toBe('Zombie');
  expect(zombie.health).toBe(100);
  expect(zombie.level).toBe(1);
  expect(zombie.attack).toBe(40);
  expect(zombie.defense).toBe(10);
});

test(('class Zombie'), () => {
  expect(() => new Zombie('P', 'Zombie')).toThrow('field name must have type string & length must be from 2 to 10 character');
});

test(('class Zombie'), () => {
  expect(() => new Zombie('Zooker', 'Kriminal')).toThrow('This type Kriminal is wrong');
});
