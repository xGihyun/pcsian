import { c as create_ssr_component, e as each, d as escape } from "../../../../chunks/index.js";
import { g as goals, c as coreValues } from "../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"page-wrap"}"><div class="${"page-content"}"><h2>Goals</h2>
    <ol>${each(goals, (goal, idx) => {
    return `<li><p>${escape(goal.text)}</p>
        </li>`;
  })}</ol>
    <h2>Core Values</h2>
    <ol>${each(coreValues, (coreValue, idx) => {
    return `<li><h3>${escape(coreValue.title)}</h3>
          <ul>${each(coreValue.text, (text, idx2) => {
      return `<li>${escape(text)}</li>`;
    })}</ul>
          <h4>Related Values:</h4>
          <ol>${each(coreValue.values, (value, idx2) => {
      return `<li>${escape(value)}</li>`;
    })}</ol>
        </li>`;
  })}</ol></div></div>`;
});
export {
  Page as default
};
