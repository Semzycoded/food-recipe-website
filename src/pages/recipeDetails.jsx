import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const RecipeDetails = () => {
  const { id } = useParams();

  const { data, isPending, error } = useQuery({
    queryKey: [id],
    queryFn: async () => {
      const res = await fetch(`https://dummyjson.com/recipes/${id}`);
      const data = await res.json();
      return data;
    },
  });

  return (
    <section>
      {isPending && <p>Loading...</p>}

      {data && (
        <div>
          <div className="w-full h-[362px] relative">
            <img
              src={data.image}
              alt=""
              className="object-cover w-full h-full"
            />
            <span className="absolute translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 font-bold text-white text-[40px]">
              {data.name}
            </span>
          </div>

          <div className="flex flex-col gap-4 mt-12 ml-20">
            <span className="font-bold text-[24px]">Ingredients</span>

            <ul className="ml-4 list-disc list-inside">
              {data.ingredients.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>

            <span className="font-bold text-[24px]">Preparation</span>
            <ol className="ml-4 list-decimal list-inside">
              {data.instructions.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ol>
          </div>
        </div>
      )}
    </section>
  );
};

export default RecipeDetails;
