"use client";

import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import SpinnerMini from "@/ui/SpinnerMini";

const schema = yup.object({
  name: yup
    .string()
    .min(5, "نام و نام خوانوادگی نامعتبر")
    .max(30)
    .required("نام و نام خوانوادگی خود را وارد کنید "),
  email: yup
    .string()
    .email("ایمیل نامعتبر می‌باشد")
    .required("ایمیل خود را وارد کنید"),
  password: yup.string().required("کلمه عبور خود را وارد کنید"),
});

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const { signup } = useAuth();

  const onSubmit = async (values) => {
    await signup(values);
  };

  return (
    <div className="group relative p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-primary-600 dark:hover:border-primary-600 transition-all duration-300">
      <h1>ثبت نام</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField
          label="نام و نام خوانوادگی"
          name="name"
          register={register}
          isRequired
          errors={errors}
        />
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
      <Link href="/signin" className="text-secondary-500 mt-6 text-center">
        ورود
      </Link>
    </div>
  );
}

export default Signup;
