import { Formik, Form, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { Button, Input, Vexile } from "@/component";
import { LoginInfo, loginWithInfo } from "@/connect";
import { getUserInfo } from "@/connect/auth/info";
import { useRecoilState } from "recoil";
import { tokenAtom, userAtom } from "@/coil";

const formValidate = Yup.object().shape({
  password: Yup.string().required("비밀번호를 입력해주세요"),
  userID: Yup.string().required("ID를 입력해주세요"),
});

export const Login = () => {
  const navigate = useNavigate();
  const [_, setToken] = useRecoilState(tokenAtom);
  const [__, setUser] = useRecoilState(userAtom);

  return (
    <Formik<Partial<LoginInfo>>
      initialValues={{}}
      validationSchema={formValidate}
      onSubmit={async (values, { setSubmitting }) => {
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
      }}
    >
      {({ isSubmitting, touched, errors }) => (
        <Vexile filly y="center">
          <Form>
            <Vexile gap={3} padding={3} filly y="center">
              <Input
                label="아이디"
                name="userID"
                error={touched.userID && errors.userID && errors.userID}
              />
              <Input
                type="password"
                label="비밀번호"
                name="password"
                error={touched.password && errors.password && errors.password}
              />
              <Button submit label="로그인" />
            </Vexile>
          </Form>
        </Vexile>
      )}
    </Formik>
  );
};
