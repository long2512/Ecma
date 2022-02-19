import axios from "axios";
import { add } from "../api/posts";

const AddPosts = {
    print(){
        return /*html*/`
        <div class="min-h-full">
          <nav class="bg-gray-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
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


        <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
          <div class="border-t border-gray-200"></div>
        </div>
      </div>
      <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form  method="POST" id="form-add-post">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    
                    <div class="col-span-6 sm:col-span-4">
                        <label  class="block text-sm font-medium text-gray-700">Title</label>
                        <input type="text" id="title-post" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md p-2">
                    </div>
                    <div class="col-span-6 sm:col-span-4">
                        <label  class="block text-sm font-medium text-gray-700">Image</label>
                        <input type="file" id="img-post" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md p-2">
                    </div>

                    <div class="col-span-6 sm:col-span-4">
                      <label class="block text-sm font-medium text-gray-700">Description</label>
                      <input type="text" id="des" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md p-2">
                    </div>
      
                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <a href="/admin">
                    <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-yellow-600">
                      Save
                    </button>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
        `;
    },
    afterRender() {
      const formAdd = document.querySelector("#form-add-post");
      const imgPost = document.querySelector("#img-post");
  
      imgPost.addEventListener("change", (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "hjpfbmrh");
  
        axios({
          url: "https://api.cloudinary.com/v1_1/builong/image/upload",
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-formendcoded",
          },
          data: formData,
        }).then((res) => {
          formAdd.addEventListener("submit", (e) => {
            e.preventDefault();
            add({
              title: document.querySelector("#title-post").value,
              img: res.data.secure_url,
              des: document.querySelector("#des").value
            })
              .then(() => document.location.href="/listPost")
              .catch((error) => console.log(error));
          });
        });
      });
    },
}
export default AddPosts;