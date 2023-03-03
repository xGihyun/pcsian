import { c as create_ssr_component, e as each, b as escape } from "../../../../chunks/index3.js";
import { p as paascu } from "../../../../chunks/index4.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"page-wrap"}"><div class="${"page-content"}"><h2>PAASCU Accreditation</h2>
    <ol>${each(paascu, (item, idx) => {
    return `<li><h3>${escape(item.title)}</h3>
          <ul>${each(item.text, (text, idx2) => {
      return `<li><p>${escape(text)}</p>
              </li>`;
    })}</ul>
        </li>`;
  })}</ol></div></div>`;
});
export {
  Page as default
};
