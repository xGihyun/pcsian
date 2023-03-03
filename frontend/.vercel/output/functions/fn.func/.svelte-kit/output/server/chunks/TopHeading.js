import { c as create_ssr_component, a as add_attribute, b as escape } from "./index3.js";
const pcsAnnex2 = "/_app/immutable/assets/pcsAnnex2.b88ede4a.webp";
const TopHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<div class="${"border-b-accent relative flex h-72 items-center justify-center border-b-8"}"><img${add_attribute("src", pcsAnnex2, 0)} alt="${"pcs annex"}" class="${"absolute h-full w-full object-cover brightness-[40%]"}">
	<h1 class="${"z-10 text-4xl font-bold text-white"}">${escape(title)}</h1></div>`;
});
export {
  TopHeading as T
};
