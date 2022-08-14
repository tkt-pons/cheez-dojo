import { css } from "@emotion/react";
import { colors } from "../constants/colors";


const styles = {
    container: css`
    background-image: url("/mainvisual.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: calc(100vh - 90px);
    display: flex;
    justify-content: center;
    align-items: center;
`,
text: css`
    color: ${colors.primary.dark};
`,
};

export const MainVisual = () => (
    <div css={styles.container}>
        <h1 css={styles.text}>PonPonPon</h1>
    </div>
);