export interface IProduct {
  imageName: string;
  name: string;
  price: number;
  category: string;
  articleNumber: number;
  description: string;
 
}

export interface IProductCard {
  product: IProduct;
}


export interface IProductGridToProductView {
  title: string;
  }