import { Button, Product, Subheader, Text, Vexile } from "@/component";

export const ProductRegisterSuccess = () => {
  return (
    <Vexile x="center" gap={3} padding={3}>
      <Vexile x="center" gap={1.5}>
        <Subheader>등록이 완료됐어요!</Subheader>
        <Text>12월 27일부터 경매가 시작될 예정이에요</Text>
      </Vexile>
      <Button label="다음" nextIcon />
      <Text>아래 이미지를 캡쳐해서 홍보하세요 :)</Text>
      <Vexile css={{ width: "100%" }}>
        <Product
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
          challenge={[]}
          finished={false}
          hasSucceed={false}
          usage="사용감 있음"
          quotation={100}
        />
      </Vexile>
    </Vexile>
  );
};
