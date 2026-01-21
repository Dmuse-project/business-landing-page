import classes from "./hero.module.scss"

export default function Hero() {
    return <>
      <section className={classes.hero}>
      <h1>
        We Help <span>Solar Installation Businesses</span><br />
        Get Consistent Buyer Inquiries
      </h1>

      <p>
        Built by an Electrical/Electronics Engineer who understands
        how solar customers think, budget, and buy.
      </p>

      <a
        href="https://wa.me/234XXXXXXXXXX"
        target="_blank"
        className={classes.primaryBtn}
      >
        Book Free Solar Growth Call
      </a>
    </section>
    </>
}
