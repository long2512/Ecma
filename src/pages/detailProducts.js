
import Banner from "../component/banner";
import footer from "../component/footer";
import header from "../component/header";
import { get } from "../api/products";


const DetailNewPage = {
    async print(id){
        const { data } = await get(id);
        return`
            <header>${header.print()}</header>
            ${Banner.print()}
            <img src="${data.img}" alt="" class="mt-4 p-20 pb-10">
            <h4 class="text-2xl font-sans font-semibold mt-2 mb-2 ml-20">${data.title}</h4>
            <div class="flex">
                <div class="flex gap-14">
                    <p class="text-2xl text-red-600 font-bold ml-20">${data.newprice}</p>
                    <p class="text-2xl line-through">${data.oldprice}</p>
                </div>
            </div>
                
            ${footer.print()}
        `;
    }
}
export default DetailNewPage;