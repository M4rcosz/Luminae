import { css } from "@emotion/react";

export { css as style } from "@emotion/css";

const initialSpaceValue = "20px";

export const containerPadX = css`
   padding-left: ${initialSpaceValue};
   padding-right: ${initialSpaceValue};
`

export const containerFullScreenBg = css`
   position: relative;
   min-width: 100vw;
   right: ${initialSpaceValue};
`

