import { StorageOptions } from "./kv-storage/interface";
import kvFactory from "./kv-storage";
import { SessionStorageEngine } from "./kv-storage/engines";

const ls = kvFactory("user", { engine: new SessionStorageEngine() });

ls.set("hello", "value"); // create LSFactory class instance