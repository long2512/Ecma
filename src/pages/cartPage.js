
import footer from "../component/footer";
import header from "../component/header";
import { minusCart, plusCart, removeCart } from "../utils/cart";
import { reRender } from "../utils/reRender";


const CartPage = {
    async print() {
        const cart = JSON.parse(localStorage.getItem('cart'));
        return `${ header.print()}
        <table class="text-center mx-auto  my-12">
        <thead>
            <tr class="border-b-2 border-[#ccc] ">
                <th class="p-12">#</th>
                <th class="p-12"> Ảnh sản phẩm</th>
                <th class="p-12">Tên sản phẩm</th>
                <th class="p-12">Giá sản phẩm</th>
                <th class=""></th>
                <th class="p-12">Số lượng</th>
                <th class=""></th>
                <th class="p-12">Thành tiền</th>
            </tr>
        </thead>
        <tbody>
            ${cart.map((item,i)=> `<tr>
                        <td class="p-3 font-bold">${i+1}</td>
                        <td class="p-3 font-bold"><img width="100" url="${item.img}"></td>
                        <td class="p-3 font-bold">${item.title}</td>
                        <td class="p-3 font-bold">${item.newprice} đ</td>
                        <td class="p-3 cursor-pointer"><button data-id="${item.id}" class="btn plus">+</button></td>
                        <td class="p-3 font-bold">${item.quantity}</td>
                        <td class="p-3 cursor-pointer"><button data-id="${item.id}" class="btn minus">-</button></td>
                        <td class="p-3 font-bold">${item.quantity*item.newprice} đ</td>
                        <td class=" cursor-pointer"><button data-id="${item.id}" class="btn remove">Xóa</button></td>
                     </tr>`).join("")}
        </tbody>
        <tfoot>
            <tr class="">
                <td colspan="5" class="p-3 font-bold"> Tổng tiền:</td>
                <td class="font-bold text-red-600"><span id="totalPrice">0</span> đ</td>
            </tr>
        </tfoot>
    </table>
    ${ footer.print()}`;

    },afterRender(){
        header.afterRender();
        const btns = document.querySelectorAll(".btn");
        const totalPrice = document.querySelector("#totalPrice");
        let total = 0;
        if(JSON.parse(localStorage.getItem('cart'))){
            const cart = JSON.parse(localStorage.getItem('cart'));
            cart.forEach(item =>{
                total +=item.newprice*item.quantity;
                totalPrice.innerHTML= total;
            })
            
        }
        btns.forEach(btns => {
            btns.addEventListener('click',()=>{
                const id = btns.dataset.id;
                if(btns.classList.contains('plus')){
                    plusCart(id,()=>{
                        reRender(CartPage,'#app')
                    });
                }else if(btns.classList.contains('minus')){
                    minusCart(id,()=>{
                     reRender(CartPage,'#app')
                    });
                }else{
                    removeCart(id,()=>{
                        reRender(CartPage,'#app')
                    });
                }
            })
        });
    }
}
export default CartPage;