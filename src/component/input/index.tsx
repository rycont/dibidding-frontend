import { HTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Description, Vexile } from "..";
import { ErrorText, LogicalInput } from "./style";

export const Input: React.FC<
  React.HTMLAttributes<HTMLInputElement> & {
    label: string;
    name?: string;
    type?: string;
    accept?: string;
    css?: Record<string, string | number>;
    error?: string | boolean;
    as?: "textarea" | string;
    register?: UseFormRegisterReturn;
  }
> = (props) => {
  return (
    <Vexile gap={1.5}>
      <Description>{props.label}</Description>
      <LogicalInput
        {...props}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder || props.label.을를 + " 입력하세요"}
        css={props.css}
        {...props.register}
      />
      {props.error && <ErrorText>{props.error}</ErrorText>}
    </Vexile>
  );
};
