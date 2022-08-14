import { css } from "@emotion/react";
import { colors } from "../constants/colors";

const style = css`
    background-color: ${colors.primary.main};
`;

export default function Pon() {
    return(<p css={style}>あけましておめでとう</p>)
}