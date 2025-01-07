import { LuKeyRound, LuLogIn, LuMail } from "react-icons/lu";
import { Button } from "../button/Button";
import { InputText } from "../input/InputText";
import axios from "axios";
import { useState } from "react";
import { Message } from "../message/Message";

export function LoginForm() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const baseUrl = import.meta.env.VITE_SUPABASE_URL;
  const apiKey = import.meta.env.VITE_SUPABASE_KEY;

  const login = async (payload: { email: string; password: string }) => {
    try {
      const response = await axios.post(
        `${baseUrl}/auth/v1/token?grant_type=password`,
        {
          email: payload.email,
          password: payload.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            apikey: apiKey,
          },
        }
      );
      if (response.status === 200) {
        setSuccess("Login berhasil");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.msg || "Login failed.");
        console.log("Login error:", error.response?.data?.msg);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    login(data as { email: string; password: string });
  };

  return (
    <div className="px-64 py-8 h-screen items-center flex">
      <div className="flex gap-x-32 w-full">
        <div className="w-1/2 flex flex-col gap-y-32">
          <div className="headbar">
            <img src="/logo.png" alt="Logo" className="w-32 h-auto" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex flex-col gap-y-4 pb-8">
              <h1 className="font-bold text-4xl">Selamat Datang</h1>
              <p className="text-gray-500 text-lg">
                Masuk dan kelola dashboard Mediverse Anda sekarang
              </p>
            </div>
            <div className="">
              {error && (
                <Message
                  variant="error"
                  text={error}
                  onClick={() => setError("")}
                />
              )}
              {success && (
                <Message
                  variant="success"
                  text={success}
                  onClick={() => setSuccess("")}
                />
              )}
            </div>
            <form onSubmit={submitForm}>
              <div className="flex flex-col gap-y-4 pb-8">
                <div className="">
                  <label htmlFor="email">Email</label>
                  <InputText
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="email"
                    outline="box"
                    icon={<LuMail className="text-lg" />}
                  />
                </div>
                <div className="">
                  <label htmlFor="password">Password</label>
                  <InputText
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="password"
                    outline="box"
                    icon={<LuKeyRound className="text-lg" />}
                  />
                </div>
                <div className="text-sm justify-end flex">
                  <p>Lupa kata sandi?</p>
                </div>
              </div>
              <div className="flex justify-end">
                <Button
                  label="masuk sekarang"
                  size="large"
                  icon={<LuLogIn />}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="w-4/5 flex justify-center ">
          <img src="/banner.png" className="w-auto h-[85vh] rounded-xl" />
        </div>
      </div>
    </div>
  );
}
