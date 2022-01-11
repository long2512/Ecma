
import { postLisst } from "../src/data";

const NewsList = {
    print() {
        return /* html */`
        <h2>hoạt động sinh viên</h2>
        <div class="row">
            ${postLisst.map((post) => `
                <div class="col">
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