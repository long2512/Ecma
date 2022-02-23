
import Banner from "../component/banner";
import footer from "../component/footer";
import header from "../component/header";
import { get } from "../api/products";
import { addToCart } from "../utils/cart";




const DetailNewPage = {
    async print(id) {
        const { data } = await get(id);
        return `
            <header>${header.print()}</header>
            ${Banner.print()}
            <img src="${data.img}" alt="" class="mt-4 p-20 pb-10">
            <h4 class="text-2xl font-sans font-semibold mt-2 mb-2 ml-20">${data.title}</h4>
            <div class="flex">
                <div class="flex gap-14">
                <input type="number" id="inputValue" value="1" class="border border-gray-900">
                    <p class="text-2xl text-red-600 font-bold ml-20">${data.newprice}</p>
                    <p class="text-2xl line-through">${data.oldprice}</p>
                </div>
                <button data-id=${data.id} id="addToCart">Add to cart</button>
            </div>
            
            ${footer.print()}
        `;
    },
    afterRender(id) {
        const inputVale = document.querySelector('#inputValue');
        console.log(inputVale)
        document.querySelector('#addToCart').addEventListener('click', async (e) => {
            e.preventDefault();
            const { data } = await get(id);
            addToCart({ ...data, quantity: inputVale ? +inputVale.value : 1 },
                () => { 
                    // reRender(DetailNewPage, '#app') 
                    window.alert('Theem thanh cong');
                });
        })
    }
}
export default DetailNewPage;