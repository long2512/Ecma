import Navigo from "navigo";
import AboutPage from "../pages/about";
import DetailNewPage from "../pages/detailNew";
import HomePage from "../pages/home";
import NewPage from "../pages/news";


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
    "/news": () => {
        render(NewPage.print());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        render(DetailNewPage.print(id));
    },
})

router.resolve();


