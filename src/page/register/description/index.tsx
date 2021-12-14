import { Button, Input, Subheader, Vexile } from "@/component";
import { Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

export const ProductDescription: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Vexile filly y="center">
      <Formik
        initialValues={{}}
        validate={() => {}}
        onSubmit={(values, { setSubmitting }) => {
          navigate("/register/success");
          setSubmitting(false);
        }}
      >
        <Form>
          <Vexile gap={3} padding={3} y="center" filly>
            <Subheader>더 자세히 알고 싶어요 :)</Subheader>
            <Input
              label="상품 설명"
              name="name"
              as="textarea"
              css={{ height: "30vh", maxHeight: "100%" }}
            />
            <Button label="다음" nextIcon submit />
          </Vexile>
        </Form>
      </Formik>
    </Vexile>
  );
};
