import { postLisst } from "../src/data";

const EditNews = {
    print(id){
        const resul = postLisst.find( (post) => post.id === id);
        return`
        <div class="mi">
        <nav class=".nav">
          <div class="nj">
            <div class="ni">
              <div class="xc">
                <div class="im">
                  <img class="mg" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
                </div>
                <div class="hi">
                  <div class="cu">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                    <a href="/admin" class="te" aria-current="page">Dashboard</a>
      
                    <a href="/addNews" class="te">Thêm Bài viết</a>
      
                    <a href="/" class="te">Quay lại trang chủ</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div class="boo">
        <table class="tb">
            <thead class="ta">
                <tr>
                    <th scope="col" class="sco">Name</th>
                    <th scope="col" class="sco">Title</th>
                    <th scope="col" class="sco"></th>
                    <th scope="col" class="sco"></th>
            </thead>
        <tbody class="tbd">
        <tr>
            <td class="dt">
                <div class="fx">
                    <div class="fc">
                        <img class="fv" src="${resul.img}" alt="">
                    </div>
                </div>
            </td>
            <td class="pm">
                <div class="pn">${resul.title}</div>
            </td>
            <td class="pm">
                <button type="submit" class="inl">
                    <a href="">Update</a>
                </button>
            </td>
        </tr>
        </tbody>
        </table>
        </div>
        `;
    }
}
export default EditNews;