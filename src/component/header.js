import { menuList1 } from "../data";


const header = {
    print() {
        return /*html*/`
        <div class="bg-[#272f54] py-3">
          <img src="https://picsum.photos/100/50" alt="" class="m-auto">
        </div>
        <div class="bg-[#c97802] flex">
          <ul class="mx-8 my-3 flex">
          ${menuList1.map((post) =>`
            <li class="menu_link hover:bg-cyan-500 mx-4 text-white"><a href="/${post.link}"> ${post.name}</a></li>
            `).join("")}
          </ul>
          <form action="" class="my-3 ml-40">
            <input type="text" class="w-52 outline-none">
            <button class="bg-[#272f54] text-[#fff] border-[#fff] border w-24">Tìm kiếm</button>
          </form>
        </div> 
      `

    },
};
export default header;