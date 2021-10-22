import Character from '../character';
import Zombie from '../zombie';
import Undead from '../undead';

test(('class Character'), () => {
  const zomb = new Character('Petr', 'Zombie');
  expect(zomb.name).toBe('Petr');
  expect(zomb.type).toBe('Zombie');
});

test(('class Character'), () => {
  expect(() => new Character('Z', 'Zombie')).toThrow('field name must have type string & length must be from 2 to 10 character');
});

test(('class Character'), () => {
  expect(() => new Character('Zooker', 'Krys')).toThrow('This type Krys is wrong');
});

test(('class Character method -> levelUp()'), () => {
  const zomb = new Zombie('Petr', 'Zombie');
  zomb.levelUp();
  expect(zomb.name).toBe('Petr');
  expect(zomb.type).toBe('Zombie');
  expect(zomb.health).toBe(100);
  expect(zomb.level).toBe(2);
  expect(zomb.attack).toBe(48);
  expect(zomb.defense).toBe(12);
  zomb.health = 0;
  expect(() => zomb.levelUp()).toThrow('Hero is dead');
});

test(('class Character method -> damage(points)'), () => {
  const undead = new Undead('Petr', 'Undead');
  undead.damage(50);
  expect(undead.health).toBe(62.5);
  undead.health = 0;
  undead.damage(12);
  expect(undead.health).toBe(0);
});
