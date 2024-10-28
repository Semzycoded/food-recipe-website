import { BiDish } from "react-icons/bi";
import { BsGraphUp } from "react-icons/bs";
import { CiClock1 } from "react-icons/ci";
import { PiCookingPotLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const obj = {
    img: "Featured image.png",
    title: "Waffles",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem et quos dolore aliquam?",
  };
  return (
    <div className="rounded-[33px] w-[403px] h-[473px] overflow-hidden">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-[212px] object-cover bg-gray-600"
      />
      <div className="p-3 flex flex-col gap-10 items-start h-full bg-[var(--white-200)] w-full">
        <div className="flex flex-col gap-[18px] w-full">
          <span className="font-bold text-[32px]">{recipe.name}</span>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CiClock1 />
              <span>{recipe.prepTimeMinutes} Mins.</span>
            </div>


            <div className="flex items-center gap-2">
              <PiCookingPotLight/>
              <span>{recipe.cookTimeMinutes} Mins.</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <BsGraphUp size={13}/>
              <span>{recipe.difficulty}</span>
            </div>


            <div className="flex items-center gap-2">
              <BiDish/>
              <span>{recipe.cuisine}</span>
            </div>
          </div>

        </div>

        <Link
          to={`/recipeDetails/${recipe.id}`}
          className="font-bold text-[20px] px-[33px] py-2 rounded-[32px] bg-[#FFDB63]"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
