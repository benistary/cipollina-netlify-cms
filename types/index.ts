export type Homepage = {
  category: {
    label: string;
    description: string;
    products: Products;
  }[];
};

export type Products = {
  label: string;
  weight?: number;
  description: string;
  price: number;
  number: number;
}[];
