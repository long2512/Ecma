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
const render = (content) =>{
    document.querySelector("#app").innerHTML=content;
}

router.on({
    "/": () => {
        render(HomePage.print());
    },
    "/about": () => {
        render(AboutPage.print());
    },
    "/Signin": () =>{
        render(Signin.print());
    },
    "/Signup": () =>{
        render(Signup.print());
    },
    "/news": () => {
        render(NewPage.print());
    },
    "/admin": () => {
        render(Admin.print());
    },
    "/addNews": () => {
        render(AddNews.print());
    },
    "/editNews/:id": ({data}) => {
        const { id } = data;
        render(EditNews.print(id));
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        render(DetailNewPage.print(id));
    },
})

router.resolve();


