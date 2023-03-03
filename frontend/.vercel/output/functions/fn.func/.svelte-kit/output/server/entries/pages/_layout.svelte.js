import { c as create_ssr_component, a as add_attribute, e as each, b as escape, n as null_to_empty, v as validate_component, d as subscribe } from "../../chunks/index3.js";
import "../../chunks/animations.js";
import { d as dropdownItems, n as navItems } from "../../chunks/index4.js";
import { w as writable } from "../../chunks/index2.js";
import "../../chunks/LoadingChat.svelte_svelte_type_style_lang.js";
import { p as page } from "../../chunks/stores.js";
const app = "";
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { drop } = $$props;
  let { scrolled } = $$props;
  if ($$props.drop === void 0 && $$bindings.drop && drop !== void 0)
    $$bindings.drop(drop);
  if ($$props.scrolled === void 0 && $$bindings.scrolled && scrolled !== void 0)
    $$bindings.scrolled(scrolled);
  return `<ul${add_attribute("class", `absolute flex flex-col gap-3 text-white transition-all duration-500 ease-in-out ${scrolled ? "top-16 pt-2" : "top-24"}`, 0)}>${each(dropdownItems[drop], (item, idx) => {
    return `<li class="${"pl-4"}"><a${add_attribute("href", item.path, 0)}>${escape(item.title)}</a>
		</li>`;
  })}</ul>`;
});
const pcsLogo = "/_app/immutable/assets/pcsLogoBrown.6abd1670.webp";
const qrCode = "/_app/immutable/assets/pcsQrCode.1c1ff9d2.webp";
const pcsMembers = "/_app/immutable/assets/pcsMembers.2731f99f.webp";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"border-t-accent w-full border-t-8 bg-neutral-900 text-white [&>p]:text-neutral-300 [&>h2]:text-2xl"}"><div class="${"flex flex-col items-start justify-center py-16 text-center lg:flex-row"}"><div class="${"flex w-full flex-col items-center pb-12"}"><div class="${"pb-4"}"><h2>Pateros Catholic School</h2>
				<p>B. Morcilla St, Pateros, 1620 Metro Manila, Philippines</p></div>
			<div class="${"h-72 w-72 md:h-[25rem] md:w-[25rem]"}"><iframe title="${"map"}" src="${"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.9494751054976!2d121.06508531483951!3d14.54488198983792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8900303c535%3A0x83c4ca46850a39b3!2sPateros%20Catholic%20School!5e0!3m2!1sen!2sph!4v1664087741176!5m2!1sen!2sph"}" width="${"100%"}" height="${"100%"}"${add_attribute("style", "border: 0", 0)} ${"allowfullscreen"} loading="${"lazy"}" referrerpolicy="${"no-referrer-when-downgrade"}"></iframe></div></div>
		<div class="${"flex w-full flex-col items-center"}"><div class="${"pb-4"}"><h2>Connect with us</h2>
				<p>(02) 642-6016; (02) 636-7274</p>
				<p>registrar@pcsian.edu.ph</p></div>
			<img${add_attribute("src", qrCode, 0)} alt="${""}" class="${"h-40"}"></div></div>
	<img${add_attribute("src", pcsMembers, 0)} alt="${""}" class="${"m-auto h-16"}"></footer>`;
});
const css$1 = {
  code: "@keyframes svelte-1j0jp3g-loading{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}.loading.svelte-1j0jp3g div.svelte-1j0jp3g{position:absolute;animation:svelte-1j0jp3g-loading 1s linear infinite;width:160px;height:160px;top:20px;left:20px;border-radius:50%;box-shadow:0 6px 0 0 #cd7f00;transform-origin:80px 83px}.loading-spinner.svelte-1j0jp3g.svelte-1j0jp3g{width:200px;height:200px;display:inline-block;overflow:hidden}.loading.svelte-1j0jp3g.svelte-1j0jp3g{width:100%;height:100%;position:relative;transform:translateZ(0) scale(1);backface-visibility:hidden;transform-origin:0 0}.loading.svelte-1j0jp3g div.svelte-1j0jp3g{box-sizing:content-box}",
  map: null
};
const Loading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$1);
  return `<div class="${escape(null_to_empty(`absolute left-0 top-0 z-[999] flex h-screen w-full items-center justify-center bg-black ${style}`), true) + " svelte-1j0jp3g"}"><div class="${"loading-spinner svelte-1j0jp3g"}"><div class="${"loading svelte-1j0jp3g"}"><div class="${"svelte-1j0jp3g"}"></div></div></div>
