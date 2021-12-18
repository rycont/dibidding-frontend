import { TypeBiddingProduct, TypeProduct, TypeSellingProduct } from "@/type";
import React from "react";
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
  return (
    <ProductWrapper padding={3} gap={3}>
      <ProductCore {...props} />
      {props.onClickAction && (
        <Button onClick={props.onClickAction} label="경매 참여하기" />
      )}
    </ProductWrapper>
  );
};
