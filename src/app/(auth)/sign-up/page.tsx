"use client";
import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validations";

const page = () => (
  <AuthForm
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{
      fullName: "",
      email: "",
      password: "",
      universityId: 0,
      universityCard: "",
    }}
    onSubmit={() => {}}
  />
);

export default page;
