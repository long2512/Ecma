import { getAll, remove } from "../api/posts";
import { reRender } from "../utils/reRender";


const listPost = {
    async print(){
        const { data } = await getAll();
            return /*html */`
            <div class="min-h-full">
            <nav class="bg-gray-800">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div class="flex items-center justify-between h-16">
                  <div class="flex items-center">
                    <div class="flex-shrink-0">
                      <img class="h-8 w-8" src="http://3.bp.blogspot.com/-q-W4fEE2W-s/T13S1Jv26II/AAAAAAAAC8c/xApJx0SwxRA/w1200-h630-p-k-no-nu/aaa.png" alt="Workflow">
                    </div>
                    <div class="hidden md:block">
                      <div class="ml-10 flex items-baseline space-x-4">
                        <a href="/admin" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>
          
                        <a href="" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Bài viết</a>
                        <a href="/listproducts" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sản Phẩm</a>
          
                        <a href="/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Quay lại trang chủ</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          
            <header class="bg-white shadow">
              <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">
                  POSTS
                </h1>
              </div>
            </header>
          </div>

          <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div class="px-4 py-6 sm:px-0">
            <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
            <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Img
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Edit
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Delete
                        </th>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      ${data.map((post) => {
                          return /*html*/`
                          <tr>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                              <div class="flex-shrink-0 h-10 w-10">
                                <img class="h-10 w-10" src="${post.img}" alt="">
                              </div>
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">${post.title}</div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">${post.des}</div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <a href="/editPost/${post.id}"><div class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-lime-700 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                            </div></a>
                          </td>
                          <td class="pm">
                          <button class="btn" data-id="${post.id}"><div class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg></div></button>

                          </td>
                        </tr>
                          `
                       }).join("")}
                    </tbody>
                  </table>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-yellow-600">
                        <a href="/addPosts">Thêm</a>
                      </button>
                    </div>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
      </main>
            `;
    },
    afterRender(){
        const buttons = document.querySelectorAll(".btn");
        buttons.forEach(button => {
            const id = button.dataset.id;
            button.addEventListener('click', () =>{
                const confirm = window.confirm("Bạn có muốn xoá không");
                if(confirm){
                    remove(id).then(() => {
                        console.log("Xoá thành công")
                        reRender(listPost, "#app");
                    });
                }
            })
        });
    }
}
export default listPost;