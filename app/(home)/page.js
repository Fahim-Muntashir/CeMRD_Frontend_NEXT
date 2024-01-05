import Banner from "../../components/home/Banner";
import About from "../../components/home/About";
import Challange from "../../components/home/Challange";
import Connect from "../../components/home/Connect";
import Blog from "../../components/home/Blog";
import Feature from "../../components/home/Feature";
import States from "../../components/home/States";
import Faq from "../../components/home/Faq";

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <About></About>
      <Challange></Challange>
      <Connect></Connect>
      <Blog></Blog>
      <Feature></Feature>
      <States></States>
      <Faq></Faq>
    </main>
  );
}
