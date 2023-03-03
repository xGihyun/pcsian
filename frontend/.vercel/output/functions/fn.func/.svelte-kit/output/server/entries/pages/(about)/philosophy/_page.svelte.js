import { c as create_ssr_component, b as escape, e as each } from "../../../../chunks/index3.js";
import { a as philosophy, g as goals, c as coreValues } from "../../../../chunks/index4.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2>${escape(philosophy[0].title)}</h2>
	<p>${escape(philosophy[0].text)}</p>
	<ul class="${"my-10 flex flex-row gap-10 text-justify"}">${each(philosophy, (item, idx) => {
    return `${item.title !== "Philosophy" ? `<li class="${"w-[50%] list-none"}"><h2>${escape(item.title)}</h2>
					<p>${escape(item.text)}</p>
				</li>` : ``}`;
  })}</ul>
	<h2>Goals</h2>
	<ol>${each(goals, (goal, idx) => {
    return `<li><p>${escape(goal.text)}</p>
			</li>`;
  })}</ol>
	<h2>Core Values</h2>
	<ol class="${"flex flex-col md:flex-row gap-10"}">${each(coreValues, (coreValue, idx) => {
    return `<li><h3>${escape(coreValue.title)}</h3>
				<ul class="${"list-disc pl-4"}">${each(coreValue.text, (text, idx2) => {
      return `<li>${escape(text)}</li>`;
    })}</ul>
				<h4>Related Values:</h4>
				<ul class="${"list-disc pl-10"}">${each(coreValue.values, (value, idx2) => {
      return `<li>${escape(value)}</li>`;
    })}</ul>
			</li>`;
  })}</ol>`;
});
export {
  Page as default
};
