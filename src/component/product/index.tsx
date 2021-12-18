import { userAtom } from "@/coil";
import { TypeBiddingProduct, TypeProduct, TypeSellingProduct } from "@/type";
import React, { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { Button, Description, Hexile, Subheader, Text, Vexile } from "..";
import { Badge, Photo, ProductWrapper } from "./style";

const isBiddingProduct = (
  product: TypeProduct
): product is TypeBiddingProduct => (product as any).bidding_latency && true;

export const ProductCore: React.FC<TypeBiddingProduct | TypeSellingProduct> = (
  props
) => {
  return (
    <Vexile gap={3}>
      <Photo src={props.photo} />
      <Hexile linebreak gap={1}>
        <Badge red>{props.category}</Badge>
        {isBiddingProduct(props) && <Badge green>{props.condition}</Badge>}
      </Hexile>
      <Vexile gap={1.5}>
        <Subheader>{props.name}</Subheader>
        <Description css={{ opacity: 0.4 }}>
          {isBiddingProduct(props)
            ? `지금 ${props.lastBid || props.start_price}원 | 호가 ${
                props.bidding_latency
              }원`
            : props.fixed_price + "원"}
        </Description>
        <Text>{props.description}</Text>
      </Vexile>
    </Vexile>
  );
};

export const Product: React.FC<
  (TypeBiddingProduct | TypeSellingProduct) & {
    onClickAction?(): void;
  }
> = (props) => {
  const me = useRecoilValue(userAtom);
  const isMyBid = useMemo(
    () => props.seller_id === me?._id,
    [props.seller_id, me?._id]
  );

  return (
    <ProductWrapper padding={3} gap={3}>
      <ProductCore {...props} />
      {props.onClickAction && (
        <Button
          onClick={props.onClickAction}
          label={
            isMyBid
              ? `경매가 완료되지 않음`
              : isBiddingProduct(props)
              ? `${props.lastBid + props.bidding_latency}원에 참여하기`
              : `${props.fixed_price}원에 구매하기`
          }
        />
      )}
    </ProductWrapper>
  );
};
