import propTypes from 'prop-types'
// import image from '../../../assets/image1.png';
const HeaderName = ({children, isCurrent = false}) => (
  <h1 className={`sm:text-5xl text-4xl font-medium ${isCurrent? 'text-black' : ''}`}>{children}</h1>
)

HeaderName.propTypes = {
  children: propTypes.node.isRequired,
  isCurrent: propTypes.bool,
}

const PublicHomePage = () => {
  return (
    <>
        <header className='sm:grid sm:grid-cols-2 h-screen'>
          <div className='sm:my-auto mt-10 mx-2 sm:mx-20 sm:text-left text-center'>
            <p> Hallo Everyone...</p>
            <HeaderName isCurrent> I`m Hadi Rachmat </HeaderName>
            <HeaderName> Web Developer and <br /> Sofware Engineer</HeaderName>
            <p className='py-16'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quam quasi qui dolores doloribus accusantium aliquam alias mollitia odio ad!</p>
          </div>
          {/* <div className='bg-fit bg-center bg-no-repeat' style={{backgroundImage:`url(${image})`}}> */}
          <div>
            test
          </div>
        </header>
    </>
  )
}

export default PublicHomePage
