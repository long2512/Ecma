import { postLisst } from "../src/data";


const DetailNewPage = {
    print(id){
        const result = postLisst.find((post) => post.id === id);
        return`
            <img src="${result.img}" alt="" class="m-auto">
            <h4 class="uppercase text-[#c97802] py-2 font-medium">${result.title}</h4>
            <p>${result.text}</p>
        `;
    }
}
export default DetailNewPage;