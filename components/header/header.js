import classes from "./header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Photon Code Innovations</div>
      <nav className={classes.nav}>
        <Link href="#packages">Packages</Link>
        <Link
          href="https://wa.link/85ekma"
          target="_blank"
          className={classes.btn}
        >
          WhatsApp Us
        </Link>
      </nav>
    </header>
  );
}
