import React from "react";
import theme from "../../theme";

const TypeB = ({ ...restProps }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <path
        d="M0 24V7.71168L5.0173 2.69438C6.74248 0.969198 9.08233 0 11.5221 0H24V17.8936L20.588 21.3056C18.8628 23.0308 16.523 24 14.0832 24H0Z"
        fill={theme.palette.purple300}
      />
      <path
        d="M8.37695 17H12.5742C14.8096 17 15.9854 15.8379 15.9922 14.2656C15.9854 12.8027 14.9326 11.9141 13.8184 11.8594V11.7637C14.8369 11.5381 15.6025 10.8066 15.5957 9.64453C15.6025 8.1543 14.4951 7.10156 12.3145 7.10156H8.37695V17ZM10.4277 15.3047V12.6523H12.2188C13.2305 12.6523 13.8662 13.2402 13.8594 14.0742C13.8662 14.8193 13.3535 15.3115 12.1641 15.3047H10.4277ZM10.4277 11.2441V8.76953H12.0547C12.9912 8.76953 13.5244 9.25488 13.5176 9.97266C13.5244 10.7656 12.875 11.251 12.0137 11.2441H10.4277Z"
        fill={theme.palette.white}
      />
    </svg>
  );
};

export default TypeB;
