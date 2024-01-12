import { DeepMap } from './deep-map.class';

describe('DeepMap', () => {
  describe('get/set', () => {
    it('should support empty key', () => {
      const map = new DeepMap();
      map.set([], 'abc');
      expect(map.get([])).toBe('abc');
    });

    it('should support multiple keys', () => {
      const map = new DeepMap();
      map.set([true, false], 'abc');
      expect(map.get([])).toBe(undefined);
      expect(map.get([true])).toBe(undefined);
      expect(map.get([true, false])).toBe('abc');
      expect(map.get([true, false, true])).toBe(undefined);
    });

    it('should support multiple values', () => {
      const map = new DeepMap();
      map.set([true], 0);
      map.set([true, false], 1);
      expect(map.get([])).toBe(undefined);
      expect(map.get([true])).toBe(0);
      expect(map.get([true, false])).toBe(1);
      expect(map.get([true, false, true])).toBe(undefined);
    });
  });

  describe('has', () => {
    it('should have value', () => {
      const map = new DeepMap();
      map.set([true, false], 'abc');
      expect(map.has([])).toBe(false);
      expect(map.has([true])).toBe(false);
      expect(map.has([true, false])).toBe(true);
      expect(map.has([true, false, true])).toBe(false);
    });
  });

  describe('delete', () => {
    it('should delete key', () => {
      const map = new DeepMap();
      map.set([], 0);
      map.set([true], 1);
      expect(map.delete([])).toBe(true);
      expect(map.get([])).toBe(undefined);
      expect(map.get([true])).toBe(1);
    });
  });
});
