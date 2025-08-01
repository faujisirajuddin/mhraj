const { default: DashboardLayout } = require("./layout/DashboardLayout")
const { default: RoleTable } = require("./roleTable")

const RoleManagement = () => {
    return(
        <DashboardLayout>
            <RoleTable/>
        </DashboardLayout>
    )
}

export default RoleManagement