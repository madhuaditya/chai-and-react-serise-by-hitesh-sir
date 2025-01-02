
import UserContextProvider from "./context/UserContextProvider.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";


function App() {
  return (
    <UserContextProvider  >
     <div className={'bg-gray-600'}>
         <Login></Login>
         <Profile></Profile>
     </div>

    </UserContextProvider>
  )
}

export default App
