import { c as create_ssr_component, b as escape, e as each } from "../../../../chunks/index3.js";
import { b as gradeSchool } from "../../../../chunks/index4.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>${escape(gradeSchool.title)}</h2>
<ol>${each(gradeSchool.content, (item, idx) => {
    return `<li class="${"mb-4"}"><span>${escape(item.mainText)}</span>
			<ol class="${"pl-4"}">${each(item.subText, (sub, idx2) => {
      return `<li>${escape(sub)}</li>`;
    })}</ol>
		</li>`;
  })}</ol>`;
});
export {
  Page as default
};
