import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Corre Solidário</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem-vindo ao <a href="https://coresolidario.vercel.app/">Corre Solidário!</a>
        </h1>

        <p className={styles.description}>
          Por aqueles que mais precisam {' '}
          <code className={styles.code}>em JF</code>
        </p>

        <div className={styles.grid}>
          <a href="https://coresolidario.vercel.app/campanhadeinverno" className={styles.card}>
            <h3>O Frio está aí! &rarr;</h3>
            <p>Campanha do agasalho clique aqui para saber como ajudar.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Corre do lanche;</h3>
            <p>Saiba como ajudar no corre de segunda!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Quentinhas</h3>
            <p>Terça-feira é dia de quentinha.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Patrocine o Corre &rarr;</h3>
            <p>
              Saiba como ser um patrocinador do Corre e ajude nas nossas ações.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ajude o {' '} Corre Solidário
          /*<img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */
        </a>
      </footer>
    </div>
  )
}
