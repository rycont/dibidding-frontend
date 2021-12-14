import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { Button, Input, Subheader, Vexile } from "@/component";

export const EnterBiddingProductInfo: React.FC<{}> = () => {
  const navigate = useNavigate();
  return (
    <Vexile filly y="center">
      <Formik
        initialValues={{}}
        validate={() => {}}
        onSubmit={(values, { setSubmitting }) => {
          navigate("/register/description");
          setSubmitting(false);
        }}
      >
        <Form>
          <Vexile gap={3} padding={3} y="center" filly>
            <Subheader>상품 정보</Subheader>
            <Input label="상품 이름" name="name" />
            <Input
              label="이미지"
              name="image"
              type="file"
              accept="image/png, image/jpeg"
            />
            <Button label="다음" nextIcon submit />
          </Vexile>
        </Form>
      </Formik>
    </Vexile>
  );
};
