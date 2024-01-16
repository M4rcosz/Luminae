"use client"

import { ThemeProvider } from "@emotion/react"

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            primary: {
                p900: string,
                p800: string,
                p700: string,
                p600: string,
            },
            secondary: {
                s900: string,
                s800: string,
                s700: string,
                s600: string,
                s500: string,
                s400: string,
            },
            footer: {
                f900: string,
                f800: string,
                f700: string,
                f600: string,
                f100: string,
            },
            base: {
                b900: string,
                b800: string,
                b700: string,
                b600: string,
                b400: string,
                b200: string,
                b100: string,
                b000: string
            },
            selectedText: string,
            notifications: string,
        },

        spacing: {
            sm: string,
            md: string
        }
    }
}

export const theme = {
    colors: {
        primary: {
            p900: "#3840A9",
            p800: "#3E60C9",
            p700: "#4172DC",
            p600: "#4484F0",
        },
        secondary: {
            s900: "#00662F",
            s800: "#008644",
            s700: "#009750",
            s600: "#00A95D",
            s500: "#00B967",
            s400: "#3DC47E",
        },
        footer: {
            f900: "#344752",
            f800: "#465D6B",
            f700: "#557181",
            f600: "#658699",
            f100: "#D1E2EB",
        },
        base: {
            b900: "#000000",
            b800: "#262626",
            b700: "#434343",
            b600: "#555555",
            b500: "#7B7B7B",
            b400: "#9D9D9D",
            b300: "#C4C4C4",
            b200: "#D9D9D9",
            b100: "#E9E9E9",
            b000: "#FFFFFF"
        },
        selectedText: "#FF7A00",
        notifications: "#FF2E00",
    },

    spacing: {
        sm: "10px",
        md: "20px"
    }
}

export const ThemeProviderComp = ({ children }: any) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default ThemeProviderComp