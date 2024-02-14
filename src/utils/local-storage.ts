function get(name: string): string | null {
  return localStorage.getItem(name);
}

function set(name: string, value: string): void {
  localStorage.setItem(name, value);
}

function remove(name: string): void {
  localStorage.removeItem(name);
}

export { get, set, remove };
