import heroImg from './assets/undrawHero.svg';
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            omnis magnam magni esse harum alias corporis nemo, in ipsa dolorum
            sapiente voluptatem modi consequatur voluptate consectetur delectus
            quisquam. Laborum nulla non, nam eos nihil culpa?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
