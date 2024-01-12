import { PriceModel } from "./price.model";

export interface BookModel{
    id: number;
    title: string;
    img: string
    totalPages: number;
    author: string;
    price: PriceModel
}