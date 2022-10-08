import './App.css';
import MainContent from './components/MainContent';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Account from './components/Account';
import PublicPage from "./components/PublicPage"
import { AuthContextProvider } from './contexts/AuthContext';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import ErrorPage from './components/ErrorPage';


function App() {
  
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />

          <Route path="/signup" element={<SignUp />} />

          <Route 
            path="/account"
            element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } />

          <Route path="/public" element={<PublicPage/>} />

          <Route  path="/main" element={<MainContent/>} />

          <Route path="*" element={ <ErrorPage /> } />

        </Routes>
      </AuthContextProvider>
    </>
    
  );
}

export default App;
