const DEEP_MAP_VALUE = Symbol();

export class DeepMap<GValue> {
  readonly #map: Map<any, any>;

  constructor() {
    this.#map = new Map<any, any>();
  }

  has(
    key: readonly any[],
  ): boolean {
    let map: Map<any, any> = this.#map;
    for (let i: number = 0; i < key.length; i++) {
      map = map.get(key[i]);
      if (map === void 0) {
        return false;
      }
    }
    return map.has(DEEP_MAP_VALUE);
  }

  get(
    key: readonly any[],
  ): GValue | undefined {
    let map: Map<any, any> = this.#map;
    for (let i: number = 0; i < key.length; i++) {
      map = map.get(key[i]);
      if (map === void 0) {
        return void 0;
      }
    }
    return map.get(DEEP_MAP_VALUE);
  }

  set(
    key: readonly any[],
    value: GValue,
  ): void {
    let map: Map<any, any> = this.#map;
    for (let i: number = 0; i < key.length; i++) {
      const _key: any = key[i];
      let childMap = map.get(_key);
      if (childMap === void 0) {
        childMap = new Map<any, any>();
        map.set(_key, childMap);
      }
      map = childMap;
    }

    map.set(DEEP_MAP_VALUE, value);
  }

  delete(
    key: readonly any[],
  ): boolean {
    let map: Map<any, any> = this.#map;
    for (let i: number = 0; i < key.length; i++) {
      map = map.get(key[i]);
      if (map === void 0) {
        return false;
      }
    }
    return map.delete(DEEP_MAP_VALUE);
  }

  clear(): void {
    this.#map.clear();
  }
}
