import { styled } from "#/stitches.config";
import { Vexile } from "..";

export const ModalBackdrop = styled(Vexile, {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    position: 'fixed',
    zIndex: 1,
    padding: '3rem'
})

export const ModalWrapper = styled(Vexile, {
    accentShadow: true,
    accentBorder: true,
    backgroundColor: 'white',
    padding: '3rem'
})
