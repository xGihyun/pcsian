import { c as create_ssr_component, v as validate_component } from "../../../chunks/index3.js";
import "../../../chunks/animations.js";
import { T as TopHeading } from "../../../chunks/TopHeading.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(TopHeading, "TopHeading").$$render($$result, { title: "SCHOOL CALENDAR" }, {}, {})}
<div class="${"h-full bg-white"}">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
