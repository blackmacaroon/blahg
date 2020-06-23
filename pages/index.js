import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
return (
  <Layout home>
    <Head>
        <title>{siteTitle}</title>
    </Head>
    <hr className={utilStyles.styleTwo}/>
    <section className={utilStyles.headingSm}>Disclaimer: This content may be offensive to some, it stems entirely from a highly sensitive, over 30, straight, married, caucasian female and deals with traumatic topics including: child-free life, brain cancer, implicit white supremacy, eating disorders, self-mutilation, mental illness, drinking, web development, imposter syndrome, death and dogs. 
    </section>
    <hr className={utilStyles.styleTwo}/>
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>A complainer's journal.</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
          <Link href="/posts/[id]" as={`/posts/${id}`}>
            <a>{title}</a>
          </Link>
          <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
        </li>
        ))}
      </ul>
    </section>
  </Layout>
)
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}