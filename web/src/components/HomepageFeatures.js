import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "API ByeCaptcha",
    Svg: require("../../static/img/undraw_captcha_simple.svg").default,
    description: (
      <>
        Resuelva facilmente el captcha que se muestra en una imagen.
      </>
    ),
  },
  {
    title: "Api Sunedu",
    Svg: require("../../static/img/undraw_captcha_raas.svg").default,
    description: (
      <>
        Obtenga información de grados y titulos de la Sunedu de manera facil y sencilla.
      </>
    ),
  },
  {
    title: "Api Sunat",
    Svg: require("../../static/img/undraw_portfolio-website_838t.svg").default,
    description: (
      <>
        Obtenga información de consulta RUC de la Sunat de manera facil y sencilla.
      </>
    ),
  },
  {
    title: "Api Placas",
    Svg: require("../../static/img/undraw_captcha_complex.svg").default,
    description: (
      <>
        Obtenga información de consulta de placas vehiculares de manera facil y sencilla.
      </>
    ),
  },  
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--3")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
