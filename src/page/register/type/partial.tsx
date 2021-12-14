import { Subheader, Text } from "@/component";
import { BiddingTypeWrapper } from "./style";

export const BiddingType: React.FC<{
  name: string;
  starting: number;
  interval: number;
  onClick?(): void;
}> = (props) => (
  <BiddingTypeWrapper gap={1} padding={3} onClick={() => props.onClick?.()}>
    <Subheader>{props.name}</Subheader>
    <Text>
      {props.starting}원 부터 시작 | {props.interval}원 씩 오름
    </Text>
  </BiddingTypeWrapper>
);
