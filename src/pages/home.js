import Banner from "../component/banner";
import footer from "../component/footer";
import header from "../component/header";
import NewsList from "../component/productsList";

const HomePage = {
    async print() {
        return `
        <header id="header">${header.print()}</header>
        
        ${Banner.print()}
        
        ${ await NewsList.print()}

        ${footer.print()}
        
        `;
    },
    afterRender(){
        header.afterRender();
    }
};
export default HomePage;