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

export type Event = {
  attributes: {
    createdAt: string,
    date: {
      end: string,
      id: number,
      start: string,
    },
    publishedAt: string,
    title: string,
    type: string,
    updatedAt: string,
  },
  id: number,
}

export type EventMap = {
  [key: string]: Event[]
}