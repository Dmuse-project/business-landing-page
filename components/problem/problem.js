import classes from "./problem.module.scss";

export default function Problems() {
  return (
    <section className={classes.section}>
      <h2>Most Solar Businesses Struggle With This</h2>
      <ul className={classes.list}>
        <li>Leads come but don’t convert</li>
        <li>No predictable monthly inquiries</li>
        <li>Customers price-shop and disappear</li>
        <li>No follow-up or tracking system</li>
      </ul>
    </section>
  );
}
