import { CategoryModel } from "./category.model";

export interface ProductModel {
    id?: string | null;
    name: string;
    price: number;
    description: string;
    detailedDescription: string;
    images: string;
    status: boolean;
    stock: number;
    category: number;
}

export interface CreateProductDto extends Omit<ProductModel, 'id' | 'category'>{
    categoryId?: number;
}

export interface UpdateProductDto extends Partial<ProductModel>{
    categoryId?: number;
}