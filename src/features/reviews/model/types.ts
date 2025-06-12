export type Content = {
  root: Root2;
};

type Root2 = {
  type: string;
  format: string;
  indent: number;
  version: number;
  children: Children[];
  direction: string;
  listType?: string;
  fields?: {
    url?: string;
    newTab?: boolean;
  };
};

type Children = {
  type: string;
  format: number;
  indent: number;
  version: number;
  children: Children2[];
  direction?: string;
  textStyle?: string;
  textFormat?: number;
  tag?: string;
  start?: number;
  text?: string;
  listType?: string;
};

type Children2 = {
  mode?: string;
  text?: string;
  type: string;
  style?: string;
  detail?: number;
  format: number;
  version: number;
  value?: number;
  indent?: number;
  children?: Children3[];
  direction?: string;
};

type Children3 = {
  mode: string;
  text: string;
  type: string;
  style: string;
  detail: number;
  format: number;
  version: number;
};
