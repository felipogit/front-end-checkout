import { I18nProvider } from "react-aria-components"
import { Dashboard } from "./pages/dashboard"
import GlobalStyle from "./styles/GlobalStyle"

const App = () => {

  return (

    <I18nProvider locale="pt-BR">
      <GlobalStyle />
      <Dashboard />
    </I18nProvider>

  )
}

export default App
