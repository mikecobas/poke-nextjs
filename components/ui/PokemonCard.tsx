import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { SmallPokemon } from "@/interfaces";
import { useRouter } from "next/router";
import { ReactElement } from "react";
const PokemonCard = ({ id, name, url, img }: SmallPokemon):ReactElement => {
  const router = useRouter()
  const onClick = ()=>{
    router.push(`/name/${name}`);
  }

  return (
    <Card
      shadow="sm"
      key={id}
      isPressable
      isHoverable
      onClick={onClick}
    >
      <CardBody>
        <div className="flex items-center justify-center">
          <Image
            src={img}
            alt={`#${id} ${name}`}
            className="w-full object-cover h-[140px]"
          />
        </div>
      </CardBody>
      <CardFooter className="flex flex-row justify-between items-center">
        <p className="text-gray-400">#{id}</p>
        <p className="capitalize">{name}</p>
      </CardFooter>
    </Card>
  );
};

export default PokemonCard;
