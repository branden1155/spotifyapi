import LoginPage from './Pages/loginPage'
import Search from './Components/Search'

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return ( code ? <Search code={code} /> : <LoginPage /> );
}

export default App;
