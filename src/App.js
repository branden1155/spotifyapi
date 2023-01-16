import LoginPage from './Pages/loginPage'
import Dashboard from './Pages/Dashboard'

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return (
    code ? <Dashboard code={code} /> : <LoginPage />
  );
}

export default App;
