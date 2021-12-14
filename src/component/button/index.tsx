import { Next } from "@/asset";
import { Description, Hexile, Vexile } from "..";
import { LogicalButton, NextIconImage } from "./style";

export const Button: React.FC<{
  label: string;
  nextIcon?: boolean;
  submit?: boolean;
  small?: boolean;
  css?: Record<string, string | number>;
  onClick?(): void;
  floating?: boolean;
}> = (props) => {
  return (
    <LogicalButton
      type={props.submit ? "submit" : undefined}
      small={props.small}
      css={props.css}
      onClick={props.onClick}
      floating={props.floating}
    >
      <Hexile x="center" y="center" gap={2}>
        <Description>{props.label}</Description>
        {props.nextIcon && <NextIconImage src={Next} />}
      </Hexile>
    </LogicalButton>
  );
};
