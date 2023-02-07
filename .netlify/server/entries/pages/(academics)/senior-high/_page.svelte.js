import { c as create_ssr_component, d as escape, e as each } from "../../../../chunks/index.js";
import { e as seniorHigh } from "../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>${escape(seniorHigh.title)}</h2>
<ol>${each(seniorHigh.content, (item, idx) => {
    return `<li class="${"mb-4"}"><span>${escape(item.mainText)}</span>
			<ol>${each(item.subText, (sub, idx2) => {
      return `<li>${escape(sub)}</li>`;
    })}</ol>
		</li>`;
  })}</ol>`;
});
export {
  Page as default
};