</div>`;
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
    `absolute top-0 left-0 hidden w-full items-center justify-between bg-gradient-to-b 
    px-[5%] transition-all duration-500 ease-in-out md:flex ${"from-nav-gradient h-32"}`,
    0
  )}><div class="${"flex flex-row items-center gap-4"}"><img${add_attribute("class", `transition-all duration-500 ease-in-out ${"h-28 w-28"}`, 0)}${add_attribute("src", pcsLogo, 0)} alt="${"pcs"}">
			</div>
		<ul class="${"hidden h-full flex-row md:flex"}">${each(navItems, (item, idx) => {
    return `${item.data === "about" || item.data === "academics" ? `<li class="${"h-full"}">
						<a class="${"pointer-events-none flex h-full items-center px-4 text-white"}" href="${"#"}"${add_attribute("data-nav", item.data, 0)}>${escape(item.title)}</a>
						${hoveredElement === item.data && hovered ? `${validate_component(Dropdown, "Dropdown").$$render($$result, { drop: hoveredElement, scrolled }, {}, {})}` : ``}
					</li>` : `<li class="${"h-full"}"><a class="${"flex h-full items-center px-4 text-white"}"${add_attribute("href", item.path, 0)}${add_attribute("data-nav", item.data, 0)}>${escape(item.title)}</a>
					</li>`}`;
  })}</ul></nav>

	
	<nav class="${"bg-accent shadow-nav-shadow flex h-14 w-full items-center justify-between from-transparent px-[5%] md:hidden"}"><img${add_attribute("src", pcsLogo, 0)} alt="${""}" class="${"h-12 w-12"}">
		
		<div>${validate_component(HamburgerMenu, "HamburgerMenu").$$render($$result, {}, {}, {})}</div></nav>
	${``}</div>`;
});
const Chat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"currentColor"}"${add_attribute("class", `bi bi-chat-dots ${style}`, 0)} viewBox="${"0 0 16 16"}"><path d="${"M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}"></path><path d="${"m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"}"></path></svg>`;
});
const showChatBot = writable(false);
const CalendarIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"currentColor"}"${add_attribute("class", `bi bi-calendar-event ${style}`, 0)} viewBox="${"0 0 16 16"}"><path d="${"M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"}"></path><path d="${"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"}"></path></svg>`;
});
const QuickMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let show = false;
  showChatBot.subscribe((value) => show = value);
  return `${validate_component(ChatBot, "ChatBot").$$render($$result, {}, {}, {})}
<div${add_attribute("class", `fixed bottom-5 right-5 sm:bottom-10 sm:right-10 z-50 flex flex-col items-end gap-4 ${show ? "hidden" : "block"}`, 0)}><a href="${"/calendar"}" type="${"button"}" class="${"bg-accent shadow-nav-shadow flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 lg:hover:scale-90 lg:hover:brightness-110"}" data-sveltekit-preload-data="${"off"}">${validate_component(CalendarIcon, "CalendarIcon").$$render($$result, { style: "text-white h-5 w-5" }, {}, {})}</a>
	<button class="${"bg-accent shadow-nav-shadow flex h-20 w-20 items-center justify-center rounded-full transition-all duration-300 lg:hover:scale-90 lg:hover:brightness-110"}">${validate_component(Chat, "Chat").$$render($$result, { style: "text-white h-11 w-11" }, {}, {})}</button></div>`;
});
const Close = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}"${add_attribute("class", `bi bi-x ${style}`, 0)} viewBox="${"0 0 16 16"}"><path d="${"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}"></path></svg>`;
});
const Robot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}"${add_attribute("class", `bi bi-robot ${style}`, 0)} viewBox="${"0 0 16 16"}"><path d="${"M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"}"></path><path d="${"M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"}"></path></svg>`;
});
const Send = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}"${add_attribute("class", `bi bi-send ${style}`, 0)} viewBox="${"0 0 16 16"}"><path d="${"M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"}"></path></svg>`;
});
const User = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}"${add_attribute("class", `bi bi-person-circle ${style}`, 0)} viewBox="${"0 0 16 16"}"><path d="${"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}"></path><path fill-rule="${"evenodd"}" d="${"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"}"></path></svg>`;
});
const ChatBot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let show = false;
  let input;
  let prompt;
  let chatHistory = [];
  showChatBot.subscribe((value) => show = value);
  return `<div${add_attribute("class", `fixed bottom-0 right-0 z-50 w-full max-w-lg text-white md:bottom-10 md:right-10 ${show ? "block" : "hidden"}`, 0)}><div class="${"flex w-full items-center justify-end bg-neutral-900 text-white"}"><button>${validate_component(Close, "Close").$$render($$result, { style: "text-white h-8 w-8" }, {}, {})}</button></div>
	<div class="${"relative"}"><div class="${"shadow-chat h-[50vh] overflow-y-scroll bg-neutral-800"}">${each(chatHistory, (chat, idx) => {
    return `${chat.type === "user" ? `<div class="${"flex flex-row items-center gap-4 p-4"}"><div class="${"rounded-sm bg-emerald-600 p-2"}">${validate_component(User, "User").$$render($$result, { style: "h-[20px] w-[20px]" }, {}, {})}</div>
						<span class="${"w-fit break-words"}">${escape(chat.text)}</span>
					</div>` : `<div class="${"flex flex-row items-center gap-4 bg-neutral-700 p-4"}"><div class="${"bg-accent rounded-sm p-2"}">${validate_component(Robot, "Robot").$$render($$result, { style: "h-[20px] w-[20px]" }, {}, {})}</div>
						<span class="${"w-fit break-words"}">${escape(chat.text)}</span>
					</div>`}`;
  })}
			${``}
			<div class="${"h-28"}"></div></div>
		<span class="${"absolute left-0 bottom-0 h-32 w-full bg-gradient-to-t from-black opacity-50"}"></span>
		<div class="${"absolute left-[50%] bottom-3 w-[80%] -translate-x-[50%] rounded-full bg-neutral-700 p-3"}"><form class="${"flex"}" data-sveltekit-noscroll><input class="${"w-full bg-transparent outline-none"}" type="${"text"}" placeholder="${"Aa"}"${add_attribute("value", prompt, 0)}${add_attribute("this", input, 0)}>
				<button>${validate_component(Send, "Send").$$render(
    $$result,
    {
      style: "h-[20px] w-[20px] hover:text-accent hover:scale-110 transition-all duration-300"
    },
    {},
    {}
  )}</button></form></div></div></div>`;
});
const Transition_svelte_svelte_type_style_lang = "";
const css = {
  code: ".fade-in.svelte-1pb34oc{animation:svelte-1pb34oc-fade-in 2s}@keyframes svelte-1pb34oc-fade-in{0%{opacity:0}50%,100%{opacity:1}}",
  map: null
};
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$result.css.add(css);
  return `<div class="${"fade-in svelte-1pb34oc"}">${slots.default ? slots.default({}) : ``}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let display = "block";
  $$unsubscribe_page();
  return `${validate_component(Loading, "Loading").$$render(
    $$result,
    {
      style: `transition-all duration-1000 ${display} ${"translate-y-0"}`
    },
    {},
    {}
  )}

<div${add_attribute("class", `${"hidden"}`, 0)}>${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
	${validate_component(QuickMenu, "QuickMenu").$$render($$result, {}, {}, {})}
	${validate_component(Transition, "Transition").$$render($$result, { url: $page.url }, {}, {
    default: () => {
      return `<main class="${"overflow-x-hidden"}">${slots.default ? slots.default({}) : ``}</main>
		${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
    }
  })}</div>`;
});
export {
  Layout as default
};
