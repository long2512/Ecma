import '../style.css';
import { menuList } from './data';
import { postLisst } from './data';


const menuItem = document.querySelector('#menu');
const postItem = document.querySelector('#post');
const actite = document.querySelector('#actite');



const showMenu = () =>{
  const menu = menuList.map((x)=>
    `
    <li><a href="" class="menu_link hover:bg-cyan-500 mx-4 text-white">${x}</a></li>
    `
  ).join("");
  if(menuItem){
    menuItem.innerHTML=menu;
  }
  
}
showMenu();

const showPost = () =>{
  const post = postLisst.map((x)=>
  `
  <div class="col  border-black-600 p-4 text-left border">
      <img src="${x.img}" alt="" class="m-auto">
      <h4 class="uppercase text-[#c97802] py-2 font-medium">${x.title}</h4>
      <p>${x.text}</p>
  </div>
  `
  ).join("");
  if(showPost){
    postItem.innerHTML = post;
  }
  if(actite){
    actite.innerHTML=post;
  }
}
showPost();
