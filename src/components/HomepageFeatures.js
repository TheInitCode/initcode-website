import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Comprometimento é tudo!",
    jpg: "./dev.jpg",
    description: (
      <>
        Estamos comprometidos em fornecer a você recursos valiosos que abordam
        desde os conceitos mais básicos até os temas mais avançados da
        programação e da lógica de programação. Nossos vídeos são cuidadosamente
        elaborados para orientar você em sua jornada de aprendizado, permitindo
        que você construa uma base sólida e confiante no vasto universo da
        codificação.
      </>
    ),
  },
  {
    title: "Ficou fácil encontrar o que você precisa",
    jpg: "./way.jpg",
    description: (
      <>
        Na InitCode, acreditamos que o conhecimento deve ser livre e acessível a
        todos. É por isso que todos os nossos recursos estão disponíveis
        gratuitamente, 24 horas por dia, 7 dias por semana. Não importa onde
        você esteja ou qual seja o seu nível de experiência, estamos aqui para
        ajudá-lo a alcançar seus objetivos de aprendizado em programação.
      </>
    ),
  },
  {
    title: "E ai, bora lá?",
    jpg: "./done.jpg",
    description: (
      <>
        Então, se você está pronto para dar os primeiros passos emocionantes no
        mundo da programação, junte-se a nós no InitCode. Vamos começar essa
        jornada juntos e desbloquear o potencial ilimitado que a codificação
        oferece. Estamos ansiosos para sermos parte do seu sucesso!
      </>
    ),
  },
];

function Feature({ jpg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.image} src={jpg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => {
              return <Feature key={idx} {...props} />;
            })}
          </div>
        </div>
      </section>
      <div className={styles.buttons}>
        <Link className="button button--primary button--lg" to="/docs/Cursos/git">
          Confira nossos cursos
        </Link>
      </div>
    </div>
  );
}
