import Character from '../character';
import Zombie from '../zombie';
import Bowman from '../bowman';
import Undead from '../undead';

test(('class Character'), () => {
  const name = 'Petrov';
  const type = 'Zombie';
  const expected = {
    name,
    type: 'Zombie',
    health: 100,
    level: 1,
  };
  const character = new Character(name, type);
  expect(character).toEqual(expected);
});

test(('class Character wrong name'), () => {
  expect(() => new Character('Z', 'Zombie')).toThrow('field name must have type string & length must be from 2 to 10 character');
});

test(('class Character wrong type'), () => {
  expect(() => new Character('Zooker', 'Krys')).toThrow('This type Krys is wrong');
});

test(('class Character method -> levelUp()'), () => {
  const name = 'Petr';
  const expected = {
    name,
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 25 * 1.2,
    defense: 25 * 1.2,
  };
  const bowman = new Bowman(name);
  bowman.levelUp();
  expect(bowman).toEqual(expected);
});

test(('class Character -> wrong method levelUp()'), () => {
  const name = 'Petr';
  const zomb = new Zombie(name);
  zomb.health = 0;
  expect(() => zomb.levelUp()).toThrow('Hero is dead');
});

test(('class Character method -> damage(points)'), () => {
  const name = 'Undead';
  const expected = {
    name,
    type: 'Undead',
    health: 62.5,
    level: 1,
    attack: 25,
    defense: 25,
  };
  const undead = new Undead(name);
  undead.damage(50);
  expect(undead).toEqual(expected);
});

test(('class Character method damage(points) health = 0'), () => {
  const name = 'Undead';
  const undead = new Undead(name);
  undead.health = 0;
  undead.damage(12);
  expect(undead.health).toBe(0);
});
