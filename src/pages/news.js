import NewsList from "../component/newList";

const NewPage = {
    print(){
        return`
            ${NewsList.print()};
        `;
    }
}
export default NewPage;