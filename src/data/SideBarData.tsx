import { ISideBarData } from "types/sideBarData";
import { IconReact, IconBxlJava } from "assets/svg/icon";

export const SideBarData: ISideBarData[] = [
  {
    key: 1,
    label: "react",
    icon: <IconReact />,
    children: [
      {
        key: 1,
        label: "content1",
      },
      {
        key: 2,
        label: "content2",
      },
    ],
  },
  {
    key: 2,
    label: "Java",
    icon: <IconBxlJava />,
    children: [
      {
        key: 3,
        label: "content1",
      },
      {
        key: 4,
        label: "content2",
      },
    ],
  },
];
