const AddNews = {
    print(){
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
        
                      <a href="/listpost" class="te">bài viết</a>
        
                      <a href="/addNews" class="te">Thêm Bài viết</a>
        
                      <a href="/editpost" class="te">Sửa bài viết</a>
                      <a href="/" class="te">Quay lại trang chủ</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>


        <div class="hq" aria-hidden="true">
        <div class="hw">
          <div class="he"></div>
        </div>
      </div>
      <div class="hrr">
        <div class="ht">
          <div class="aw">
            <form action="#" method="POST">
              <div class="ae">
                <div class="ar">
                  <div class="at">
                    
                    <div class="ay">
                        <label for="email-address" class="bk">Name</label>
                        <input type="text" name="email-address" id="email-address" autocomplete="email" class="ba">
                    </div>

                    <div class="ay">
                      <label for="email-address" class="bk">Title</label>
                      <input type="text" name="email-address" id="email-address" autocomplete="email" class="ba">
                    </div>
      
                  </div>
                </div>
                <div class="aii">
                  <button type="submit" class="au">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
        `;
    }
}
export default AddNews;