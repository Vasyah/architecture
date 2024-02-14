import factory from "./utils/local-storage";

const ls = factory("user");

ls.set("hello", "value");
