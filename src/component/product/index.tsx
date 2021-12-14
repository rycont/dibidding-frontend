import { TypeBiddingProduct, TypeProduct, TypeSellingProduct } from "@/type";
import React from "react";
import { Button, Description, Hexile, Subheader, Text, Vexile } from "..";
import { Badge, Photo, ProductWrapper } from "./style";

const isBiddingProduct = (
  product: TypeProduct
): product is TypeBiddingProduct => (product as any).quotation && true;

export const ProductCore: React.FC<TypeBiddingProduct | TypeSellingProduct> = (
  props
) => {
  return (
    <Vexile gap={3}>
      <Photo src={props.photo} />
      <Hexile linebreak gap={1}>
        <Badge red>{props.name}</Badge>
        {isBiddingProduct(props) && <Badge green>{props.usage}</Badge>}
      </Hexile>
      <Vexile gap={1.5}>
        <Subheader>{props.name}</Subheader>
        <Description css={{ opacity: 0.4 }}>
          {isBiddingProduct(props)
            ? props.challenge[0]
              ? `지금 ${props.challenge[0].price}원 | 호가 ${props.quotation}원`
              : `시작가 ${props.startAt}원 | 호가 ${props.quotation}원`
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
