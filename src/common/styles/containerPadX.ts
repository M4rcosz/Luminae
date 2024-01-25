import { css } from "@emotion/react";

export { css as style } from "@emotion/css";

const initialSpaceValue = "20px";
const tabletSpaceValue = "60px";

export const containerPadX = css`
   padding-left: ${initialSpaceValue};
   padding-right: ${initialSpaceValue};

   @media screen and (min-width: 768px) {
      padding-left: ${tabletSpaceValue};
   padding-right: ${tabletSpaceValue};
   }
`

export const containerFullScreenBg = css`
   position: relative;
   min-width: 100vw;
   right: ${initialSpaceValue};
   
   @media screen and (min-width: 768px) {
      right: ${tabletSpaceValue};
   }
`

