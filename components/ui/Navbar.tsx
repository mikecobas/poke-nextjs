import { useTheme } from "next-themes";
import { Spacer, Link } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";
const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0x 20px",
      }}
      className="dark dark:bg-black  bg-gray-900 text-white"
    >
      <Link
        href="/"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "start",
        }}
        as={NextLink}
      >
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
          alt="icono app"
          width={70}
          height={70}
        />
        <h1 className="text-white">P</h1>
        <h3 className="text-white">okemón</h3>
      </Link>

      <Link href="/favorites" as={NextLink} style={{marginRight:16}}>
        <h3 className="text-white">Favoritos</h3>
      </Link>
    </div>
  );
};

export default Navbar;
