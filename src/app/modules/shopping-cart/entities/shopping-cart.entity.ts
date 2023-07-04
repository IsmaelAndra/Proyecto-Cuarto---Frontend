export interface ShopppingCartModel {
    id_cart: string;
    name_cart: string;
    images_cart: string;
    price_cart: number;
    amount_cart: number;
    subtotal_cart: number;
}

export interface ShopppingCartModelTotals {
    subtotal: number;
    iva: number;
    total: number;
    cantidadTotal: number;
}