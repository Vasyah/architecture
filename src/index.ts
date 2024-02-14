import { StorageOptions } from "./kv-storage/interface";
import factory from "./kv-storage";

const ls = factory("user", { engine: "sessionStorage" });

ls.set("hello", "value"); // create LSFactory class instance
