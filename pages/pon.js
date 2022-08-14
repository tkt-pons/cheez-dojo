import { css } from "@emotion/react";
import { colors } from "../constants/colors";
import { marginBottom } from "../styles/marginBottom";
import { Header } from "../components/Header";
import { MainVisual } from "../components/MainVisual";

const style = css`
    background-color: ${colors.primary.main};
`;

export default function Pon() {
    return(
        <div>
            <Header />
            <MainVisual />
        </div>
    );
};
