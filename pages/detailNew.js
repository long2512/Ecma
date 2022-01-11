import { data } from "autoprefixer"

const DetailNewPage = {
    print(id){
        const result = data.find((post) => post.id === id);
        return`
            <img src="${result.img}" alt="" class="m-auto">
            <h4 class="uppercase text-[#c97802] py-2 font-medium">${result.title}</h4>
            <p>${result.text}</p>
        `;
    }
}
export default DetailNewPage;