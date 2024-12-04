"use client";
import Language from "@/gcui-main/locales/Language";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useState } from "react";
// import { Auth_confirmSms, Auth_sendSms } from "@/gcui-main/functions/Auth";
import { useRouter } from "next/navigation";
// import { AuthStores } from "@/gcui-main/stores/AuthStore";

type login = {
  beforShopping?: boolean;
};
const Login = ({ beforShopping = false }: login) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");

  const onSubmitFirstForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Disable form during request
    if (loading) return;

    setLoading(true);
    let data = new FormData(e.currentTarget);
    let mobile = data.get("mobile");
    // Simulate disabling API call
    console.log("API call disabled: Auth_sendSms", mobile);

    setLoading(false);
    setMobile(String(mobile));

    // Simulate success without actual API
    setStep(2);
  };

  const onSubmitSecondForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Disable form during request
    if (loading) return;

    setLoading(true);
    let data = new FormData(e.currentTarget);
    let mobile = data.get("mobile");
    let code = data.get("otp-code");
    // Simulate disabling API call
    console.log("API call disabled: Auth_confirmSms", mobile, code);

    // Simulate success without actual API
    setLoading(false);

    // Simulate authentication and navigation
    // AuthStores.setAuth(true);
    console.log("Auth simulation: success");
    if (beforShopping) {
      console.log("Redirect simulation: /management/pay");
    } else {
      console.log("Redirect simulation: /management");
    }
  };

  return (
    <div className={"flex flex-col gap-2"}>
      <div className={"border-b border-black border-opacity-10"}></div>
      <div>
        {step === 1 && (
          <form
            onSubmit={(e) => {
              onSubmitFirstForm(e);
            }}
          >
            <Input
              name={"mobile"}
              loading={loading ? 1 : 0}
              required={true}
              type={"tel"}
              inputMode="numeric"
              icon={<span className="far fa-mobile-retro text-indigo-500" />}
              placeholder={Language().mobile}
              ltr={true}
            />
            <label
              className={"text-xs text-slate-500 text-end block pt-2 pb-6"}
            >
              {Language().mobileHint}
            </label>
            <div className={"flex"}>
              <Button
                disabled={loading ? 1 : 0}
                particular={true}
                className={"justify-evenly"}
                loading={loading ? 1 : 0}
                color={"primary"}
                icon={<span className={"far fa-chevron-left"} />}
                type={"submit"}
              >
                {Language().continue}
              </Button>
            </div>
            <div className={"pt-4"}>
              <div
                className={"cursor-pointer text-slate-500 text-sm text-end"}
                onClick={() => {
                  setStep(2);
                }}
              >
                {Language().iHaveCode}
              </div>
            </div>
          </form>
        )}
        {step === 2 && (
          <form
            onSubmit={(e) => {
              onSubmitSecondForm(e);
            }}
          >
            <input type={"hidden"} name={"mobile"} value={mobile} />
            <Input
              loading={loading ? 1 : 0}
              name={"otp-code"}
              required={true}
              type={"number"}
              inputMode="numeric"
              pattern={"[0-9]{4}"}
              icon={<span className="far fa-message-sms text-indigo-500" />}
              placeholder={"*  *  *  *"}
              ltr={true}
            />
            <label
              className={"text-xs text-slate-500 text-end block pt-2 pb-6"}
            >
              {Language().otpHint}
            </label>
            <div className={"flex"}>
              <Button
                disabled={loading ? 1 : 0}
                particular={true}
                className={"justify-evenly"}
                loading={loading ? 1 : 0}
                color={"primary"}
                icon={<span className={"far fa-chevron-left"} />}
                type={"submit"}
              >
                {Language().continue}
              </Button>
            </div>
            <div className={"pt-4"}>
              <div
                className={"cursor-pointer text-slate-500 text-sm text-end"}
                onClick={() => {
                  setStep(1);
                }}
              >
                {Language().changeMobile}
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
export default Login;
