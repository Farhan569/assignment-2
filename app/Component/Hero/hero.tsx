import Style from './hero.module.css';

const Hero = () => {
  return (
    <section className={Style.hero}>
      <div className={Style.content}>
        <h1>Welcome to MyWebsite</h1>
        <p>We create solutions to help you succeed.</p>
      </div>
    </section>
  );
};

export default Hero;
