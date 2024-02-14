/**
 * Функция является фабрикой для работы с LocalStorage
 * @param namespace - имя префикса
 * @returns
 */
export default function factory(namespace: string) {
  function getKey(key: string) {
    return `{{${namespace}}}-${key}`;
  }
  return {
    get(name: string): string | null {
      return localStorage.getItem(getKey(name));
    },

    set(name: string, value: string): void {
      localStorage.setItem(getKey(name), value);
    },

    remove(name: string): void {
      localStorage.removeItem(getKey(name));
    },
  };
}
