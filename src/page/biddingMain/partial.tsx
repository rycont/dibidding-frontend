import { Description, Text } from "@/component";
import { WaitingBidProductWrapper } from "./style";

export const WaitingBidProduct: React.FC = () => (
  <WaitingBidProductWrapper y="center" x="space">
    <Description>마더텅 2021 문학 기출</Description>
    <Text>1일 뒤</Text>
  </WaitingBidProductWrapper>
);
