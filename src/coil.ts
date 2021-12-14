import { atom } from "recoil";
import { ModalContent } from "./component";

export const modalContentAtom = atom<ModalContent | null>({
    key: "modal_content",
    default: null,
});
