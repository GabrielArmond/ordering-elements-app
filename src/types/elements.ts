export type ElementsSection = {
  id: string;
  type: "sortable";
  title: string;
  items: ElementItem[];
};

export type ElementItem = LinkItem | LinkWithCheckboxesItem | LinkWithColorsItem | LinkWithProductItem | LinkWithImageItem | LinkWithCardItem | SectionItem;

export interface Link {
  type: "link";
  link: string;
  text: string;
}

export interface LinkItem extends Link {
  value: string;
};

export interface LinkWithCheckboxesItem extends Link {
  items: TaskItem[];
};

export type TaskItem = {
  type: "checkbox";
  value: string;
  text: string;
  subText: string;
};

export interface LinkWithColorsItem extends Link {
  items: ColorItem[];
};

export type ColorItem = {
  type: "color";
  value: string;
  text: string;
};

export interface SectionItem extends Link {
  items: (TaskItem | ColorItem)[];
};

export interface LinkWithProductItem extends Link {
  product: {
    name: string;
    description: string;
  };
};

export interface LinkWithImageItem extends Link {
  src: string;
};

type Button = {
  action: string;
  text: string;
  style: string;
}

export interface LinkWithCardItem extends Link {
  subText: string;
  src: string;
  alt: string;
  buttons: Array<Button>
}
