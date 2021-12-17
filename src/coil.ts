import { atom } from "recoil";
import { ModalContent } from "./component";
import { TypeUser } from "./type";

export const modalContentAtom = atom<ModalContent | null>({
    key: "modal_content",
    default: null,
});

export const tokenAtom = atom<string | null>({
    key: "token",
    default: null
})

export const userAtom = atom<TypeUser | null>({
    key: "user",
    default: null
})
