import { Formik, Form } from "formik";
import { Button, Input, Vexile } from "@/component";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{}}
      validate={(values) => {
        values;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        navigate("/bidding");
      }}
    >
      {({ isSubmitting }) => (
        <Vexile filly y="center">
          <Form>
            <Vexile gap={3} padding={3} filly y="center">
              <Input label="아이디" name="username" />
              <Input password label="비밀번호" name="password" />
              <Button submit label="로그인" />
            </Vexile>
          </Form>
        </Vexile>
      )}
    </Formik>
  );
};
