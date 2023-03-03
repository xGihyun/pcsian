import { c as create_ssr_component, e as each, b as escape } from "../../../../chunks/index3.js";
import { i as institutionDirection } from "../../../../chunks/index4.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"page-wrap"}"><div class="${"page-content"}"><h2>Institutional Directions</h2>
    <p class="${"text-center"}">The 6 Institutional Directions are in support of the school&#39;s process in sustaining the ongoing PAASCU accreditation.</p>
    <ol>${each(institutionDirection, (item, idx) => {
    return `<li><h3>${escape(item.title)}</h3>
        <p>${escape(item.text)}</p>
      </li>`;
  })}</ol></div></div>`;
});
export {
  Page as default
};
