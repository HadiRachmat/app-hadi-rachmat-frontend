import PublicNavbarPage from '../../../organisms/PublicNavbarPage'
import PublicFooterPage from '../../../organisms/PublicFooterPage'
import AuthLogin from '../../../organisms/AuthLogin'

const Login = () => {
  return (
    <>
      <PublicNavbarPage/>
      <div className="h-screen mx-auto flex justify-center items-center">
        <AuthLogin />
      </div>
      <PublicFooterPage/>
    </>
  )
}

export default Login
