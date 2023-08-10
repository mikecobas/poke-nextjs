import { NextPage } from "next";
import { Button } from "@nextui-org/button";
import { ThemeSwitcher } from "@/components/ThemeSwitcher/ThemeSwitcher";
import Layout from "../components/layouts/Layout";

const HomePage: NextPage = () => {
  return (
    <Layout title="Listado de Pokemons">
      
        <ThemeSwitcher />

      <Button variant="shadow" color="success">
        HOLA BUTOON
      </Button>
    </Layout>
  );
};

export default HomePage;
