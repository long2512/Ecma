
import { postLisst } from "../src/data";

const Admin = {
    print(){
        return `
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
                      <a href="/admin" class="te" aria-current="page">Dashboard</a>
        
                      <a href="/addNews" class="te">Thêm Bài viết</a>
        
                      <a href="/" class="te">Quay lại trang chủ</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        
          <header class="sha">
            <div class="nt">
              <h1 class="texx">
                Dashboard
              </h1>
            </div>
          </header>
          <main>
            <div class="ree">
              <div class="bor">
                <div class="bo">
                <div class="ol">
                <div class="ov">
                  <div class="gn">
                    <div class="sh">
                      <table class="tb">
                        <thead class="ta">
                          <tr>
                            <th scope="col" class="sco">
                              Name
                            </th>
                            <th scope="col" class="sco">
                              Title
                            </th>
                            <th scope="col" class="sco">
                              Edit
                            </th>
                            <th scope="col" class="sco">
                              Delete
                            </th>
                        </thead>
                        <tbody class="tbd">
                          ${postLisst.map((post) => {
                              return `
                              <tr>
                              <td class="dt">
                                <div class="fx">
                                  <div class="fc">
                                    <img class="fv" src="${post.img}" alt="">
                                  </div>
                                </div>
                              </td>
                              <td class="pm">
                                <div class="pn">${post.title}</div>
                              </td>
                              <td class="pm">
                                <a href="/editNews/${post.id}"><div class="pmm">Edit</div></a>
                              </td>
                              <td class="pm">
                              <a href=""><div class="pk">Delete</div></a>
                              </td>
                            </tr>
                              `
                           }).join("")}
                        </tbody>
                      </table>
                    </div>
                    <div class="pl">
                          <button type="submit" class="inl">
                            <a href="/addNews">Thêm</a>
                          </button>
                        </div>
                  </div>
                </div>
              </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        `;
    }
}
export default Admin;