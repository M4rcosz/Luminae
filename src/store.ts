import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PopUpState {
    isOpen: boolean;
    message: string;
    activePopUp: (message: string) => void;
    desactivePopUp: () => void;
}

export const usePopUpStore = create<PopUpState>()(
    persist(
        set => ({
            isOpen: false,
            message: "Sucesso!",
            activePopUp: (message: string) => set(state => ({
                isOpen: true,
                message: message
            })),
            desactivePopUp: () => set(state => ({
                isOpen: false
            }))
        }),
        {
            name: "popUp"
        }
    )
)

interface SearchingState {
    inputValue: string;
    categorySelected: string;
    setSearchValue: (value: string) => void;
    setCategorySelected: (value: string) => void;
}

export const useSearchingStore = create<SearchingState>()(
    persist(
        set => ({
            inputValue: "",
            categorySelected: "all categories",
            setSearchValue: (value: string) => set(state => ({
                inputValue: value
            })),
            setCategorySelected: (value: string) => set(state => ({
                categorySelected: value
            }))
        }),
        {
            name: "searchingTasks"
        }
    )
)