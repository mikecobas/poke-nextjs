import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { SmallPokemon } from "@/interfaces";
import { useRouter } from "next/router";
import { ReactElement } from "react";
interface PokeFav{
  id:number,
}
const FavoriteCardPokemon = ({ id }: PokeFav):ReactElement => {
  const router = useRouter()
  const onClick = ()=>{
    router.push(`/pokemon/${id}`);
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
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt={`#${id}`}
            className="w-full object-cover h-[140px]"
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default FavoriteCardPokemon;
