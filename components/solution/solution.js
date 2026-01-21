import classes from "./solution.module.scss";

export default function Solution() {
  return (
    <section className={classes.sectionAlt}>
      <h2>Our Solar Growth System</h2>
      <p>
        We build and manage a complete digital lead system:
      </p>

      <div className={classes.flow}>
        <span>Ads</span> → <span>Landing Page</span> → <span>WhatsApp Automation</span> → <span>Qualified Buyer</span>
      </div>
    </section>
  );
}
