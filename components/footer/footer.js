import classes from "./footer.module.scss"
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <p>© 2026 Photon Code Innovations</p>
      <p>
        WhatsApp: <Link href="https://wa.link/85ekma">Chat Now</Link> | Email: info@photoncodeinnovations.com
      </p>
      <p>We work exclusively with solar installation businesses.</p>
    </footer>
  );
}