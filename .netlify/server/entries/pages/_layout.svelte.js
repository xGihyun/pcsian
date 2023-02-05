import { c as create_ssr_component, b as add_attribute, e as each, d as escape, v as validate_component } from "../../chunks/index.js";
import { d as dropdownItems, n as navItems } from "../../chunks/index2.js";
const app = "";
const qrCode = "/_app/immutable/assets/pcsQrCode-1e27be45.jpg";
const pcsMembers = "/_app/immutable/assets/pcsMembers-783930a5.png";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"border-t-accent w-full border-t-8 bg-neutral-800 text-white [&>h2]:text-2xl [&>p]:text-neutral-300"}"><div class="${"flex flex-col items-start justify-center py-16 text-center lg:flex-row"}"><div class="${"flex w-full flex-col items-center pb-12"}"><div class="${"pb-4"}"><h2>Pateros Catholic School</h2>
				<p>B. Morcilla St, Pateros, 1620 Metro Manila, Philippines</p></div>
			<div class="${"h-72 w-72 md:h-[25rem] md:w-[25rem]"}"><iframe title="${"map"}" src="${"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.9494751054976!2d121.06508531483951!3d14.54488198983792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8900303c535%3A0x83c4ca46850a39b3!2sPateros%20Catholic%20School!5e0!3m2!1sen!2sph!4v1664087741176!5m2!1sen!2sph"}" width="${"100%"}" height="${"100%"}"${add_attribute("style", "border: 0", 0)} ${"allowfullscreen"} loading="${"lazy"}" referrerpolicy="${"no-referrer-when-downgrade"}"></iframe></div></div>
		<div class="${"flex w-full flex-col items-center"}"><div class="${"pb-4"}"><h2>Connect with us</h2>
				<p>(02) 642-6016; (02) 636-7274</p>
				<p>registrar@pcsian.edu.ph</p></div>
			<img${add_attribute("src", qrCode, 0)} alt="${""}"></div></div>
	<img${add_attribute("src", pcsMembers, 0)} alt="${""}" class="${"m-auto"}"></footer>`;
});
const logo = "/_app/immutable/assets/pcsLogoBrown-96909997.png";
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { drop } = $$props;
  let { scrolled } = $$props;
  if ($$props.drop === void 0 && $$bindings.drop && drop !== void 0)
    $$bindings.drop(drop);
  if ($$props.scrolled === void 0 && $$bindings.scrolled && scrolled !== void 0)
    $$bindings.scrolled(scrolled);
  return `<ul${add_attribute("class", `absolute top-20 flex flex-col gap-3 text-white transition-all duration-300 ease-in-out ${scrolled ? "top-14 pt-2" : ""}`, 0)}>${each(dropdownItems[drop], (item, idx) => {
    return `<li class="${"pl-4"}"><a${add_attribute("href", item.path, 0)}>${escape(item.title)}</a>
		</li>`;
  })}</ul>`;
});
const HamburgerMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"currentColor"}" class="${"bi bi-list h-[25px] w-[25px] cursor-pointer text-white"}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"}"></path></svg>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let scrolled = false;
  let hovered = false;
  let hoveredElement = "";
  return `<div class="${"fixed top-0 left-0 z-50 w-full"}">
	${``}
	<nav${add_attribute(
    "class",
    `absolute top-0 left-0 hidden h-20 w-full items-center justify-between bg-gradient-to-b 
    px-[5%] transition-all duration-300 ease-in-out md:flex ${"from-nav-gradient"}`,
    0
  )}><img${add_attribute("class", `h-16 w-16 transition-all duration-300 ease-in-out ${""}`, 0)}${add_attribute("src", logo, 0)} alt="${"pcs"}">
		<ul class="${"hidden h-full flex-row md:flex"}">${each(navItems, (item, idx) => {
    return `${item.data === "about" || item.data === "academics" ? `<li class="${"h-full"}">
						<a class="${"flex h-full items-center px-4 text-white"}" href="${"#"}"${add_attribute("data-nav", item.data, 0)}>${escape(item.title)}</a>
						${hoveredElement === item.data && hovered ? `${validate_component(Dropdown, "Dropdown").$$render($$result, { drop: hoveredElement, scrolled }, {}, {})}` : ``}
					</li>` : `<li class="${"h-full"}"><a class="${"flex h-full items-center px-4 text-white"}"${add_attribute("href", item.path, 0)}${add_attribute("data-nav", item.data, 0)}>${escape(item.title)}</a>
					</li>`}`;
  })}</ul></nav>

	
	<nav class="${"bg-accent shadow-nav-shadow flex h-14 w-full items-center justify-between from-transparent px-[5%] md:hidden"}"><img${add_attribute("src", logo, 0)} alt="${""}" class="${"h-12 w-12"}">
		
		<div>${validate_component(HamburgerMenu, "HamburgerMenu").$$render($$result, {}, {}, {})}</div></nav>
	${``}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
<main class="${"overflow-x-hidden"}">${slots.default ? slots.default({}) : ``}</main>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
