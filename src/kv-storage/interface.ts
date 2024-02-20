import { KVStorageEngine } from "./engines";

export type StorageOptions = {
    engine?: KVStorageEngine;
};

export type StorageEngine = "localStorage" | "sessionStorage";

export type SerializablePrimitiveValue = string | number | boolean | null;

export type SerializableValue =
    | SerializablePrimitiveValue
    | SerializablePrimitiveValue[]
    | Record<string, SerializablePrimitiveValue>
    | { toJSON(): SerializableValue };
