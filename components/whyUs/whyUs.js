import classes from "./whyUs.module.scss";

export default function WhyUs() {
  return (
    <section className={classes.section}>
      <h2>Why Photon Code Innovations</h2>
      <ul className={classes.list}>
        <li>Built by an Electrical/Electronics Engineer</li>
        <li>Designed specifically for solar installers</li>
        <li>External growth partner — not in-house staff</li>
        <li>Focused on results, not tools</li>
      </ul>
    </section>
  );
}
