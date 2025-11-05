import Outfit from './Outfit'

const Outfits = ({outfits}) => {
  return (
    <div className="inspiration__outfits">
        {
            outfits.map(outfit => (
                <Outfit key={outfit.id} outfit={outfit}/>
            ))
        }
    </div>
  )
}

export default Outfits