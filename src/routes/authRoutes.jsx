import {Routes, Route} from 'react-router-dom';
import AuthPage from '../components/templates/Auth';
import Login from '../components/pages/Auth/Login';

const AuthRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<AuthPage />}>
            <Route index path="/login" element={<Login />}/>

        </Route>
      </Routes>
    </>
  )
}

export default AuthRoutes
