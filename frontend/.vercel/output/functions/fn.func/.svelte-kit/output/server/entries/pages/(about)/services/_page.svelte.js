import { c as create_ssr_component, e as each, b as escape } from "../../../../chunks/index3.js";
import { s as services } from "../../../../chunks/index4.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"page-wrap"}"><div class="${"page-content"}"><h2>Services &amp; Facilities</h2>
    <ul class="${"list-disc"}">${each(services, (item, idx) => {
    return `<li><h3>${escape(item.title)}</h3>
          <p>${escape(item.text)}</p>
        </li>`;
  })}</ul></div></div>`;
});
export {
  Page as default
};
