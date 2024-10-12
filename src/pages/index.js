import Image from "next/image";
import MessageBox from "@/components/MessageBox";
import Header from "@/components/Header";
import GoogleIcon from "../../public/icons/google.svg";
//"public/icons/google.svg";
export default function Home() {
  const MOCK_MESSAGE_LIST = [
    { name: "김이화", message: "안녕 2024!" },
    { name: "박화연", message: "안녕 2024!!" },
    { name: "최새로", message: "안녕 2024!!" },
  ];
  return (
    <>
      <Header>
        <button className="flex justify-center w-[310px] h-[70px] gap-[15px] py-[10px] px-[20px] rounded-[10px] bg-white text-[26px] text-[#200804] text-center font-['Laundry-B']">
          <Image src={GoogleIcon} alt="구글 아이콘" />
          Google로 로그인하고 편지 남기기
        </button>
      </Header>
      <main className="flex flex-col items-center w-full h-[100dvh] bg-[#fffbf6] ">
        <div className="flex justify-center w-[846px] h-[216px] gap-[20px] text-[#200804]">
          <h2 className="text-[140px] text-center font-['Saemaeul-R']">
            연말 편지 우체통
          </h2>
          <h5 className="text-[36px] text-center font-['Laundry-R']">
            OOO님의 연말 편지 우체통으로 OO건의 편지가 도착했어요!
          </h5>
        </div>
        <button className="w-[545px] h-[120px] px-[150px] py-[20px] bg-[#C73820] text-[36px] font-['Laundry-B'] text-white rounded-[15px] shadow-md">
          편지 쓰러 가기
        </button>
        {MOCK_MESSAGE_LIST.map((el, idx) => (
          <div key={idx}>
            <MessageBox message={el.message} name={el.name} />
          </div>
          //key값을 기준으로 새로 랜더링한다. unique한 값으로 한다.
        ))}
      </main>
    </>
  );
}
