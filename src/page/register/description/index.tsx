import { modalContentAtom } from "@/coil";
import { Button, Input, Subheader, Vexile } from "@/component";
import { addNewBidding } from "@/connect";
import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

interface FormInputs {
  description: string;
}

export const ProductDescription: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { register, handleSubmit } = useForm<FormInputs>();
  const setAlert = useRecoilState(modalContentAtom)[1];

  const onSubmit = async (value: FormInputs) => {
    const registeringInfo = {
      ...(state as {
        policy: {
          interval: number;
          starting: number;
        };
        name: string;
        image: string;
      }),
      ...value,
    };

    try {
      const addResult = await addNewBidding.request(
        {},
        {
          bidding_latency: registeringInfo.policy.interval,
          category: "일반",
          condition: "좋음",
          description: registeringInfo.description,
          name: registeringInfo.name,
          photos: [registeringInfo.image],
          start_price: registeringInfo.policy.starting,
        }
      );

      navigate("/register/success", {
        state: addResult.product,
      });
    } catch (e) {
      console.log(e);
      setAlert({
        content: "상품 등록에 실패했어요",
        title: "오류!",
        button: {
          label: "확인",
          action() {
            console.log("Good");
            setAlert(() => null);
          },
        },
      });
    }
  };

  return (
    <Vexile y="center" filly>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Vexile gap={3} padding={3} y="center" filly>
          <Subheader>더 자세히 알고 싶어요 :)</Subheader>
          <Input
            label="상품 설명"
            name="description"
            as="textarea"
            css={{ height: "30vh", maxHeight: "100%" }}
            register={register("description")}
          />
          <Button label="완료!" nextIcon submit />
        </Vexile>
      </form>
    </Vexile>
  );
};
