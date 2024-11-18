import React from "react";
import Loader from "../../gcui-main/Loader";

export interface inputProps {
  icon?: React.ReactNode;
  ltr?: boolean | undefined;
  className?: string;
  [propName: string]: any;
}

const Input: React.FC<inputProps> = ({ ...props }) => {
  let isLtr = props.ltr ?? false;
  delete props.ltr;
  let loading = props.loading ? true : false;
  return (
    <div
      className={`border-slate-900 bg-slate-800 rounded p-2 h-10 flex items-center justify-between gap-2 text-slate-200 has-[:disabled]:bg-slate-600 has-[:disabled]:placeholder-slate-400 ${
        isLtr ? "flex-row-reverse" : ""
      } ${props.className}`}
    >
      <input
        disabled={props.loading || props.disabled ? true : false}
        {...props}
        className={`w-full bg-transparent outline-none placeholder-slate-400 disabled:text-slate-400 border-none p-0 m-0 no-spinner ${
          isLtr ? "myLtr" : ""
        }`}
      />
      {props.icon && props.icon !== "" && !loading && props.icon}
      {loading && (
        <div className={"h-8 w-8 flex items-center justify-center"}>
          <div className={"scale-75"}>
            <Loader />
          </div>
        </div>
      )}
    </div>
  );
};
export default Input;
