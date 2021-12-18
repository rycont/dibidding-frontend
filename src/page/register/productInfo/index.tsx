import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Input, Subheader, Vexile } from "@/component";
import { useState } from "react";

interface FormInputs {
  name: string;
  image: FileList;
}

export const EnterBiddingProductInfo: React.FC<{}> = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { register, handleSubmit } = useForm<FormInputs>();

  const onSubmit = async (value: FormInputs) => {
    var reader = new FileReader();
    reader.readAsDataURL(value.image[0]);
    await new Promise<void>((ok) =>
      reader.addEventListener("load", () => ok())
    );

    navigate("/register/description", {
      state: {
        ...state,
        ...value,
        image: (reader.result as string)?.split("base64,")[1],
      },
    });
  };

  return (
    <Vexile filly y="center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Vexile gap={3} padding={3}>
          <Subheader>상품 정보</Subheader>
          <Input label="상품 이름" register={register("name")} />
          <Input
            label="이미지"
            register={register("image")}
            type="file"
            accept="image/png, image/jpeg"
          />
          <Button label="다음" nextIcon submit />
        </Vexile>
      </form>
    </Vexile>
  );
};
