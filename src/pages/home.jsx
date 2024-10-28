import Banner from "../components/banner";
import RecipeList from "../components/recipeList";

const Home = () => {
  return (
    <div>
      <Banner>
        Get inspired, cook with passion and enjoy <br /> unforgettable moments
        at the table.
      </Banner>

      <section className="py-[77px] px-3">
        <div className="flex flex-col items-center gap-[58px]">
          <span className="font-bold text-[38px]">Most Searched Recipes</span>

          <RecipeList />
        </div>
      </section>
    </div>
  );
};

export default Home;
