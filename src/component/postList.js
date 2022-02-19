import { getAll } from "../api/posts";

const NewPost = {
    
    async print() {
        const { data } = await getAll();
        return /*html */ `
        <h1 class="uppercase text-center font-mono text-4xl mt-10">Exclusive Products</h1>
        <div class="row grid grid-cols-2 mx-48 mt-10 gap-12">
            ${data.map((post) =>`
            <div class="col">
                <a href="/news/${post.id}"><img src="${post.img}" class="mx-auto hover:scale-[1.1]" alt=""></a>
                <h3 class="text-center text-2xl font-sans font-semibold mt-2 mb-2">${post.title}</h3>
                <p class="text-center text-xl font-sans font-semibold">${post.des}</p>
            </div>
            `).join("")}
            </div>
        `;
    }
};
export default NewPost;