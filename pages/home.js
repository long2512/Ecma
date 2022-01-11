import Banner from "../component/banner";
import footer from "../component/footer";
import header from "../component/header";
import NewsList from "../component/newList";

const HomePage = {
    print() {
        return `
        <header>${header.print()}</header>
        
        ${Banner.print()}
        
        ${NewsList.print()}
        ${NewsList.print()}

        ${footer.print()}
        
        `;
    },
};
export default HomePage;