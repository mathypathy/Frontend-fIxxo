import React, { createContext } from 'react';
import { IProduct } from '../Interfaces/Product';

// export const ProductContext = createContext<IProduct | null>(null);
export const ProductContext = createContext({} as IProduct[]);