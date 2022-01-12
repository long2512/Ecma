import Banner from "../component/banner";
import footer from "../component/footer";
import header from "../component/header";
import { postLisst } from "../src/data";


const DetailNewPage = {
    print(id){
        const result = postLisst.find((post) => post.id === id);
        return`
            <header>${header.print()}</header>
            ${Banner.print()}
            <img src="${result.img}" alt="" class="img">
            <h4>${result.title}</h4>
            <p>${result.text}</p>
            ${footer.print()}
        `;
    }
}
export default DetailNewPage;