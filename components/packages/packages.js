import classes from "./packages.module.scss";

export default function Packages() {
  return (
    <section className={classes.sectionAlt} id="packages">
      <h2>Our Core Packages</h2>

      <div className={classes.cards}>
        <div className={classes.card}>
          <h3>Starter Lead System</h3>
          <p>Capture and follow up on every inquiry</p>
        </div>

        <div className={`${classes.card} ${classes.featured}`}>
          <h3>Growth Funnel</h3>
          <p>Consistent, qualified solar buyer inquiries</p>
        </div>

        <div className={classes.card}>
          <h3>Scale System</h3>
          <p>High-volume leads for established firms</p>
        </div>
      </div>
    </section>
  );
}
