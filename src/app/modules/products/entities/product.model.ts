import { CategoryModel } from "./category.model";

export interface ProductModel {
    id_product?: string | null;
    name_product: string;
    price_product: number;
    description_product: string;
    detailed_description_product: string;
    images_product: string;
    status_product: boolean;
    stock_product: number;
    category: number;
}

export interface CreateProductDto extends Omit<ProductModel, 'id_product' | 'category'>{
    categoryId?: number;
}

export interface UpdateProductDto extends Partial<ProductModel>{
    categoryId?: number;
}