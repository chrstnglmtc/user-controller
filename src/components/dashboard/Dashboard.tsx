import MainTable from "../table/MainTable";
import User from "../users/User";
import DashboardTop from "./DashboardTop";


const Dashboard = () => {
    return (
        <div className="flex flex-col">
            <h1>User List</h1>
            <DashboardTop />
            <User />
            <MainTable />
        </div>
    )
}
export default Dashboard;