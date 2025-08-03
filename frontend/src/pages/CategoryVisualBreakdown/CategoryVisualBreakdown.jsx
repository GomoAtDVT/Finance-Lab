import Navigation from "../../components/navigation/Navigation";
import CategoryDoughnutChart from "./CategoryChart/CategoryDoughnutChart";
import ExpCategoryDoughnutChart from "./CategoryChart/ExpCategoryDoughnutChart";

export default function CategoryVisualBreakdown() {
    return (
        <>
        <Navigation />
        <section className="p-10 pt-0 m-16 mt-0 h-150 items-center flex flex-col justify-between">
        {/* <h1 className="text-2xl font-bold text-center my-6">Category Visual Breakdown</h1> */}
        <section className="flex flex-row  justify-between">
        <div className="h-150 w-150">
        <h1 className="text-2xl font-bold  my-4">Income Categories</h1>
        <CategoryDoughnutChart />
        </div>
        <div className="h-150 w-150">
        <h1 className="text-2xl font-bold my-4">Expense Categories</h1>
        <ExpCategoryDoughnutChart />
        </div>
        </section>
        </section>
        </>
    )
}