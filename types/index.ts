export type Pizza = {
  pizza: {
    label: string;
    description: string;
    products: PizzaProducts;
  }[];
};

export type PizzaProducts = {
  label: string;
  weight?: number;
  description: string;
  price: number;
  number: number;
}[];

export type Posuchy = {
  label: string;
  weight: number;
  products: {
    label: string;
    price: number;
  }[];
};

export type Panuozzo = {
  panuozzo: {
    label: string;
    weight?: number;
    description: string;
    price: number;
  }[];
};

export type Sticks = {
  label: string;
  pieces: number;
  products: {
    label: string;
    price: number;
  }[];
};

export type Additions = {
  additions: {
    label: string;
    price: number;
  }[];
};
