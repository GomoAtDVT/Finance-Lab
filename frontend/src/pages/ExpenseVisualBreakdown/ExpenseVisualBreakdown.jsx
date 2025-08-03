import Navigation from "../../components/navigation/Navigation";
import { ExpenseBarChart } from "./Chart/ExpenseBarChart";

export default function ExpenseVisualBreakdown() {
    return (
        <>
        <Navigation />
        <section className="p-10 pt-0 m-16 mt-0 h-150 items-center flex flex-col justify-between">
        <h1 className="text-2xl font-bold text-start my-4">Expense Visual Breakdown</h1>
        <ExpenseBarChart />
        </section>
        </>
    )
}