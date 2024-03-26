// import MainTable from "../table/MainTable";
import User from "../users/User";
import DashboardTop from "./DashboardTop";


const Dashboard = () => {
    return (
        <div className="flex flex-col">
            <DashboardTop />
            <User />

        </div>
    )
}
export default Dashboard;