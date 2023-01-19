import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>LDAP API endpoint microservice</title>
        <meta name="description" content="LDAP API endpoint microservice" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            LDAP API endpoint microservice &nbsp;
            <code className={styles.code}>path: /api/ldap, method: POST, body: email, password in JSON format</code>
          </p>
        </div>
      </main>
    </>
  )
}
