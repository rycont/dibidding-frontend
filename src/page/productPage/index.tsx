import { modalContentAtom } from "@/coil";
import {
  Button,
  Description,
  Hexile,
  ProductCore,
  Text,
  Vexile,
} from "@/component";
import React from "react";
import { useRecoilState } from "recoil";

export const ProductPage: React.FC = () => {
  const setAlert = useRecoilState(modalContentAtom)[1];

  const showDangerAlert = () => {
    setAlert({
      content: "아집가고싶다",
      title: "경고!",
      button: {
        label: "주의사항을 확인했어요 :)",
        action() {
          console.log("Good");
          setAlert(() => null);
        },
      },
    });
  };

  return (
    <Vexile padding={3} gap={3} css={{ marginBottom: "12rem" }}>
      <ProductCore
        category="농기구"
        description="콤푸레샤가 뭐냐면 하루에 백만대가 팔리는 최첨단 4차산업혁명 디바이스
        현실세계와 유비쿼터스 세계를 연결시켜주는 다리같은 존재이지요"
        name="콤푸레샤"
        photo="https://dnvefa72aowie.cloudfront.net/origin/article/202112/E6E7A6FE53523C5B1BE72CE4A49B226D733DB9E7E7436CCF482667F1427D3D4E.jpg"
        startAt={0}
        uploader={{
          banned: false,
          name: "최재현",
          uid: "2020200",
        }}
        challenge={[
          {
            created_at: 0,
            price: 1200,
          },
        ]}
        finished={false}
        hasSucceed={false}
        usage="사용감 있음"
        quotation={100}
      />
      <Vexile gap={1.5}>
        <Description>최근 입찰</Description>
        <Hexile x="space" y="center">
          <Text>3,500원</Text>
          <Description css={{ opacity: 0.3 }}>7시간 전</Description>
        </Hexile>
        <Hexile x="space" y="center">
          <Text>3,500원</Text>
          <Description css={{ opacity: 0.3 }}>7시간 전</Description>
        </Hexile>
        <Hexile x="space" y="center">
          <Text>3,500원</Text>
          <Description css={{ opacity: 0.3 }}>7시간 전</Description>
        </Hexile>
      </Vexile>
      <Button floating label="3,600원에 입찰하기" onClick={showDangerAlert} />
    </Vexile>
  );
};
