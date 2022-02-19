
// import { postLisst } from "../data";

import { get, update } from "../api/posts";

const EditPost = {
    async print(id){
        const { data } = await get(id);
        return /*html*/`
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
        
                      <a href="/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Quay lại trang chủ</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>

        <div class="border-4 border-dashed border-gray-200 rounded-lg h-96 mt-4">
        <form id="form-edit">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Img</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            </thead>
        <tbody class="bg-white divide-y divide-gray-200">
        <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <input type="file" value="${data.img}" id="image"/>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <input type="text" value="${data.title}" id="title"/>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <input type="text" value="${data.des}" id="des"/>
            </td>
            
            <td class="px-6 py-4 whitespace-nowrap">
                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-yellow-600">
                    UPDATE
                </button>
            </td>
        </tr>
        </tbody>
        </table>
        </form>
        </div>
        `;
    },
    afterRender(id){
        const formEdit = document.querySelector('#form-edit');
        formEdit.addEventListener('submit' ,(e) => {
          e.preventDefault();
          update({
            id, title: document.querySelector('#title').value,
                des: document.querySelector('#des').value
                
          })
            .then(() => document.location.href="/listPost")
            .catch((error) => console.log(error))
            
        })
    }
    
}
export default EditPost;