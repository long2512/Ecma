import Navigo from "navigo";
import EditNews from "./component/editProducts";
import AboutPage from "./pages/about";
import Admin from "./pages/admin";
import DetailNewPage from "./pages/detailProducts";
import HomePage from "./pages/home";
import NewPage from "./pages/news";
import AddNews from "./component/addProducts";
import Login from "./pages/login";
import Register from "./pages/register";
import listproducts from "./pages/listproducts";


const router = new Navigo("/",{linksSelector:"a"});
const render = async (content,id) =>{
    document.querySelector("#app").innerHTML=await content.print(id);
    if(content.afterRender){
        content.afterRender(id);
    }
}

router.on({
    "/": () => {
        render(HomePage);
    },
    "/about": () => {
        render(AboutPage);
    },
    "/login": () =>{
        render(Login);
    },
    "/register": () =>{
        render(Register);
    },
    "/news": () => {
        render(NewPage);
    },
    "/listproducts": () => {
        render(listproducts);
    },
    "/admin": () => {
        render(Admin);
    },
    "/addProducts": () => {
        render(AddNews);
    },
    "/editProducts/:id": (data) => {
        // const { id } = data;
        render(EditNews , data.data.id);
    },
    "/news/:id": ( data ) => {
        // const { id } = data;
        render(DetailNewPage,data.data.id);
    },
})

router.resolve();


