import { HTMLAttributes } from "react";
import { Description, Vexile } from "..";
import { ErrorText, LogicalInput } from "./style";

export const Input: React.FC<
  React.HTMLAttributes<HTMLInputElement> & {
    label: string;
    name?: string;
    type?: string;
    accept?: string;
    as?: "textarea" | "select";
    css?: Record<string, string | number>;
    error?: string | boolean;
  }
> = (props) => {
  return (
    <Vexile gap={1.5}>
      <Description>{props.label}</Description>
      <LogicalInput
        name={props.name}
        type={props.type}
        placeholder={props.placeholder || props.label.을를 + " 입력하세요"}
        as={props.as}
        css={props.css}
      />
      {props.error && <ErrorText>{props.error}</ErrorText>}
    </Vexile>
  );
};
