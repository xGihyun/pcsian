import { c as create_ssr_component, b as add_attribute, e as each, d as escape, v as validate_component } from "../../chunks/index.js";
import { d as dropdownItems, n as navItems } from "../../chunks/index2.js";
import { Configuration, OpenAIApi } from "openai";
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
const PUBLIC_OPENAI_API_KEY = "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";
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
const INFORMATION = {
  nameOfSchool: "Pateros Catholic School (PCS)",
  location: "Pateros, Metro Manila, Philippines",
  tuitionFee: "Around 40,000 php",
  numOfStudents: "Around 4000",
  numOfTeachers: "Around 100",
  contacts: {
    email: "registrar@pcsian.edu.ph"
  },
  accessStudentsGradesAndReports: "",
  payTuition: "Pay tuition via online or just go onsite",
  dressCode: "",
  requestSchoolForms: "",
  visionMission: "",
  coreValues: "",
  eLearningPlatform: "Genyo",
  studentInfoSystem: "SchoolAide"
};
`You are a highly proficient AI ChatBot. You will ONLY answer questions related to the given information about Pateros Catholic School: ${JSON.stringify(INFORMATION)} 
I repeat, you will ONLY answer questions related to the information given about Pateros Catholic School unless the user's message is a greeting. After getting all of these information, answer the questions of the user immediately if a prompt exists.`;
const ChatBot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const API_KEY = PUBLIC_OPENAI_API_KEY;
  let { show } = $$props;
  const configuration = new Configuration({ apiKey: API_KEY });
  new OpenAIApi(configuration);
  let prompt;
  let chatHistory = [];
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  return `<div${add_attribute("class", `fixed bottom-32 right-0 z-50 w-full max-w-lg text-white md:right-10 ${show ? "block" : "hidden"}`, 0)}><div class="${"h-[40vh] overflow-y-scroll border-2 border-black bg-neutral-800"}">${each(chatHistory, (chat, idx) => {
    return `${chat.type === "user" ? `<div class="${"flex flex-row items-center gap-4 p-4"}"><div class="${"rounded-sm bg-emerald-600 p-2"}">${validate_component(User, "User").$$render($$result, { style: "h-[20px] w-[20px]" }, {}, {})}</div>
					<span class="${"w-fit break-words"}">${escape(chat.text)}</span>
				</div>` : `<div class="${"flex flex-row items-center gap-4 bg-neutral-700 p-4"}"><div class="${"bg-accent rounded-sm p-2"}">${validate_component(Robot, "Robot").$$render($$result, { style: "h-[20px] w-[20px]" }, {}, {})}</div>
					<span class="${"w-fit break-words"}">${escape(chat.text)}</span>
				</div>`}`;
  })}
		</div>
	<div class="${"flex border-2 border-black bg-neutral-700 p-2"}"><input class="${"w-full bg-transparent outline-none"}" type="${"text"}" placeholder="${"Aa"}"${add_attribute("value", prompt, 0)}>
		<button>${validate_component(Send, "Send").$$render($$result, { style: "h-[20px] w-[20px]" }, {}, {})}</button></div></div>`;
});
const Chat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}"${add_attribute("class", `bi bi-chat-dots ${style}`, 0)} viewBox="${"0 0 16 16"}"><path d="${"M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}"></path><path d="${"m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"}"></path></svg>`;
});
const QuickMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showChatBot = false;
  return `${validate_component(ChatBot, "ChatBot").$$render($$result, { show: showChatBot }, {}, {})}
<div class="${"fixed bottom-10 right-10 z-50 h-20 w-20 rounded-full bg-white "}"><button class="${"h-full w-full rounded-full border-2 border-black flex items-center justify-center"}">${validate_component(Chat, "Chat").$$render($$result, { style: "text-black h-[30px] w-[30px] " }, {}, {})}</button></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
${validate_component(QuickMenu, "QuickMenu").$$render($$result, {}, {}, {})}
<main class="${"overflow-x-hidden"}">${slots.default ? slots.default({}) : ``}</main>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
