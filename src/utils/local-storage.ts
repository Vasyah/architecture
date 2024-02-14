// create LSFactory class instance
export default function factory(namespace: string): LSFactory {
  return new LSFactory(namespace);
}

/**
 * Class creates workspace to working with LocalStorage with {namespace} prefix
 */
 * Функция является фабрикой для работы с LocalStorage
 * @param namespace - имя префикса
 * @returns
 */
export class LSFactory {
  readonly namespace: string;

  constructor(namespace: string) {
    this.namespace = namespace;
  }

  get(name: string): string | null {
    return localStorage.getItem(this.#getKey(name));
  }

  set(name: string, value: string): void {
    localStorage.setItem(this.#getKey(name), value);
  }

  remove(name: string): void {
    localStorage.removeItem(this.#getKey(name));
  }

  #getKey(key: string) {
    return `{{${this.namespace}}}-${key}`;
  }
}
