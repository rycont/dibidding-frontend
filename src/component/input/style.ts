import { styled } from "#/stitches.config";
import { Description } from "..";

export const LogicalInput = styled('input', {
    padding: "3rem",
    outline: 'none',
    fontSize: "2rem",
    accentBorder: true,
    fontFamily: "NEXON Lv1 Gothic OTF",
    background: "rgba(0, 0, 0, 0.02)",
    "&::placeholder": {
        color: "black",
        opacity: 0.3
    },
    "&[type=file]": {
        color: "rgba(0, 0, 0, 0.3)",
    },
    "&::file-selector-button": {
        display: "none"
    }
})

export const ErrorText = styled(Description, {
    color: "#B91919"
})
