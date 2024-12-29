import axios from "axios";
import { useState } from "react";
const instance = axios.create({
	baseURL : 'http://ec2-3-38-49-253.ap-northeast-2.compute.amazonaws.com:8080'
})

const writing = () => {
    const [toName, setToName] = useState("");
    const [fromName, setFromName] = useState("");
    const [message, setMessage] = useState("");
    const [type, setType] = useState("string");
    const handleToName = (e: any) => {
        setToName(e.target.value);
    };
    const handleFromName = (e: any) => {
        setFromName(e.target.value);
    };
    const handleMessage = (e: any) => {
        setMessage(e.target.value);
    };
    
    const postMessage = async () => {
        try {
            const request = await instance.post("/messages", {
                toName,
                fromName,
                message,
                type
          });
            console.log(request.status)
            console.log("Response data:", request.data); // messages 데이터 확인
            alert("메세지 전송에 성공하였습니다!")
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <div className="flex flex-col w-[1480px] h-[1250px] bg-[#ffffff]">
            <div className="flex flex-col">
                <div>
                    <div>TO</div>
                    <input type="text" value={toName} onChange={handleToName} placeholder="편지를 받을 친구의 이름을 입력해주세요." required />
                </div>
                <div>
                    <div>From</div>
                    <input type="text" value={fromName} onChange={handleFromName} placeholder="당신의 이름을 입력해주세요." required/>
                </div>
            </div>
            <textarea onChange={handleMessage} placeholder="편지를 작성해주세요!" required />
            <button className="px-[150px] py-[20px] bg-[#C73820] text-[36px] font-['Laundry-B'] text-white rounded-[15px] shadow-md" title="편지 보내기" onClick={postMessage}/>
            </div>
    );

};

export default writing;