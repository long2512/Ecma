import header from "../component/header";

const CartPage = {
     print() {
        const cart = JSON.parse(localStorage.getItem('item'));
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
                <th class="p-12">Xóa</th>
            </tr>
        </thead>
        <tbody>
        ${cart.map((item,i)=> `<tr class="">
                                <td colspan="7" class="p-3 font-bold">${i+1}</td>
                                <td colspan="7" class="p-3 font-bold">${item.img}</td>
                                <td colspan="7" class="p-3 font-bold">${item.title}</td>
                                <td colspan="7" class="p-3 font-bold">${item.newprice}</td>
                                <td colspan="7" class="p-3 font-bold">+</td>
                                <td colspan="7" class="p-3 font-bold">${item.quantity}</td>
                                <td colspan="7" class="p-3 font-bold">-</td>
                                <td colspan="7" class="p-3 font-bold">${item.quantity*item.newprice}</td>
                        </tr>`).join('')}
        </tbody>
        <tfoot>
            <tr class="">
                <td colspan="7" class="p-3 font-bold"> Tổng tiền:</td>
                <td class="font-bold text-red-600"><span id="totalPrice">0</span>đ</td>
            </tr>
        </tfoot>
    </table>
        `
    },afterRender(){
        header.afterRender()
    }
}
export default CartPage;