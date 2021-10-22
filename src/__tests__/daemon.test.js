import Daemon from '../daemon';

test(('class Daemon'), () => {
  const daemon = new Daemon('Ib', 'Daemon');
  expect(daemon.name).toBe('Ib');
  expect(daemon.type).toBe('Daemon');
  expect(daemon.health).toBe(100);
  expect(daemon.level).toBe(1);
  expect(daemon.attack).toBe(10);
  expect(daemon.defense).toBe(40);
});

test(('class Daemon'), () => {
  expect(() => new Daemon('C', 'Daemon')).toThrow('field name must have type string & length must be from 2 to 10 character');
});

test(('class Daemon'), () => {
  expect(() => new Daemon('Zooker', 'Kriminal')).toThrow('This type Kriminal is wrong');
});
