import lsFactory from "./utils/local-storage";

const ls = lsFactory("user");

ls.set("hello", "value");
