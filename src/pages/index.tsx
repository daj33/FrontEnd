import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import MessageBox from "../components/MessageBox"
import { Cookies } from "react-cookie";
const instance = axios.create({
  baseURL: 'http://ec2-3-38-49-253.ap-northeast-2.compute.amazonaws.com:8080'
});
type Message = {
    _id? : number,
    toName : string,
    fromName: string,
    fromId?: number,
    message: string|null,
    type?: string,
    date: string
}
export default function Home() {
  const cookies = new Cookies();
  const [userName, setUserName] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    if (!userName) return;
    const fetchMessages = async () => {
      try {
        const response = await instance.get(`/messages?name=${cookies.get('name')}`);
        console.log(response.status)
        console.log(response.data);
        const data: Message[] = response.data;
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMessages();
  }, [userName])
  return (
    <>
      <main className="flex flex-col items-center w-full h-[100dvh] bg-[#fffbf6] ">
        <div className="flex flex-col justify-center w-[900px] h-[216px] gap-[20px] mt-[80px] mb-[100px] text-[#200804]">
          <h2 className="text-[140px] text-center font-['Saemaeul-R']">
            연말 편지 우체통
          </h2>
          <h5 className="w-full text-[36px] text-center font-['Laundry-R']">
            {cookies.get('name')}님의 연말 편지 우체통으로 {messages.length}건의 편지가 도착했어요!</h5>
        </div>
        <Link href={'./writing'} className="px-[150px] py-[20px] bg-[#C73820] text-[36px] font-['Laundry-B'] text-white rounded-[15px] shadow-md">
          편지 쓰러 가기
        </Link>
        <div className="grid auto-rows-auto grid-cols-4 gap-[50px] p-[20px] mt-[80px] ">
          {messages.map((message : Message) => (
            <MessageBox key={message._id} contents={message.message} fromName={message.fromName} />
          ))}
        </div>
      </main>
    </>
  );
}
