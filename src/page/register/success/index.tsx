import { Button, Product, Subheader, Text, Vexile } from "@/component";
import { TypeBiddingProduct, TypeProduct } from "@/type";
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const ProductRegisterSuccess = () => {
  const { state } = useLocation() as { state: TypeBiddingProduct };
  const navigate = useNavigate()
  const startDate = useMemo(() => new Date(state.start_datetime), [state]);
  return (
    <Vexile x="center" gap={3} padding={3}>
      <Vexile x="center" gap={1.5}>
        <Subheader>등록이 완료됐어요!</Subheader>
        <Text>
          {startDate.getMonth() + 1}월 {startDate.getDate()}일 부터 경매가
          시작될 예정이에요
        </Text>
      </Vexile>
      <Button label="다음" nextIcon onClick={() => navigate('/bidding')} />
      <Text>아래 이미지를 캡쳐해서 홍보하세요 :)</Text>
      <Vexile css={{ width: "100%" }}>
        <Product {...state} />
      </Vexile>
    </Vexile>
  );
};
