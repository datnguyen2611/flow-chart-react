export interface ISideBarData {
  key: number;
  label: string;
  children?: IChildrenSidebar[];
  icon?: React.ReactElement;
}
export interface IChildrenSidebar {
  key: number;
  label: string;
  icon?: React.ReactNode;
}
