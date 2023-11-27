import Head from "next/head";
import React, { FC } from "react";
import { Navbar } from "../../ui";
import styles from "./styles.module.css";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const origin = (typeof window !== "undefined" && window.location.origin) || "";

const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Diego Burlando" />
        <meta name="description" content="Infomación sobre el pokémon XXXXX" />
        <meta
          name="keywords"
          content="pokemon, pikachu, charmander, bulbasaur"
        />
        <meta
          property="og:title"
          content={`Información sobre el pokémon ${title}`}
        />
        <meta
          property="og:description"
          content={`Esta es la página ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
