import MainTable from "../table/MainTable";
import DashboardTop from "./DashboardTop";


const Dashboard = () => {
    return (
        <div className="flex flex-col">
            <DashboardTop />
            <MainTable />

        </div>
    )
}
export default Dashboard;