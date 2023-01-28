import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../../chunks/index.js";
import { T as TopHeading, p as pcsMain } from "../../../chunks/TopHeading.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(TopHeading, "TopHeading").$$render($$result, { title: "ACADEMICS" }, {}, {})}
<div class="${"relative"}"><img${add_attribute("src", pcsMain, 0)} alt="${"pcs main"}" class="${"w-full h-full absolute object-cover opacity-50"}">
  <div class="${"w-full h-full absolute top-0 left-0 bg-white bg-opacity-80"}"></div>
  ${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
