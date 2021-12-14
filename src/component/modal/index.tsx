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
  const content = useRecoilValue(modalContentAtom);

  const element = content ? (
    <ModalBackdrop fillx filly x="center" y="center">
      <ModalWrapper fillx gap={2}>
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
