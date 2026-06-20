import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

/*_____Homepage Hero Banner w/ Two Buttons_____*/

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg coming-soon-button"
            to="#">
            Invite Armani
          </Link>

          <Link
            className="button button--secondary button--lg"
            href="https://discord.gg/rbhfHZjGNz">
            Join Us!
          </Link>
        </div>
      </div>
    </header>
  );
}

/*__________*/

/*_____Website Tab & Homepage Customization_____*/

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} ~ mrrrrrow!  (=^･ω･^=)`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/*_____Welcome Section_____*/}
        <section className={styles.meetArmani}>
          <img
            src="/img/armani/meet_armani.jpg"
            alt="Armani"
            className={styles.armaniImage}
          />
          <div className={styles.meetArmaniText}>
            <h1>Meet Armani</h1>
            <p>
              Armani is the official mascot of Armani Bot. Known for supervising
              development from the keyboard, demanding treats during coding sessions,
              and maintaining strict quality control standards, Armani keeps the team
              focused while providing endless entertainment.
            </p>
          </div>
          <div className={styles.armaniDivider}></div>
          <div className={styles.whyabText}>
            <h1>Why Armani Bot?</h1>
            <p>
              Armani Bot is named after our beloved feline supervisor, Armani. We chose this name to reflect our commitment to quality, 
              reliability, and a touch of feline charm. Just like Armani keeps a watchful eye on our development process, Armani Bot is 
              designed to be a vigilant and dependable companion for your Discord server. We wanted an app that could do everything the 
              other bots could do and more, with some added features to help us moderate and manage our server more effectively. Plus, 
              who doesn't love a good cat pun?
            </p>
          </div>
        </section>
        {/*__________*/}
        <div className={styles.kfDivider}></div>
        {/*_____Key Features Section_____*/}
        <section className={styles.keyFeatures}>  
          <img
            src="/img/banner/features_list.png"
            alt="Features List"
          />
        </section>
      </main>
    </Layout>
  );
}

/*__________*/

