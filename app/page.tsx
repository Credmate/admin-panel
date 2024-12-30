"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

//* components
import CredInput from "@/components/atoms/CredInput";
import CredButton from "@/components/atoms/CredButton";

export default function Home() {
  const router = useRouter();
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    console.log(`Username: ${username}, Password: ${password}`);
    router.push("/dashboard/borrower");
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen">
      <div className="absolute top-8 left-8">
        <Image
          src="/credmate.svg"
          alt="Credmate logo"
          width={198.79}
          height={46.02}
        />
      </div>
      <div
        className="w-[726px] h-[726px] bg-cover bg-center rounded-lg"
        style={{ backgroundImage: "url('/bgpattern.svg')" }}
      >
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="bg-gradient-to-b from-[#F1D9E5] via-[#FFFFFF] to-[#FFFFFF] p-6 rounded-lg shadow-lg w-[464px]">
            <div className="flex justify-center mb-4">
              <Image src="/login.svg" alt="Icon" width={40} height={40} />
            </div>
            <h2 className="text-[22px] font-semibold text-center mb-3">
              Secure Admin Login
            </h2>
            <p className="text-center text-[#8A8A8A] tracking-wide mb-6">
              Access your dashboard to monitor borrowers and lenders seamlessly
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <CredInput
                  type="text"
                  placeholder="Username"
                  icon="/User.svg"
                  value={username}
                  onChange={setUserName}
                />
              </div>
              <div className="mb-9">
                <CredInput
                  type="text"
                  placeholder="Password"
                  icon="/Lock.svg"
                  value={password}
                  onChange={setPassword}
                />
              </div>
              <div>
                <CredButton text="Log In" onClick={handleLogin} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
