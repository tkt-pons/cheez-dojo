import { css } from "@emotion/react";
import Image from 'next/image'


const styles = {
    container: css`
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,
    list: css`
        padding: 0;
        display: flex;
        justify-content: space-between;

        li{
            &:not(:last-child) {
                margin-right: 8px;
            }
        }
    `,
};

export const Header = () => (
    <header css={styles.container}>
        <div>
            <Image
                src="/logo.png"
                alt="ロゴ"
                width={116}
                height={49}
                layout="intrinsic"
            />
        </div>
        <nav>
            <ul css={styles.list}>
                <li>profile</li>
                <li>work</li>
            </ul>
        </nav>
    </header>
);