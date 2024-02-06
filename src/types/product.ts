export interface productType {
    id: number;
    categorie: string;
    name: string;
    description: string;
    src: string;
    grade: number;
    reviews: number;
    price: number;
    discount: number;
}

export interface ProductTypeStripe {
    id: string;
    price: number | null;
    name: string;
    quantity?: number | 1;
    image: string;
    description: string | null;
    currency: string;
};