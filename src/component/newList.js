
// import { postLisst } from "../data";
import axios from "axios";
import { postLisst } from "../data";

const NewsList = {
    // async print() {
    //     // Chờ thằng axios.get truy cập API và lấy dữ liệu, 
    //     // lấy dữ liệu xong sẽ trả về và gán vào biến response
    //         const { data } = await axios.get("https://5e79b4b817314d00161333da.mockapi.io/posts");
    //         return/* html */`
    //         <h2 class="uppercase py-3 text-[#272f54] font-bold">hoạt động sinh viên</h2>
    //         <div class="grid grid-cols-3 gap-5 mb-5">
    //             ${data.map((post) => `
    //                 <div class="border border-inherit p-4 text-left">
    //                     <a href="/news/${post.id}">
    //                         <img src="${post.img}" alt="" class="m-auto">
    //                     </a>
    //                     <a href="/news/${post.id}">
    //                         <h4 class="uppercase text-[#c97802] py-2 font-medium">${post.title}</h4>
    //                     </a>
                        
    //                     <p>${post.text}</p>
    //                 </div>
    //             `).join("")}
    //         </div>
            
    //         `;
            
         
    // },
    print() {
        return /*html */ `
        <h1 class="uppercase text-center font-mono text-4xl mt-10">Exclusive Products</h1>
        <div class="row grid grid-cols-4 mx-48 mt-10 gap-12">
            ${postLisst.map((post) =>`
            <div class="col">
            <a href=""><img src="${post.img}" class="mx-auto" alt=""></a>
            <h3 class="text-center text-2xl font-sans font-semibold mt-2 mb-2">${post.title}</h3>
            <div class="flex mb-2">
              <span class="text-xl text-red-600 mr-3 ml-32">${post.newprice}</span>
              <p class="text-xl line-through">${post.oldprice}</p>
            </div>
            <div class="bg-lime-600 text-center border rounded-lg p-2 text-white hover:bg-yellow-500">Thêm Giỏ Hàng</div>
          </div>
            `).join("")}
        `;
    }
};
export default NewsList;