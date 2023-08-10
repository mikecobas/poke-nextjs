import { PageProps } from "@/interfaces/global.interface";
import Head from "next/head";
import { FC } from "react";


const Layout: FC<PageProps> = ({children, title, description, keywords}) => {
  return (
  <>
    <Head>
      <title>{title || 'Pokemon App'}</title>
      <meta name="author" content="Miguel Cobas" />
      <meta name="description" content={description || 'info pokemon'} />
      <meta name="keywords" content={keywords || 'pokemon, pokedex'}/>
    </Head>
    {/*navbar*/}
    <main>
      {children}
    </main>
  </>);
};


export default Layout