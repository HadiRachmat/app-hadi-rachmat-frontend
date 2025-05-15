import { useParams } from "react-router-dom"
import OrganismUpdateHero from "../../../../organisms/CmsHero/OrganismUpdateHero"
import MoleculesTitle from "../../../../molecules/MoleculesTitle"


const UpdateHero = () => {
  const {id} = useParams()
  return (
    <>
      <div>
        <div className="text-center"><MoleculesTitle/></div>
        <OrganismUpdateHero id={id}/>
      </div>
    </>
  )
}

export default UpdateHero
