import Header from "../Component/Header/header";
import Footer from "../Component/Footer/footer";
import Style from "./about.module.css"

const AboutPage = () =>{
    return (
      <div>
      <Header />
      <main className={Style.main}>
        <section className={Style.section}>
          <h1>About Us</h1>
          <br/>
          <p className={Style.intro}>
            At <strong>MyWebsite</strong>, we're passionate about providing innovative solutions that empower our clients and help them reach their full potential. Since our founding, we’ve been dedicated to creating strategies that drive success, efficiency, and growth for businesses of all sizes. Our team combines expertise with creativity to deliver results that make a real impact.
          </p>
        </section>

        <section className={Style.section}>
          <h2>Our Mission</h2>
          <br/>
          <p>
            Our mission is simple: to make powerful, high-quality solutions accessible to everyone. We believe in the importance of understanding our clients' unique needs and crafting custom approaches to meet them. With a focus on transparency, integrity, and innovation, we’re here to help you succeed in a rapidly changing digital landscape.
          </p>
        </section>
      </main>
      <Footer />
    </div>
    )
}

export default AboutPage;