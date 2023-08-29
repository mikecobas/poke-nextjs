import { PageProps } from "@/interfaces/global.interface";
import Head from "next/head";
import { FC } from "react";
import Navbar from "../ui/Navbar";
const origin = (typeof window === 'undefined' ? '': window.location.origin);

const Layout: FC<PageProps> = ({ children, title, description, keywords }) => {

  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Miguel Cobas" />
        <meta name="description" content={description || "info pokemon"} />
        <meta name="keywords" content={keywords || "pokemon, pokedex"} />
        <meta
          property="og:title"
          content={`Información sobre ${title}`}
        />
        <meta
          property="og:description"
          content={`Esta es la pagina sobre ${title}`}
        />
        <meta
          property="og:image"
          content={`${origin}/banner.png`}
        />
      </Head>
      <Navbar />
      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
