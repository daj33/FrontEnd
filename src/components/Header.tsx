import Image from "next/image";
import MsgIcon from "../../public/icons/msg.svg";
import GoogleIcon from "../../public/icons/google.svg";
import React from "react";
import { useRouter } from "next/router";
//클라이언트 프론트에서 직접적으로 권한 서버에게 인증 코드 요청
// (인증 코드 발급을 위한 권한 서버 로그인 페이지로 이동하는 주소이다)
const client_id = "526903298668-in7ec446ogrb9ji9u5vendfcb433dp5d.apps.googleusercontent.com"
const redirect_uri = "http://localhost:3000/oauth/callback/google&response_type=code"
const response_type = "code"
const scope = "email profile"
const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}=code&scope=${scope}=email profile`
const Header = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between w-full h-[120px] px-[70px] py-[25px] bg-[#C73820]">
      <div className="flex gap-[15px]">
        <Image src={MsgIcon} alt="편지 아이콘" />
        <h2 className="w-[280px] h-[40px] text-white text-[50px] text-center font-['Saemaeul-R']">
          연말 편지 우체통
        </h2>
      </div>
      <button className="flex justify-center items-center w-[310px] h-[70px] gap-[15px] py-[10px] px-[20px] rounded-[10px] bg-white text-[26px] text-[#200804] text-center font-['Laundry-B']"
        onClick={() => router.push(authUrl)}>
        <Image src={GoogleIcon} alt="구글 아이콘" />
        Google 로그인
      </button>
    </div>
  );
};

export default Header;

