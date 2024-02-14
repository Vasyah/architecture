import * as ls from "./utils/local-storage";

const root = document.querySelector("#root");

root?.classList.add("URAN");
ls.set("hello", "value");
