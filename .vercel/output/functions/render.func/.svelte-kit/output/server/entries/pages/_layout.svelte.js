import { c as create_ssr_component, b as add_attribute, e as each, d as escape, v as validate_component } from "../../chunks/index.js";
import { d as dropdownItems, n as navItems } from "../../chunks/index2.js";
const app = "";
const qrCode = "/_app/immutable/assets/pcsQrCode-1e27be45.jpg";
const pcsMembers = "/_app/immutable/assets/pcsMembers-783930a5.png";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"w-full bg-neutral-800 text-white border-t-accent border-t-8"}"><div class="${"flex flex-col lg:flex-row items-start text-center justify-center py-16"}"><div class="${"w-full flex flex-col items-center pb-12"}"><div class="${"pb-4"}"><h2>Pateros Catholic School</h2>
        <p>B. Morcilla St, Pateros, 1620 Metro Manila, Philippines</p></div>
      <div class="${"w-72 h-72 md:w-[25rem] md:h-[25rem]"}"><iframe title="${"map"}" src="${"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.9494751054976!2d121.06508531483951!3d14.54488198983792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8900303c535%3A0x83c4ca46850a39b3!2sPateros%20Catholic%20School!5e0!3m2!1sen!2sph!4v1664087741176!5m2!1sen!2sph"}" width="${"100%"}" height="${"100%"}"${add_attribute("style", "border: 0", 0)} ${"allowfullscreen"} loading="${"lazy"}" referrerpolicy="${"no-referrer-when-downgrade"}"></iframe></div></div>
    <div class="${"w-full flex flex-col items-center"}"><div class="${"pb-4"}"><h2>Connect with us</h2>
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
  return `<ul${add_attribute("class", scrolled ? "dropdown scrolled" : "dropdown", 0)}>${each(dropdownItems[drop], (item, idx) => {
    return `<li><a${add_attribute("href", item.path, 0)}>${escape(item.title)}</a>
    </li>`;
  })}</ul>`;
});
const HamburgerMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `
<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"currentColor"}"${add_attribute("class", `bi bi-list ${style}`, 0)} viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"}"></path></svg>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let scrolled = false;
  let hovered = false;
  let hoveredElement = "";
  return `<div class="${"fixed top-0 left-0 w-full z-50"}">
	${``}
	<nav${add_attribute("class", "nav", 0)}><img${add_attribute("src", logo, 0)} alt="${"pcs"}" class="${"w-16 h-16"}">
		<ul class="${"h-full flex flex-row"}">${each(navItems, (item, idx) => {
    return `${item.data === "about" || item.data === "academics" ? `<li class="${"nav-elements"}">
						<a href="${"#"}"${add_attribute("data-nav", item.data, 0)}>${escape(item.title)}</a>
						${hoveredElement === item.data && hovered ? `${validate_component(Dropdown, "Dropdown").$$render($$result, { drop: hoveredElement, scrolled }, {}, {})}` : ``}
					</li>` : `<li><a${add_attribute("href", item.path, 0)}${add_attribute("data-nav", item.data, 0)}>${escape(item.title)}</a>
					</li>`}`;
  })}</ul></nav>

	
	<nav class="${"nav-mobile"}"><img${add_attribute("src", logo, 0)} alt="${""}" class="${"w-12 h-12"}">
		
		<div>${validate_component(HamburgerMenu, "HamburgerMenu").$$render(
    $$result,
    {
      style: "w-[25px] h-[25px] text-white cursor-pointer"
    },
    {},
    {}
  )}</div></nav>
	
  ${``}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
<main>${slots.default ? slots.default({}) : ``}</main>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
