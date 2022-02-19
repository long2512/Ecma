import Banner from "../component/banner";
import footer from "../component/footer";
import header from "../component/header";

const AboutPage = {
    print(){
        return /* html */ `
        <header>${header.print()}</header>
        ${Banner.print()}
        <h1>Giới thiệu</h1>
        <p>Vinh danh 295 sinh viên Fpoly học kỳ Spring 2018
            Với sự tham gia của các của rất trong các chuyên gia trong nhiều lĩnh vực ,kinh doanh,chương trình đã thu hút đông đảo sinh viên Fpoy tham dự</p>
        ${footer.print()}
        `
    },
    afterRender(){
        header.afterRender();
    }
};
export default AboutPage;