import { modalContentAtom } from "@/coil";
import { useState } from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { Button, Description, Text } from "..";
import { ModalBackdrop, ModalWrapper } from "./style";

export interface ModalContent {
  content: string;
  title: string;
  button: {
    label: string;
    action(): void;
  };
}

export const useModal = () => {
  const [content, setContent] = useRecoilState(modalContentAtom);

  const element = content ? (
    <ModalBackdrop
      fillx
      filly
      x="center"
      y="center"
      onClick={() => setContent(null)}
    >
      <ModalWrapper fillx gap={2} onClick={(e) => e.preventDefault()}>
        <Description>{content.title}</Description>
        <Text>{content.content}</Text>
        <Button
          onClick={content.button.action}
          label={content.button.label}
          small
        />
      </ModalWrapper>
    </ModalBackdrop>
  ) : (
    <>
      <></>
    </>
  );

  return {
    element,
  };
};
