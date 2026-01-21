// import Hero from "@/components/hero/hero"
// import classes from "./Home.module.scss"
// import Problems from "@/components/problem/problem"
// import WhyUs from "@/components/whyUs/whyUs"
// import CTA from "@/components/cta/cta"
// import Packages from "@/components/packages/packages"
// import Solution from "@/components/solution/solution"
// import Footer from "@/components/footer/footer"
// import Header from "@/components/header/header"

// export default function Home() {
//    return <>
//    <main className={classes.container}>
//     <Header/>
//     <Hero />
//     <Problems/>
//     <Solution />
//     <Packages />
//     <WhyUs />
//     <CTA />
//     <Footer />
//    </main>


   
//    </>
// }



"use client";

import styles from "./page.module.scss";
import { useEffect } from "react";


export default function Home() {

  useEffect(() => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.show);
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach(section => observer.observe(section));
}, []);

  return (
    <main className={styles.container}>
      
      {/* HERO */}
      <section className={styles.hero}>
        <span className={styles.badge}>For Solar & Renewable Energy Companies</span>
        <h1>
          Get <span>20–50 Serious Solar Buyers</span> Every Month
          Using Ads, AI & Automated Follow-Ups
        </h1>
        <p>
          Photon Code Innovations helps solar businesses turn ads into
          predictable customers — not wasted leads.
        </p>

        <a
          href="https://wa.link/gnbpjc"
          className={styles.primaryBtn}
        >
          Get More Customers →
        </a>
      </section>

      {/* PROBLEM */}
      <section className={styles.problem}>
        <h2>You’re Losing Money If…</h2>
        <ul>
          <li>Your WhatsApp gets inquiries but no follow-up</li>
          <li>You run ads but attract unserious buyers</li>
          <li>You rely only on referrals</li>
          <li>You’re busy installing instead of selling</li>
        </ul>
      </section>

      {/* SOLUTION */}
      <section className={styles.solution}>
        <h2>The AI Solar Customer Acquisition System</h2>

        <div className={styles.steps}>
          <div>
            <span>01</span>
            <h3>Targeted Ads</h3>
            <p>Facebook, Instagram & TikTok ads focused on serious buyers.</p>
          </div>

          <div>
            <span>02</span>
            <h3>High-Converting Landing Page</h3>
            <p>Fast Next.js page built to convert clicks into leads.</p>
          </div>

          <div>
            <span>03</span>
            <h3>AI WhatsApp Automation</h3>
            <p>Leads are followed up automatically until they’re ready.</p>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className={styles.offer}>
        <h2>AI Solar Accelerator</h2>
        <p className={styles.price}>₦250,000 / month</p>

        <ul>
          <li>200–400 qualified solar leads monthly</li>
          <li>Ads management (FB / IG / TikTok)</li>
          <li>High-converting Next.js landing page</li>
          <li>AI WhatsApp & email follow-ups</li>
          <li>Monthly optimization & reporting</li>
        </ul>

        <a
          href="https://wa.link/gnbpjc"
          className={styles.secondaryBtn}
        >
          Start Getting Customers
        </a>
      </section>

      {/* WHY YOU */}
      <section className={styles.why}>
        <h2>Why Photon Code Innovations?</h2>
        <p>
          We don’t build websites.  
          We build <strong>customer-generating systems</strong>.
        </p>

        <div className={styles.points}>
          <span>Solar-focused only</span>
          <span>Ads + AI + automation</span>
          <span>Built for revenue, not vanity</span>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.cta}>
        <h2>Ready to Stop Chasing Leads?</h2>
        <p>Let’s build a system that brings customers to you.</p>

        <a
          href="https://wa.link/gnbpjc"
          className={styles.primaryBtn}
        >
          Book Free Strategy Call →
        </a>
      </section>

    </main>
  );
}



