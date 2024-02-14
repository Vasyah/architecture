// create LSFactory class instance
export default function factory(namespace: string, opts: StorageOptions): LSFactory {
    return new LSFactory(namespace, opts);
}

type SerializablePrimitiveValue = string | number | boolean | null;

type SerializableValue =
    | SerializablePrimitiveValue
    | SerializablePrimitiveValue[]
    | Record<string, SerializablePrimitiveValue>
    | { toJSON(): SerializableValue };

type StorageEngine = "localStorage" | "sessionStorage";

type StorageOptions = {
    engine?: StorageEngine;
};

export class LSFactory {
    readonly namespace: string;
    readonly engine: StorageEngine;

    constructor(namespace: string, opts: StorageOptions) {
        this.namespace = namespace;
        this.engine = opts?.engine ?? "localStorage";
    }

    async get<T extends SerializableValue>(name: string): Promise<T | null> {
        let rawData;

        switch (this.engine) {
            case "localStorage":
                rawData = localStorage.getItem(this.#getKey(name)) ?? "null";
                break;

            case "sessionStorage":
                rawData = sessionStorage.getItem(this.#getKey(name)) ?? "null";
                break;
        }

        return JSON.parse(rawData);
    }

    async set(name: string, value: string): Promise<void> {
        const key = this.#getKey(name);
        const data = JSON.stringify(value);

        switch (this.engine) {
            case "localStorage":
                localStorage.setItem(key, data);
                break;
            case "sessionStorage":
                sessionStorage.setItem(key, data);
                break;
        }
    }

    async remove(name: string): Promise<void> {
        const key = this.#getKey(name);

        switch (this.engine) {
            case "localStorage":
                localStorage.setIremoveItemtem(key);
                break;
            case "sessionStorage":
                sessionStorage.removeItem(key);
                break;
        }
    }

    #getKey(key: string) {
        return `{{${this.namespace}}}-${key}`;
    }
}
