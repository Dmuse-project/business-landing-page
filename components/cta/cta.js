import classes from "./cta.module.scss";

export default function CTA() {
  return (
    <section className={classes.cta}>
      <h2>Ready to Get Consistent Solar Leads?</h2>
      <a
        href="https://wa.link/85ekma"
        target="_blank"
        className={classes.primaryBtn}
      >
        Talk to Us on WhatsApp
      </a>
    </section>
  );
}
