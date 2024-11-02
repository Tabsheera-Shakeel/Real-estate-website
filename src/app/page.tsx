
import About from "@/components/about";
import Header from "../components/header";
import Services from "@/components/services";
import SliderComponent from "@/components/review";
import ContactPage from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
          <Header/>
          <About/>
          <Services/>
          <SliderComponent />
          <ContactPage/>
          <Footer/>
    </div>
  )
}
