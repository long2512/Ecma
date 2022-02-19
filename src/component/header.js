import { reRender } from "../utils";



const header = {
    print() {
      return /*html */`
      <header class="flex flex-nowrap justify-between bg-slate-100">
        <div class="px-5 py-5">
          <a href=""><img src="http://3.bp.blogspot.com/-q-W4fEE2W-s/T13S1Jv26II/AAAAAAAAC8c/xApJx0SwxRA/w1200-h630-p-k-no-nu/aaa.png" class="w-64" alt=""></a>
        </div>
        <div>
          ${localStorage.getItem('user') ? `
          <ul class="flex pt-5" id="menu">
            <li class="pt-8 text-2xl pl-3 font-mono font-bold pr-10 hover:text-red-500"><a href="/">Home</a></li>
            <li class="pt-8 text-2xl pl-3 font-mono font-bold pr-10 hover:text-red-500"><a href="/about">About</a></li>
            <li class="pt-8 text-2xl pl-3 font-mono font-bold pr-10 hover:text-red-500"><a href="/post">Post</a></li>
            <li class="pt-8 text-2xl pl-3 font-mono font-bold pr-10 hover:text-red-500">Xin chào :<span id="username"></span></li>
            <li class="pt-8 text-2xl pl-3 font-mono font-bold pr-10 hover:text-red-500" id="logout" class="cursor-pointer">Logout</li>
          </ul>`: `<ul class="flex pt-5">
          <li class="pt-8 text-2xl pl-3 font-mono font-bold pr-10 hover:text-red-500"><a href="/">Home</a></li>
          <li class="pt-8 text-2xl pl-3 font-mono font-bold pr-10 hover:text-red-500"><a href="/about">About</a></li>
          <li class="pt-8 text-2xl pl-3 font-mono font-bold pr-10 hover:text-red-500"><a href="/post">Post</a></li>
        </ul>`}
        </div>
        <div>
          <ul class="flex pt-5">
            <li class="pt-8 text-2xl pl-3 font-mono font-bold hover:text-red-500"><a href="/login"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg></a></li>
            <li class="pt-8 text-2xl pl-3 font-mono font-bold"><a href="">/</a></li>
            <li class="pt-8 text-2xl pl-3 font-mono font-bold hover:text-red-500"><a href="/register"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg></a></li>
          </ul>
        </div>
    </header> 
      `
    },
    afterRender(){
      if(document.querySelector('#logout')){
         
         if(JSON.parse(localStorage.getItem('user')).id === 1) {
          document.querySelector('#menu').innerHTML=`<ul class="flex pt-5" id="menu">
          <li class="pt-8 text-2xl pl-3 font-mono font-bold pr-10 hover:text-red-500"><a href="/">Home</a></li>
          <li class="pt-8 text-2xl pl-3 font-mono font-bold pr-10 hover:text-red-500"><a href="/about">About</a></li>
          <li class="pt-8 text-2xl pl-3 font-mono font-bold pr-10 hover:text-red-500"><a href="/post">Post</a></li>
          <li class="pt-8 text-2xl pl-3 font-mono font-bold pr-10 hover:text-red-500"><a href="/admin">Admin</a></li>
          <li class="pt-8 text-2xl pl-3 font-mono font-bold pr-10 hover:text-red-500">Xin chào :<span id="username"></span></li>
          <li class="pt-8 text-2xl pl-3 font-mono font-bold pr-10 hover:text-red-500" id="logout" class="cursor-pointer">Logout</li>
        </ul>`
         }else{
           
         }
        document.querySelector('#username').innerHTML=JSON.parse(localStorage.getItem('user')).username;
         const logout = document.querySelector('#logout');
         logout.addEventListener('click', ()=>{
          localStorage.removeItem('user');
          reRender(header,"#header");
         });
         
      }
    }
};
export default header;