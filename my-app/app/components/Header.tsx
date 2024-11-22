import Image from "next/image";
import MsgIcon from "../../public/icons/msg.svg";
import GoogleIcon from "../../public/icons/google.svg";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between w-full h-[120px] px-[70px] py-[25px] bg-[#C73820]">
      <div className="flex gap-[15px]">
        <Image src={MsgIcon} alt="편지 아이콘" />
        <h2 className="w-[280px] h-[40px] text-white text-[50px] text-center font-['Saemaeul-R']">
          연말 편지 우체통
        </h2>
      </div>
      <button className="flex justify-center items-center w-[310px] h-[70px] gap-[15px] py-[10px] px-[20px] rounded-[10px] bg-white text-[26px] text-[#200804] text-center font-['Laundry-B']">
        <Image src={GoogleIcon} alt="구글 아이콘" />
        Google 로그인
      </button>
    </div>
  );
};

export default Header;

