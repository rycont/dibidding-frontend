import { styled } from "#/stitches.config";
import { Description, Vexile } from "..";

export const ProductWrapper = styled(Vexile, {
    accentBorder: true,
    accentShadow: true
})

export const Photo = styled('img', {
    aspectRatio: 1,
    objectFit: 'cover',
    borderRadius: "1.5rem"
})

export const Badge = styled(Description, {
    accentBorder: true,
    padding: '1rem 2rem',
    borderRadius: "4rem",
    color: "white",
    variants: {
        red: {
            true: {
                backgroundColor: "#CC2626"
            }
        },
        green: {
            true: {
                backgroundColor: "#15B58E"
            }
        }
    }
})

export const PriceTag = styled(Description, {
    opacity: 0.4
})
