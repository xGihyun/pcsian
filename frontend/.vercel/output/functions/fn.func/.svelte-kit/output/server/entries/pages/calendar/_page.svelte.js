import { c as create_ssr_component, a as add_attribute, b as escape, v as validate_component, e as each } from "../../../chunks/index3.js";
import "../../../chunks/LoadingChat.svelte_svelte_type_style_lang.js";
import { startOfToday, format, parse, eachDayOfInterval, startOfWeek, endOfWeek, endOfMonth, getDay, isToday, isSameMonth, isEqual } from "date-fns";
const ChevronRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"currentColor"}"${add_attribute("class", `bi bi-chevron-right ${style}`, 0)} viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}"></path></svg>`;
});
const ChevronLeft = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"currentColor"}" class="${"bi bi-chevron-left $" + escape(style, true)}" viewBox="${"0 0 16 16"}"><path fill-rule="${"evenodd"}" d="${"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"}"></path></svg>`;
});
const Calendar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { events } = $$props;
  let today = startOfToday();
  let currentMonth = format(today, "MMM-yyyy");
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  let days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth))
  });
  function getDates(startDate, endDate) {
    const dates = [];
    let currentDate = new Date(startDate);
    let end = new Date(endDate);
    while (currentDate <= end) {
      dates.push(format(new Date(currentDate), "yyyy-MM-dd"));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  }
  const eventsByDate = /* @__PURE__ */ new Map();
  events.forEach((event) => {
    const dates = getDates(event.attributes.date.start, event.attributes.date.end);
    dates.forEach((date) => {
      if (!eventsByDate.has(date)) {
        eventsByDate.set(date, []);
      }
      eventsByDate.get(date)?.push(event);
    });
  });
  let clickedDay = today;
  let clickedDayFormat;
  function handleDateClick(date) {
    const event = eventsByDate.get(date);
    return event;
  }
  const colStartClasses = [
    "",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7"
  ];
  if ($$props.events === void 0 && $$bindings.events && events !== void 0)
    $$bindings.events(events);
  return `
<div class="${"mx-auto max-w-md py-10 px-4 md:max-w-5xl"}">
	<div class="${"flex items-center"}"><h2 class="${"flex-auto text-2xl text-black"}">${escape(format(firstDayCurrentMonth, "MMMM yyyy"))}</h2>
		<button type="${"button"}" class="${"-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"}">${validate_component(ChevronLeft, "ChevronLeft").$$render($$result, { style: "h-5 w-5 cursor-pointer" }, {}, {})}</button>
		<button type="${"button"}" class="${"-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"}">${validate_component(ChevronRight, "ChevronRight").$$render($$result, { style: "h-5 w-5 cursor-pointer" }, {}, {})}</button></div>
	
	<div class="${"mt-10 grid grid-cols-7 text-center text-xs leading-6 text-black md:text-xl"}"><div>Sun</div>
		<div>Mon</div>
		<div>Tue</div>
		<div>Wed</div>
		<div>Thu</div>
		<div>Fri</div>
		<div>Sat</div></div>
	
	<div class="${"mt-2 grid h-full grid-cols-7 text-sm"}">${each(days, (day, dayIdx) => {
    return `${eventsByDate.has(format(day, "yyyy-MM-dd")) ? `${each(eventsByDate.get(format(day, "yyyy-MM-dd")) || [], (event, eventIdx) => {
      return `<button${add_attribute("class", `relative h-full border-t-[1px] border-opacity-50 bg-orange-500 bg-opacity-20 text-xs transition-all duration-300 hover:bg-orange-200 md:min-h-[100px] md:bg-white md:text-xl ${dayIdx === 0 && colStartClasses[getDay(day)]} `, 0)}><div class="${"flex h-full flex-col items-center md:items-start"}">
							<div${add_attribute(
        "class",
        `m-2 flex h-4 w-4 items-center justify-center rounded-full p-3 md:h-8 md:w-8 
								${isToday(day) ? "bg-amber-500 text-white" : ""} ${isSameMonth(day, firstDayCurrentMonth) ? "text-neutral-900" : "text-neutral-400"}`,
        0
      )}><time${add_attribute("datetime", format(day, "yyyy-MM-dd"), 0)}>${escape(format(day, "d"))}
								</time></div>
							
							${isEqual(day, parse(getDates(event.attributes.date.start, event.attributes.date.end)[0], "yyyy-MM-dd", new Date())) || "Sunday" === format(day, "EEEE") || isEqual(day, days[0]) ? `<div${add_attribute(
        "class",
        `mt-1 hidden h-full border-l-8 border-orange-500 bg-neutral-300 px-1 md:block ${getDates(event.attributes.date.start, event.attributes.date.end).length === 1 || "Sunday" === format(day, "EEEE") ? "w-[95%] rounded-r-md" : "w-full"}`,
        0
      )}><span class="${"inline-block w-full overflow-hidden text-ellipsis text-start text-lg"}">${escape(event.attributes.title)}</span>
								</div>` : `<div${add_attribute(
        "class",
        `mt-1 hidden h-full bg-neutral-300 md:block ${isEqual(day, parse(getDates(event.attributes.date.start, event.attributes.date.end)[getDates(event.attributes.date.start, event.attributes.date.end).length - 1], "yyyy-MM-dd", new Date())) || "Saturday" === format(day, "EEEE") ? "w-[95%] rounded-r-md" : "w-full"}`,
        0
      )}><span class="${"invisible inline-block w-full overflow-hidden text-ellipsis text-lg"}">${escape(event.attributes.title)}</span>
								</div>`}</div>
					</button>`;
    })}` : `<button${add_attribute("class", `relative h-full border-t-[1px] border-opacity-50 text-xs transition-all duration-300 hover:bg-neutral-200 md:min-h-[100px] md:text-xl ${dayIdx === 0 && colStartClasses[getDay(day)]} `, 0)}><div class="${"flex h-full flex-col items-center md:items-start"}"><div${add_attribute(
      "class",
      `m-2 flex h-4 w-4 items-center justify-center rounded-full p-3 md:h-8 md:w-8 
						${isToday(day) ? "bg-amber-500 text-white" : ""} ${isSameMonth(day, firstDayCurrentMonth) ? "text-neutral-900" : "text-neutral-400"}`,
      0
    )}><time${add_attribute("datetime", format(day, "yyyy-MM-dd"), 0)}>${escape(format(day, "d"))}</time>
						</div></div>
				</button>`}`;
  })}</div></div>


<div class="${"mx-auto flex h-full min-h-[14rem] max-w-md flex-col gap-4 py-10 px-4 md:min-h-[20rem] md:max-w-5xl"}"><h2 class="${"font-torus-semibold text-center text-2xl md:text-5xl"}">Events for ${escape(format(clickedDay, "MMMM d, yyyy"))}</h2>
	${handleDateClick(clickedDayFormat) ? `<div class="${"flex flex-row items-baseline"}"><h2 class="${"font-torus-semibold text-2xl md:text-5xl"}">What:</h2>
			<span class="${"pl-4 text-xl md:text-4xl"}">${escape(handleDateClick(clickedDayFormat)[0].attributes.title)}</span></div>
		<div class="${"flex flex-row items-baseline"}"><h2 class="${"font-torus-semibold text-2xl md:text-5xl"}">When:</h2>
			<span class="${"pl-4 text-xl md:text-4xl"}">${escape(handleDateClick(clickedDayFormat)[0].attributes.date.start)}</span>
			<span class="${"pl-4 text-xl md:text-4xl"}">${escape(handleDateClick(clickedDayFormat)[0].attributes.date.end)}</span></div>` : `<span class="${"text-center"}">No events for ${escape(format(clickedDay, "MMMM d, yyyy"))}</span>`}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const gradeSchool = data.gradeSchool.data[0].attributes.calendars.data;
  const juniorHigh = data.juniorHigh.data[0].attributes.calendars.data;
  const seniorHigh = data.seniorHigh.data[0].attributes.calendars.data;
  let currentCalendar = "Senior High";
  const navigationItems = [
    {
      name: "Grade School",
      calendar: gradeSchool
    },
    {
      name: "Junior High",
      calendar: juniorHigh
    },
    {
      name: "Senior High",
      calendar: seniorHigh
    }
  ];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<nav class="${"flex w-full items-center justify-center py-10 px-4"}"><ul class="${"flex h-full flex-row gap-8 text-xl"}">${each(navigationItems, (item, idx) => {
    return `<li${add_attribute(
      "class",
      `${currentCalendar === item.name ? "font-bold" : "font-normal"}`,
      0
    )}><button type="${"button"}">${escape(item.name)}</button>
			</li>`;
  })}</ul></nav>

${`${`${validate_component(Calendar, "Calendar").$$render($$result, { events: seniorHigh }, {}, {})}`}`}

`;
});
export {
  Page as default
};
