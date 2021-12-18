import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Button, Input, Vexile } from "@/component";
import { LoginInfo, loginWithInfo } from "@/connect";
import { getUserInfo } from "@/connect/auth/info";
import { useRecoilState } from "recoil";
import { tokenAtom, userAtom } from "@/coil";

export const Login = () => {
  const navigate = useNavigate();
  const [_, setToken] = useRecoilState(tokenAtom);
  const [__, setUser] = useRecoilState(userAtom);

  const { register, handleSubmit } = useForm();

  console.log(_);

  const onSubmit = async (values: { userID: string; password: string }) => {
    console.log(values);
    const { token } = await loginWithInfo.request(
      {},
      {
        password: values.password!,
        userID: values.userID!,
      }
    );

    console.log(token);
    setToken(token);

    const { userInfo } = await getUserInfo.request(
      {},
      {},
      {
        "x-dibidding-token": token,
      }
    );

    setUser(userInfo);
    navigate("/bidding");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Vexile gap={3} padding={3} filly y="center">
        <Input label="아이디" register={register("userID")} />
        <Input
          type="password"
          label="비밀번호"
          register={register("password")}
        />
        <Button submit label="로그인" />
      </Vexile>
    </form>
  );
};
