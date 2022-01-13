
import { postLisst } from "../data";

const NewsList = {
    print() {
        return /* html */`
        <h2 class="uppercase py-3 text-[#272f54] font-bold">hoạt động sinh viên</h2>
        <div class="grid grid-cols-3 gap-5 mb-5">
            ${postLisst.map((post) => `
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