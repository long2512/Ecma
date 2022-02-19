import Banner from "../component/banner";
import footer from "../component/footer";
import header from "../component/header";
import NewPost from "../component/postList";

const postPage = {
    async print(){
        return /*html */ `
        <header id="header">${header.print()}</header>

        ${Banner.print()}

        ${ await NewPost.print()}

        ${footer.print()}
        
        `;
    },
    afterRender(){
        header.afterRender();
    }
}
export default postPage;