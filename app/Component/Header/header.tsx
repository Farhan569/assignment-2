import Link from 'next/link';
import Style from './header.module.css';

const Header = () => {
  return (
    <header className={Style.header}>
      <Link href="/" className={Style.logo}>MyWebsite</Link>
      <nav className={Style.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;