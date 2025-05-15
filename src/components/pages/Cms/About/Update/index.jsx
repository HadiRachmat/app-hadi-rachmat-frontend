import OrganismUpdateAbout from '../../../../organisms/CmsAbout/OrganismUpdateAbout'
import { useParams } from 'react-router-dom'

const UpdateAboutManagement = () => {
    const {id} = useParams()
  return (
    <>
      <OrganismUpdateAbout id={id}/>
    </>
  )
}

export default UpdateAboutManagement
