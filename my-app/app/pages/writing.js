import axios from "axios";
import { api } from "../../public/API"
const toName = "김기연";
const url = `${api}message?name=${toName}`;
const Writing = () => {
    return (
        <>
            <form onSubmit={ async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const json = Object.fromEntries(formData.entries());
                try {
                    const response = await axios.post(url, json);
                    thenjson = response.data;
                }
                catch (e) {
                    console.log(e);
                }
            }}>
                 <div>
                    <input type="text" name="toName" required autoFocus placeholder="TO. "/>
                    <input type="text" name="fromName" required placeholder="From. "/>
                </div>
            <div>
                <textarea rows="10" cols="10" maxLength="150" wrap="hard" name="message" placeholder="항상 고마워"></textarea>
            </div>
            <button type="submit" className="px-[150px] py-[20px] bg-[#C73820] text-[36px] font-['Laundry-B'] text-white rounded-[15px] shadow-md">편지 부치기</button>
            </form>
        </>
    );

};

export default Writing;