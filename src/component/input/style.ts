import { styled } from "#/stitches.config";
import { Field } from 'formik';

export const LogicalInput = styled(Field, {
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
        // border: "1px solid rgba(0, 0, 0, 0.1)",
        // background: "#FFFFFF",
        // padding: "1rem",
        // borderRadius: "1rem",
        // marginRight: "1rem",
        // fontFamily: "NEXON Lv1 Gothic OTF",
        // fontSize: "1.5rem"
        display: "none"
    }
})
