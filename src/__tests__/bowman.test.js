import Bowman from '../bowman';

test(('class Bowman'), () => {
  const bowman = new Bowman('Zoja', 'Bowman');
  expect(bowman.name).toBe('Zoja');
  expect(bowman.type).toBe('Bowman');
  expect(bowman.health).toBe(100);
  expect(bowman.level).toBe(1);
  expect(bowman.attack).toBe(25);
  expect(bowman.defense).toBe(25);
});

test(('class Bowman'), () => {
  expect(() => new Bowman('Poopssssssssss', 'Bowman')).toThrow('field name must have type string & length must be from 2 to 10 character');
});

test(('class Bowman'), () => {
  expect(() => new Bowman('Bowman', 'King')).toThrow('This type King is wrong');
});
