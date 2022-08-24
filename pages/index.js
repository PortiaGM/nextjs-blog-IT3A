import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am Portia Medina. I am currently a 20-year old IT student who resides in Sta Ana, Pampanga. 
        I learned how to edit videos in 6th grade and that has been my favorite hobby ever since. 
        In addition, I love eating desserts like pancakes and listening to songs that usually have a 
        genre of rock or electropop.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
