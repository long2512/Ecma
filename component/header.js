import { menuList1 } from "../src/data";


const header = {
    print() {
        return /*html*/`
        <div class="logo">
          <img src="https://picsum.photos/100/50" alt="" class="m-auto">
        </div>
        <div class="menu">
          <ul class="ul">
          ${menuList1.map((post) =>`
            <li class="menu_link"><a href="/${post.link}"> ${post.name}</a></li>
            `).join("")};
          </ul>
          <form action="" class="form">
            <input type="text" class="input">
            <button class="btn">Tìm kiếm</button>
          </form>
        </div> 
      `;

    },
};
export default header;