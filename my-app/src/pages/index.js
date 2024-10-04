import Image from "next/image";
import logo from "./logo.png";

export default function Home() {
  return (
    <div class="flex flex-col justify-center items-center bg-gradient-to-t from-black from-10% via-red-950 via-50% to-black) to-90% w-full h-full font-custom">
      <div class="flex flex-row justify-between items-center w-full p-8">
        <div class="flex">
          <Image src={logo} class="w-[148px] h-[50px]" />
        </div>
        <div class="flex">
          <a
            role="button"
            class="w-auto h-auto p-1 bg-red-600 text-sm text-white font-custom font-normal rounded-sm border-r-red-600]"
          >
            로그인
          </a>
        </div>
      </div>
      <div class="p-32">
        <div>
          <h1 class="text-5xl font-extrabold text-center leading-snug">
            영화 시리즈 등을 <br />
            무제한으로
          </h1>
          <p class="text-m font-normal text-center mt-3 mb-6">
            5,500원으로 시작하세요. 멤버십은 언제든지 해지가능합니다.
          </p>
        </div>
        <div class="flex flex-col items-center">
          <h3 class="text-m font-normal text-center mt-3">
            시험할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일
            주소를 입력하세요.
          </h3>
          <div class="flex flex-row w-[508px] h-[50px] justify-center p-1 m-2">
            <div
              class="bg-gray-400 bg-opacity-15 border-2 rounded-sm
              border-white text-sm pr-40 mr-2 text-gray-200 font-thin flex flex-row justify-start items-center"
            >
              <div>이메일 주소</div>
            </div>
            <a
              role="button"
              class="w-auto h-auto p-4 bg-red-600 text-lg text-white font-medium rounded-sm border-red-600 text-center inline-block"
            >
              시작하기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
