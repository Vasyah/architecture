import DefaultStorageEngine from "./engines";
import { KVStorageEngine } from "./engines/interface";
import { StorageOptions, SerializableValue } from "./interface";

export class KVFactory {
    readonly namespace: string;
    readonly #engine: KVStorageEngine;

    constructor(namespace: string, opts: StorageOptions) {
        this.namespace = namespace;
        this.#engine = opts?.engine ?? new DefaultStorageEngine();
    }

    async get<T extends SerializableValue>(name: string): Promise<T | null> {
        let rawData = await this.#engine.get(name);
        return JSON.parse(rawData ?? "null");
    }

    async set(name: string, value: string): Promise<void> {
        const key = this.#getKey(name);
        const data = JSON.stringify(value);

        await this.#engine.set(key, data);
    }

    async remove(name: string): Promise<void> {
        const key = this.#getKey(name);

        this.#engine.remove(key);
    }

    #getKey(key: string) {
        return `{{${this.namespace}}}-${key}`;
    }
}
