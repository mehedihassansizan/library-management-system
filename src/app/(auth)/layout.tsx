import { auth } from "@/auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  if (session) redirect("/");
  return (
    <main className="auth-container">
      <section className="auth-form">
        <div className="auth-box">
          <div className="flex flex-row gap-3">
            <Image
              src="/icons/logo.svg"
              alt="logo"
              width={37}
              height={37}
            ></Image>
            <h1 className="text-white font-semibold text-2xl">BookWise</h1>
          </div>
          <div>{children}</div>
        </div>
      </section>
      <section className="auth-illustration">
        <Image
          src="/images/auth-illustration.png"
          alt="auth illustration"
          height={1000}
          width={1000}
          className="size-full object-cover"
        ></Image>
      </section>
    </main>
  );
};

export default layout;
