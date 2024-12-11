import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
// import Initiatives from '../components/Initiatives';
import BackToTop from '../components/BackToTop';
import PageHeader from "../components/PageHeader";
import GalleryDetail from "../components/GalleryDetail";
export default function Gallery() {
    return (
        <>  
            <Navbar />
            <PageHeader title="All Pictures" path="/gallery" name="Gallery" />
            {/* <Initiatives /> */}
            <GalleryDetail />
            <Footer />
            <BackToTop />
        </>
    );
}