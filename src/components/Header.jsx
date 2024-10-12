import Image from "next/image";
import MsgIcon from "../../public/icons/msg.svg";
//children 인수로 받기
const Header = (children) => {
  return (
    <div className="flex justify-between w-full h-[120px] px-[70px] py-[25px] bg-[#C73820]">
      <div className="flex gap-[15px] ">
        <Image src={MsgIcon} alt="편지 아이콘" />
        <h2 className="w-[280px] h-[40px] text-white text-[50px] text-center font-['Saemaeul-R']">
          연말 편지 우체통
        </h2>
      </div>
      {children}
    </div>
  );
};

export default Header;
