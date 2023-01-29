import { c as create_ssr_component, b as add_attribute, e as each, v as validate_component } from "../../chunks/index.js";
const video = "/_app/immutable/assets/pcs-46eabb68.mp4";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"relative"}"><div class="${"w-full h-20 bg-gradient-to-t from-nav-gradient absolute bottom-0 left-0 z-50"}"></div>
  <video${add_attribute("src", video, 0)} autoplay loop muted class="${"w-full h-screen object-cover brightness-[40%]"}"></video>
  <div class="${"text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center pointer-events-none"}"><h1 class="${"text-5xl lg:text-7xl my-10"}">Quality Catholic Education</h1>
    <p class="${"text-base"}">Through Faith, Hope, &amp; Charity</p></div></section>`;
});
const gradeSchool = "/_app/immutable/assets/gradeSchool-bde49ee1.gif";
const juniorHigh = "/_app/immutable/assets/juniorHigh-da5bbdf7.gif";
const seniorHigh = "/_app/immutable/assets/seniorHigh-3bfaf3fd.gif";
const programs = "";
const Programs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const programs2 = [
    {
      title: "Grade School",
      image: gradeSchool,
      path: "/grade-school"
    },
    {
      title: "Junior High",
      image: juniorHigh,
      path: "/junior-high"
    },
    {
      title: "Senior High",
      image: seniorHigh,
      path: "/senior-high"
    }
  ];
  const delay = ["", "delay-200", "delay-400"];
  return `<div class="${"programs-container"}"><div class="${"curve-white"}"><svg data-name="${"Layer 1"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 1200 120"}" preserveAspectRatio="${"none"}"><path d="${"M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"}" opacity="${".25"}" class="${"shape-fill"}"></path><path d="${"M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"}" opacity="${".5"}" class="${"shape-fill"}"></path><path d="${"M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"}" class="${"shape-fill"}"></path></svg></div>
	<div class="${"flex flex-col lg:flex-row gap-5 px-[10%] py-40"}">${each(programs2, (program, idx) => {
    return `<a${add_attribute("href", program.path, 0)}><img${add_attribute("src", program.image, 0)} alt="${"pcs"}"${add_attribute("class", `program pointer-events-none transition-transform-opacity-filter duration-1000 ${delay[idx]} ${"md:initial-stagger"}`, 0)}>
			</a>`;
  })}</div></div>`;
});
const transitions = "";
const curves = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
<div class="${"home-container"}"><div class="${"flex flex-col items-center justify-center pointer-events-none"}"><h2${add_attribute("class", `text-3xl lg:text-5xl font-bold transition-1s-in-out transform-gpu ${"md:initial-slide-up"}`, 0)}>Creating a Brighter Future
		</h2>
		<span${add_attribute("class", `w-full h-[2px] bg-accent rounded-full my-8 transition-1s-in-out transform-gpu ${"md:initial-expand"}`, 0)}></span>
		<p${add_attribute("class", `text-xl md:text-2xl transition-1s-in-out transform-gpu delay-1000 ${"md:initial-slide-up"}`, 0)}>Pateros Catholic School is more than just a school - it&#39;s a life experience. Our unique
			approach to learning enhances our students&#39; education and helps them to explore their dynamic
			and diverse community. Pateros Catholic School provides a rich learning environment that has
			helped countless students get ahead.
			</p></div></div>
<div class="${"w-full h-full bg-accent relative"}">${validate_component(Programs, "Programs").$$render($$result, {}, {}, {})}</div>
<div class="${"bg-white h-full relative px-[10%] py-40"}"><div class="${"curve-accent"}"><svg data-name="${"Layer 1"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 1200 120"}" preserveAspectRatio="${"none"}"><path d="${"M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"}" opacity="${".25"}" class="${"shape-fill"}"></path><path d="${"M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"}" opacity="${".5"}" class="${"shape-fill"}"></path><path d="${"M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"}" class="${"shape-fill"}"></path></svg></div>
	<div${add_attribute("class", `home-h2 transition-1s-in-out transform-gpu ${"md:initial-slide-up"}`, 0)}><h2 class="${"px-10"}">What&#39;s happening?</h2>
		<span${add_attribute("class", `w-full h-[2px] bg-accent rounded-full my-8 transition-1s-in-out transform-gpu ${"md:initial-expand"}`, 0)}></span></div>
	<div class="${"flex flex-col lg:flex-row gap-5 justify-center"}"><iframe src="${"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPCS.OfficialPage%2Fposts%2Fpfbid02BK1sBRu1PVZ7qiW6TknHHgQbbaT26wcX9XMyJdoMQvkAqNnRoumxfaYg1THzDRCsl&show_text=true&width=500"}" width="${"100%"}" height="${"634"}" title="${"fb-post-1"}" style="${"border:none;overflow:hidden"}" scrolling="${"no"}" frameborder="${"0"}" ${"allowfullscreen"} allow="${"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"}"></iframe>
		<iframe src="${"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPCS.OfficialPage%2Fposts%2Fpfbid09VxSPgjyjBaACaeUyR23qAPicT6bWr2jSMpmGcZkhvRnb98yuv7NGzmhFZPWALwfl&show_text=true&width=500"}" width="${"100%"}" height="${"709"}" title="${"fb-post-2"}" style="${"border:none;overflow:hidden"}" scrolling="${"no"}" frameborder="${"0"}" ${"allowfullscreen"} allow="${"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"}"></iframe>
		<iframe src="${"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FPCS.OfficialPage%2Fposts%2Fpfbid06CQJPSaPCtTXUs6AqqkqErnXVZke5owTm7RRMuNaSfzhfGm7sLVCR61guiboqrcJl&show_text=true&width=500"}" width="${"100%"}" height="${"748"}" style="${"border:none;overflow:hidden"}" title="${"fb-post-3"}" scrolling="${"no"}" frameborder="${"0"}" ${"allowfullscreen"} allow="${"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"}"></iframe></div></div>`;
});
export {
  Page as default
};
