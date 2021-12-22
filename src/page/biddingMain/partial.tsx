import { Description, Text } from "@/component";
import { TypeBiddingProduct } from "@/type";
import { useMemo } from "react";
import { UpcomingBidProductWrapper } from "./style";

export const UpcomingBidProduct: React.FC<TypeBiddingProduct> = (props) => {
  const startsAt = useMemo(
    () => props && new Date(props.start_datetime),
    [props.start_datetime]
  );
  return (
    <UpcomingBidProductWrapper y="center" x="space">
      <Description>{props.name}</Description>
      {startsAt && <Text>
        {startsAt.getMonth() + 1}월 {startsAt.getDate()}일
      </Text>}
    </UpcomingBidProductWrapper>
  );
};
