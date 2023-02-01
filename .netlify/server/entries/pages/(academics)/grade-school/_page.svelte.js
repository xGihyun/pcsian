import { c as create_ssr_component, d as escape, e as each } from "../../../../chunks/index.js";
import { b as gradeSchool } from "../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"page-wrap"}"><div class="${"page-content"}"><h2>${escape(gradeSchool.title)}</h2>
		<ol>${each(gradeSchool.content, (item, idx) => {
    return `<li class="${"mb-4"}"><span>${escape(item.mainText)}</span>
					<ol>${each(item.subText, (sub, idx2) => {
      return `<li>${escape(sub)}</li>`;
    })}</ol>
				</li>`;
  })}</ol></div></div>`;
});
export {
  Page as default
};
