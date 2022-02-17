import NewsList from "../component/productsList";

const NewPage = {
    print(){
        return`
            ${NewsList.print()};
        `;
    }
}
export default NewPage;