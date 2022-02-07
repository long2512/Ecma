
// import { postLisst } from "../data";
import axios from "axios";

const NewsList = {
    async print() {
        // Chờ thằng axios.get truy cập API và lấy dữ liệu, 
        // lấy dữ liệu xong sẽ trả về và gán vào biến response
            const { data } = await axios.get("https://5e79b4b817314d00161333da.mockapi.io/posts");
            return/* html */`
            <h2 class="uppercase py-3 text-[#272f54] font-bold">hoạt động sinh viên</h2>
            <div class="grid grid-cols-3 gap-5 mb-5">
                ${data.map((post) => `
                    <div class="border border-inherit p-4 text-left">
                        <a href="/news/${post.id}">
                            <img src="${post.img}" alt="" class="m-auto">
                        </a>
                        <a href="/news/${post.id}">
                            <h4 class="uppercase text-[#c97802] py-2 font-medium">${post.title}</h4>
                        </a>
                        
                        <p>${post.text}</p>
                    </div>
                `).join("")}
            </div>
            
            `;
            
         
    },
};
export default NewsList;