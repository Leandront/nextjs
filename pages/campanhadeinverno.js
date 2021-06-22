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
          O Frio está aí<a href="https://coresolidario.vercel.app/">!</a>
        </h1>

        <p className={styles.description}>
          Não tem um cobertor sobrando, compre um para doar seguindo os passos abaixo: {' '}
          <code className={styles.code}></code>
        </p>

        <div className={styles.grid}>
          <a href="https://coresolidario.vercel.app/campanhadeinverno" className={styles.card}>
            <h3>Selecionamos alguns sites conhecidos &rarr;</h3>
            <p>Escolha uma das opções para compra um cobertor.</p>
          </a>

          <a href="" className={styles.card}>
            <h3>Endereço de entrega &rarr;</h3>
            <p>Ao comprar coloque o nosso endereço para recebermos o cobertor!</p>
          </a>

          <a
            href="https://lista.mercadolivre.com.br/cobertor-mata-para-doa%C3%A7%C3%A3o#D[A:cobertor%20mata%20para%20doa%C3%A7%C3%A3o]"
            className={styles.card}
          >
            <h3>Mercado Livre &rarr;</h3>
            <p>Para ver as opções do Mercado Livre clique aqui.</p>
          </a>

          <a
            href="https://www.americanas.com.br/produto/3293039207?pfm_carac=cobertor-manta&pfm_index=8&pfm_page=search&pfm_pos=grid&pfm_type=search_page&tamanho=%5BCasal%5D"
            className={styles.card}
          >
            <h3>Lojas Americanas &rarr;</h3>
            <p>
            Para ver as opções nas Lojas Americanas clique aqui.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://coresolidario.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ajude o {' '} Corre Solidário
          
        </a>
      </footer>
    </div>
  )
}
