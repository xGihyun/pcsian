export type DropdownItem = {
  title: string,
  path: string
}

export type DropdownItems = {
  [key: string]: DropdownItem[]
}

export type Program = {
  mainText: string,
  subText: string[]
}

export type Programs = {
  title: string,
  content: Program[]
}

export type Data = {
  contents: Programs;
}

export type Chat = {
  type: string;
  text: string;
};

// export type CalendarEvent = {
//   attributes: {
//     calendars: {

//       createdAt: string,
//       date: {
//         end: string,
//         id: number,
//         start: string,
//       },
//       publishedAt: string,
//       title: string,
//       type: string,
//       updatedAt: string,
//     }
//   },
//   id: number,
// }

type CalendarDate = {
  id: number;
  start: string;
  end: string;
};

type CalendarEventAttributes = {
  title: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  date: CalendarDate;
};


type CalendarData = {
  data: CalendarEvent[];
};

type CalendarAttributes = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  calendars: CalendarData;
};

export type CalendarEvent = {
  id: number;
  attributes: CalendarEventAttributes;
};

export type Calendar = {
  id: number;
  attributes: CalendarAttributes;
};

export type EventMap = {
  [key: string]: CalendarEvent[]
}

export type LatestEvent = {
  attributes: {
    createdAt: string,
    date: string,
    description: string,
    publishedAt: string,
    source: string,
    title: string,
    updatedAt: string,
  },
  id: number,
}