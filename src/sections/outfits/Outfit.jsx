import Card from '../../components/Card'


const Outfit = ({outfit}) => {
  return (
    <Card className="inspiration__outfit">
      <div className="inspiration__outfit-image">
        <img src={outfit.image} alt="Outfit Image" />
      </div>
      <h4>{outfit.title}</h4>
      <p>{outfit.desc}</p>
      <div className="inspiration__outfit-look">
        <a href={outfit.look} className='btn sm' target="_blank" rel="noopener no referrer">
          Get This Look
        </a>
        <a href={outfit.similar} className='btn sm primary' target="_blank" rel="noopener no referrer">
          Shop Similar
        </a>
      </div>
    </Card>
  )
}

export default Outfit