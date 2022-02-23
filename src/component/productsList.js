
// import axios from "axios";
import { getAll } from "../api/products";

const NewsList = {
    
    async print() {
        const { data } = await getAll();
        return /*html */ `
        <h1 class="uppercase text-center font-mono text-4xl mt-10">Exclusive Products</h1>
        <div class="row grid grid-cols-4 mx-48 mt-10 gap-12">
            ${data.map((post) =>`
            <div class="col">
                <a href="/products/${post.id}"><img src="${post.img}" class="mx-auto hover:scale-[1.1]" alt=""></a>
                <h3 class="text-center text-2xl font-sans font-semibold mt-2 mb-2">${post.title}</h3>
                <div class="flex mb-2">
                    <span class="text-xl text-red-600 mr-3 ml-32">${post.newprice}</span>
                    <p class="text-xl line-through">${post.oldprice}</p>
                </div>
                <div class="bg-lime-600 text-center border rounded-lg p-2 text-white hover:bg-yellow-500">Thêm Giỏ Hàng</div>
            </div>
            `).join("")}
            </div>
        `;
    }
};
export default NewsList;