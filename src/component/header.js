import { menuList1 } from "../data";


const header = {
    print() {
      return /*html */`
      <header class="flex flex-nowrap justify-between bg-slate-100">
      <div class="px-5 py-5">
        <a href=""><img src="http://3.bp.blogspot.com/-q-W4fEE2W-s/T13S1Jv26II/AAAAAAAAC8c/xApJx0SwxRA/w1200-h630-p-k-no-nu/aaa.png" class="w-64" alt=""></a>
      </div>
      <div>
        <ul class="flex pt-5">${menuList1.map((post) =>`
        <li class="pt-8 text-2xl pl-3 font-mono font-bold pr-10 hover:text-red-500"><a href="/${post.link}">${post.name}</a></li>
        `).join("")}
        </ul>
      </div>
      
  </header>
      `

    },
};
export default header;