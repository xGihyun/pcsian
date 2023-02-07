import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { T as TopHeading } from "../../../chunks/TopHeading.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(TopHeading, "TopHeading").$$render($$result, { title: "ACADEMICS" }, {}, {})}
<div class="${"relative mx-4 my-10 h-full bg-white "}"><div class="${"page-content mx-auto max-w-4xl"}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  Layout as default
};
