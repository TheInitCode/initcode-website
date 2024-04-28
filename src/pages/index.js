import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Link from "@docusaurus/Link";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className={styles.container}>
        <h1 className={clsx("hero__title", styles.test)}>Init Code</h1>

        <div className={clsx("row", styles.bannerContainer)}>
          <img className={clsx("charImage", styles.charImage)} src={"./character.png"} alt={"pq?"} />
          <div
            className={clsx(
              styles.bannerContainerText
            )}
          >
            <h2>Bem-vindo</h2>
            Sua porta de entrada para o mundo da programação! Aqui no InitCode,
            acreditamos que a programação é para todos. Seja você um iniciante
            absoluto ou alguém que já se aventurou no mundo do código, estamos
            aqui para ajudá-lo(a) a desvendar os mistérios da programação de uma
            maneira acessível, amigável e gratuita.
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/cursos"
              >
                Nossos Cursos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title={`Init Code`} description="Programação para todos!">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
