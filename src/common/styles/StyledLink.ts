import { css } from "@emotion/react";

export const styledLink1 = css`
    color: #262626;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background: #000;
    &::after{
        content: url("/images/icons/arrowRight.svg");
        position: relative;
        top: 3px;
    }
`

