import { c as create_ssr_component, b as add_attribute, v as validate_component, e as each, d as escape } from "../../chunks/index.js";
const video = "/_app/immutable/assets/pcs-46eabb68.mp4";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"relative"}"><div class="${"from-nav-gradient absolute bottom-0 left-0 z-20 h-20 w-full bg-gradient-to-t"}"></div>
	<video${add_attribute("src", video, 0)} autoplay loop muted class="${"h-screen w-full object-cover brightness-[30%]"}"></video>
	<div class="${"absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-white [&>p]:pointer-events-none [&>h1]:pointer-events-none"}"><h1 class="${"my-10 text-5xl lg:text-7xl"}">Quality Catholic Education</h1>
		<p class="${"text-base"}">Through Faith, Hope, &amp; Charity</p></div>
  <a class="${"text-white border-white border-[1px] py-2 px-5 text-xl absolute bottom-[25%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:bg-accent hover:border-accent transition-all duration-300"}" href="${"https://schoolaide.pcsian.edu.ph/login"}" rel="${"noreferrer"}" target="${"_blank"}" type="${"button"}">Apply Now</a></section>`;
});
const gradeSchool = "/_app/immutable/assets/gradeSchool-bde49ee1.gif";
const juniorHigh = "/_app/immutable/assets/juniorHigh-da5bbdf7.gif";
const seniorHigh = "/_app/immutable/assets/seniorHigh-3bfaf3fd.gif";
const kessokuBand = "/_app/immutable/assets/KessokuBand-6ff185c8.png";
const animations = "";
const OrangeBlob1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"scale-200 absolute -bottom-20 h-full w-full 2xl:-bottom-10"}"><svg id="${"visual"}" viewBox="${"0 0 900 600"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" version="${"1.1"}"><g transform="${"translate(411.0061771322486 274.00080036139434)"}"><path d="${"M268.6 -110.9C320.7 -64.8 316.7 57.8 262.6 120.6C208.4 183.3 104.2 186.2 -1 186.8C-106.2 187.3 -212.5 185.7 -226 146.4C-239.5 107 -160.4 30.1 -107.2 -16.6C-54.1 -63.3 -27.1 -79.6 40.6 -103.1C108.3 -126.5 216.5 -157 268.6 -110.9"}" fill="${"rgb(205, 127, 0)"}"></path></g></svg></div>`;
});
const Programs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const programs = [
    {
      title: "Grade School",
      image: gradeSchool,
      bg: "bg-grade-school",
      path: "/grade-school"
    },
    {
      title: "Junior High",
      image: juniorHigh,
      bg: "bg-junior-high",
      path: "/junior-high"
    },
    {
      title: "Senior High",
      image: seniorHigh,
      bg: "bg-senior-high",
      path: "/senior-high"
    }
  ];
  const delay = ["delay-1000", "delay-1200", "delay-1400"];
  return `<div class="${"py-60"}"><div class="${"relative flex h-full flex-row items-center justify-between gap-20 px-[10%] pb-40"}">
		<div class="${"flex max-w-[50%] flex-col text-white"}"><h2${add_attribute(
    "class",
    `text-3xl transition-all duration-1000 ease-in-out lg:text-5xl ${"md:translate-y-full md:opacity-0 md:blur-[2px]"}`,
    0
  )}>Discover the Power of Personalized Education
			</h2>
			<span${add_attribute("class", `bg-accent my-8 inline-block h-[2px] w-full origin-left rounded-full transition-all delay-700 duration-1000 ease-in-out ${"md:scale-x-0"}`, 0)}></span>
			<p${add_attribute(
    "class",
    `transition-all delay-1000 duration-1000 ease-in-out ${"md:translate-y-full md:opacity-0 md:blur-[2px]"}`,
    0
  )}>At Pateros Catholic School, we offer a comprehensive educational experience for students in
				grades K-12. Our academic programs are designed to provide a strong foundation for our
				students and help them reach their full potential. With our commitment to academic
				excellence, personalized learning, and a supportive community, our academic programs provide
				an exceptional educational experience for all students.
			</p></div>
		<div class="${"relative flex h-full w-full"}"><img${add_attribute("src", kessokuBand, 0)} alt="${""}" class="${"float-shadow z-10 w-full max-w-xl"}">
			${validate_component(OrangeBlob1, "OrangeBlob1").$$render($$result, {}, {}, {})}</div></div>
	<div class="${"flex w-full flex-col items-center justify-center gap-10 lg:flex-row"}">${each(programs, (program, idx) => {
    return `
			<div${add_attribute(
      "class",
      `${program.bg} w-full max-w-sm bg-cover pt-32 transition-all duration-1000 ${delay[idx]} ${"md:-translate-x-full md:opacity-0 md:blur-[2px]"}`,
      0
    )}><div class="${"gradient p-4 pt-12"}"><h3 class="${"after:bg-accent relative text-xl text-white after:absolute after:left-[calc(1rem*-1)] after:-bottom-1 after:h-[2px] after:w-full after:content-['']"}">${escape(program.title)}</h3>
					<p class="${"my-4 text-sm text-white"}">A solid foundation for academic success and character development, with a focus on
						hands-on learning and creating a lifelong love of learning.
					</p>
					
					<a${add_attribute("href", program.path, 0)} class="${"mt-4 text-base text-white"}">Learn More</a></div>
			</div>`;
  })}</div></div>`;
});
const curves = "";
const CurveWhiteTop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"curve-white-top"}"><svg data-name="${"Layer 1"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 1200 120"}" preserveAspectRatio="${"none"}"><path d="${"M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"}" opacity="${".25"}" class="${"shape-fill"}"></path><path d="${"M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"}" opacity="${".5"}" class="${"shape-fill"}"></path><path d="${"M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"}" class="${"shape-fill"}"></path></svg></div>`;
});
const CurveWhiteBottom = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"curve-white-bottom"}"><svg data-name="${"Layer 1"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 1200 120"}" preserveAspectRatio="${"none"}"><path d="${"M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"}" opacity="${".25"}" class="${"shape-fill"}"></path><path d="${"M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"}" opacity="${".5"}" class="${"shape-fill"}"></path><path d="${"M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"}" class="${"shape-fill"}"></path></svg></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}


<div class="${"relative flex items-center bg-white px-[10%] pt-40 pb-32 text-center text-black md:px-[20%]"}"><div class="${"pointer-events-none flex flex-col items-center justify-center"}"><h2${add_attribute(
    "class",
    `transform-gpu text-3xl font-bold transition-all duration-1000 ease-in-out lg:text-5xl ${"md:translate-y-full md:opacity-0 md:blur-[2px]"}`,
    0
  )}>Creating a Brighter Future
		</h2>
		<span${add_attribute(
    "class",
    `bg-accent my-8 h-[2px] w-full transform-gpu rounded-full transition-all duration-1000 ease-in-out ${"md:scale-x-0"}`,
    0
  )}></span>
		<p${add_attribute(
    "class",
    `transform-gpu text-xl transition-all delay-1000 duration-1000 ease-in-out md:text-2xl ${"md:translate-y-full md:opacity-0 md:blur-[2px]"}`,
    0
  )}>Pateros Catholic School is more than just a school - it&#39;s a life experience. Our unique
			approach to learning enhances our students&#39; education and helps them to explore their dynamic
			and diverse community. Pateros Catholic School provides a rich learning environment that has
			helped countless students get ahead.
			</p></div></div>


<div class="${"relative bg-black"}">${validate_component(CurveWhiteTop, "CurveWhiteTop").$$render($$result, {}, {}, {})}
	${validate_component(Programs, "Programs").$$render($$result, {}, {}, {})}
	${validate_component(CurveWhiteBottom, "CurveWhiteBottom").$$render($$result, {}, {}, {})}</div>


<div class="${"relative h-full bg-white px-[10%] py-40"}">
	<div${add_attribute(
    "class",
    `relative mb-5 flex transform-gpu flex-col items-center justify-center whitespace-nowrap text-center text-3xl font-bold transition-all duration-1000 ease-in-out lg:text-5xl ${"md:translate-y-full md:opacity-0 md:blur-[2px]"}`,
    0
  )}><h2 class="${"px-10"}">What&#39;s Happening?</h2>
		<span${add_attribute(
    "class",
    `bg-accent my-8 h-[2px] w-full transform-gpu rounded-full transition-all duration-1000 ease-in-out ${"md:scale-x-0"}`,
    0
  )}></span></div>
	<div class="${"flex flex-col justify-center gap-5 lg:flex-row"}"><iframe src="${"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPCS.OfficialPage%2Fposts%2Fpfbid02BK1sBRu1PVZ7qiW6TknHHgQbbaT26wcX9XMyJdoMQvkAqNnRoumxfaYg1THzDRCsl&show_text=true&width=500"}" width="${"100%"}" height="${"634"}" title="${"fb-post-1"}" style="${"border:none;overflow:hidden"}" scrolling="${"no"}" frameborder="${"0"}" ${"allowfullscreen"} allow="${"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"}"></iframe>
		<iframe src="${"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPCS.OfficialPage%2Fposts%2Fpfbid09VxSPgjyjBaACaeUyR23qAPicT6bWr2jSMpmGcZkhvRnb98yuv7NGzmhFZPWALwfl&show_text=true&width=500"}" width="${"100%"}" height="${"709"}" title="${"fb-post-2"}" style="${"border:none;overflow:hidden"}" scrolling="${"no"}" frameborder="${"0"}" ${"allowfullscreen"} allow="${"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"}"></iframe>
		<iframe src="${"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPCS.OfficialPage%2Fposts%2Fpfbid06CQJPSaPCtTXUs6AqqkqErnXVZke5owTm7RRMuNaSfzhfGm7sLVCR61guiboqrcJl&show_text=true&width=500"}" width="${"100%"}" height="${"748"}" style="${"border:none;overflow:hidden"}" title="${"fb-post-3"}" scrolling="${"no"}" frameborder="${"0"}" ${"allowfullscreen"} allow="${"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"}"></iframe></div></div>`;
});
export {
  Page as default
};
