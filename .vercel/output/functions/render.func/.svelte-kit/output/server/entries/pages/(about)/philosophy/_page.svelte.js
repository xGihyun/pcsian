import { c as create_ssr_component, e as each, d as escape } from "../../../../chunks/index.js";
import { a as philosophy } from "../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"page-wrap"}"><div class="${"page-content"}"><ul>${each(philosophy, (item, idx) => {
    return `<li class="${"list-none"}"><h2>${escape(item.title)}</h2>
          <p>${escape(item.text)}</p>
        </li>`;
  })}</ul></div></div>`;
});
export {
  Page as default
};
