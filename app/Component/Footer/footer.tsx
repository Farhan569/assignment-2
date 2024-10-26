import Style from './footer.module.css';

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <p>&copy; {new Date().getFullYear()} Farhan. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
