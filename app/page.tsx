import Header from "./Component/Header/header";
import Hero from "./Component/Hero/hero";
import Footer from "./Component/Footer/footer";
import Style from "./page.module.css"

const HomePage = () => {
    return(
        <div className={Style.container}>
        <Header/>
        <Hero/>
        <main className={Style.content}></main>
        <Footer/>
        </div>
    )
}

export default HomePage