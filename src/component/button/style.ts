import { styled } from "#/stitches.config";

export const LogicalButton = styled('button', {
    width: "100%",
    backgroundColor: "$accent",
    accentBorder: true,
    color: 'White',
    padding: "3rem",
    accentShadow: true,
    variants: {
        small: {
            true: {
                padding: "2rem 3rem",
                flex: "0",
                minWidth: "fit-content"
            }
        },
        floating: {
            true: {
                position: "fixed",
                bottom: "3rem",
                width: "calc(100% - 6rem)"
            }
        }
    }
})

export const NextIconImage = styled('img', {
    width: "1.5rem"
})
