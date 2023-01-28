import { c as create_ssr_component, b as add_attribute, d as escape } from "./index.js";
const pcsMain = "/_app/immutable/assets/pcsMain-97ad19ef.jpg";
const pcsAnnex2 = "/_app/immutable/assets/pcsAnnex2-487c31fd.jpg";
const TopHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<div class="${"h-72 relative flex items-center justify-center border-b-8 border-b-accent"}"><img${add_attribute("src", pcsAnnex2, 0)} alt="${"pcs annex"}" class="${"w-full h-full object-cover brightness-[40%] absolute"}">
  <h1 class="${"text-white text-4xl z-10 font-bold"}">${escape(title)}</h1></div>`;
});
export {
  TopHeading as T,
  pcsMain as p
};
