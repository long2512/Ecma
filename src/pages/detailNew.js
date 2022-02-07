
import Banner from "../component/banner";
import footer from "../component/footer";
import header from "../component/header";
import { postLisst } from "../data";
import axios from "axios";


const DetailNewPage = {
    async print(id){
        const { data } = await axios.get(`https://5e79b4b817314d00161333da.mockapi.io/posts/${id}`);
        return`
            <header>${header.print()}</header>
            ${Banner.print()}
            <img src="${result.img}" alt="" class="mt-4">
            <h4>${result.title}</h4>
            <p>${result.text}</p>
            ${footer.print()}
        `;
    }
}
export default DetailNewPage;