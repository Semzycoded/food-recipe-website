import { useQuery } from "@tanstack/react-query";
import RecipeCard from "./recipeCard";
import Skeleton from "./sleketon";

const RecipeList = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["Higest Rating"],
    queryFn: () =>
      fetch(
        "https://dummyjson.com/recipes?sortBy=rating&order=desc&limit=3"
      ).then((res) => res.json()),
  });
  
  const arr = Array(3).fill(null)
  return (
    <div className="flex items-center gap-[20px] justify-between">
      {data &&
        data.recipes.map((recipe) => {
          return <RecipeCard key={recipe.id} recipe={recipe} />;
        })}

        {
          isPending && arr.map((_,i)=>{
            return <Skeleton key={i}/>
          })
        }
    </div>
  );
};

export default RecipeList;
