import { Button, Description, Subheader, Text, Vexile } from "@/component";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Caution } from "./style";

export const Register: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Vexile fillx filly y="center" padding={3} gap={3}>
      <Subheader>내 물건 올리기</Subheader>
      <Caution padding={3} gap={1.5}>
        <Description>이런 물건은 올릴 수 없어요</Description>
        <ul>
          <li>
            <Text>수제 식품</Text>
          </li>
          <li>
            <Text>미성년자에게 판매가 금지된 품목</Text>
          </li>
          <li>
            <Text>상장, 메달</Text>
          </li>
        </ul>
      </Caution>
      <Button
        nextIcon
        label="경매 금지 품목을 확인했습니다"
        onClick={() => navigate("/register/type")}
      />
    </Vexile>
  );
};

export * from "./type";
export * from "./productInfo";
export * from "./description";
export * from "./success";
