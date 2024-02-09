import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProductTypeStripe } from "./types/product";

interface PopUpState {
    isPopUp: boolean;
    popUpMessage: string;
    activePopUp: (message: string) => void;
    desactivePopUp: () => void;
}

export const useStorePopUp = create<PopUpState>()(set => ({
    isPopUp: false,
    popUpMessage: "Sucesso!",
    activePopUp: (message: string) => set(state => ({
        isPopUp: true,
        popUpMessage: message
    })),
    desactivePopUp: () => set(state => ({
        isPopUp: false
    }))
}))

interface SearchingState {
    // searchingInputValue: string;
    categorySelected: string;
    // setSearchValue: (value: string) => void;
    setCategorySelected: (value: string) => void;
}

export const useStoreSearching = create<SearchingState>()(set => ({
    // searchingInputValue: "",
    categorySelected: "all categories",
    // setSearchValue: (value: string) => set(state => ({
    //     searchingInputValue: value
    // })),
    setCategorySelected: (value: string) => set(state => ({
        categorySelected: value
    }))
}))

interface CartState {
    cart: ProductTypeStripe[];
    isCartOpen: boolean;
    toogleCart: () => void;
    addCart: (product: ProductTypeStripe) => void;
    removeCart: (product: ProductTypeStripe) => void;
    // incrementProduct: (product: ProductTypeStripe) => void;
    // decrementProduct: (product: ProductTypeStripe) => void;
}

export const useStoreCart = create<CartState>()(
    persist(
        set => ({
            cart: [],
            isCartOpen: false,
            toogleCart: () => set(state => ({
                isCartOpen: !state.isCartOpen
            })),
            addCart: (product) => set(state => {
                let valor;
                const isInCart = state.cart.find(item => item.id === product.id);

                if (isInCart) valor = state.cart;
                else valor = [...state.cart, product];

                return { cart: valor }
            }),
            removeCart: (product) => set(state => ({
                cart: [...state.cart.filter(item => item.id !== product.id)],
            })),
            // incrementProduct: (product) => set(state => {

            // })
        }),
        {
            name: "cart"
        }
    )
)