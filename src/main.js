import Navigo from "navigo";
import EditNews from "./component/editNews";
import AboutPage from "./pages/about";
import Admin from "./pages/admin";
import DetailNewPage from "./pages/detailNew";
import HomePage from "./pages/home";
import NewPage from "./pages/news";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import AddNews from "./component/addNews";


const router = new Navigo("/",{linksSelector:"a"});
const render = async (content,id) =>{
    document.querySelector("#app").innerHTML=await content.print(id);
}

router.on({
    "/": () => {
        render(HomePage);
    },
    "/about": () => {
        render(AboutPage);
    },
    "/Signin": () =>{
        render(Signin);
    },
    "/Signup": () =>{
        render(Signup);
    },
    "/news": () => {
        render(NewPage);
    },
    "/admin": () => {
        render(Admin);
    },
    "/addNews": () => {
        render(AddNews);
    },
    "/editNews/:id": (data) => {
        // const { id } = data;
        render(EditNews , data.data.id);
    },
    "/news/:id": ( data ) => {
        // const { id } = data;
        render(DetailNewPage,data.data.id);
    },
})

router.resolve();


