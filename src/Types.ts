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

// export type NavbarItem = {
//   title: string,
//   path: string,
//   data: string
// }