import { KVFactory } from "./class";
import { StorageOptions } from "./interface";

// create LSFactory class instance
export default function kvFactory(namespace: string, opts: StorageOptions): KVFactory {
    return new KVFactory(namespace, opts);
}
