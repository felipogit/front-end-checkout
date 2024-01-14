import { FormCheckout } from "../../Componets/FormCheckout"
import { Header } from "../../Componets/Header"
import { StyledDashboard } from "./styled"

export const Dashboard = () => {

    return (
        <StyledDashboard>
        <Header />
        <FormCheckout />
        </StyledDashboard>
    )
}
