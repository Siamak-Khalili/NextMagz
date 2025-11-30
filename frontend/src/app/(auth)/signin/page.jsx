"use client";

import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import SpinnerMini from "@/ui/SpinnerMini";

const schema = yup.object({
  email: yup
    .string()
    .email("ایمیل نامعتبر می‌باشد")
    .required("ایمیل خود را وارد کنید"),
  password: yup.string().required("کلمه عبور خود را وارد کنید"),
});

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const { signin } = useAuth();

  const onSubmit = async (values) => {
    await signin(values);
  };

  return (
    <div className="group relative p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-primary-600 dark:hover:border-primary-600 transition-all duration-300">
      <h1>ورود</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField
          label="ایمیل"
          name="email"
          register={register}
          dir="ltr"
          isRequired
          errors={errors}
        />
        <RHFTextField
          label="کلمه عبور"
          name="password"
          register={register}
          type="password"
          dir="ltr"
          isRequired
          errors={errors}
        />

        <div className="flex justify-center mt-8">
          {isLoading ? (
            <SpinnerMini />
          ) : (
            <Button type="submit" variant="primary" className="w-full">
              تایید
            </Button>
          )}
        </div>
      </form>
      <Link href="/signup" className="text-secondary-500 mt-6 text-center">
        ثبت نام
      </Link>
    </div>
  );
}

export default Signin;
