import './inspiration.css'
import OutfitsCategories from './OutfitsCategories'
import Outfits from './Outfits'
import data from './data'
import {useState} from 'react'

const Inspiration = () => {
    const [outfits, setOutfits] = useState(data);

    const categories = data.map(item => item.category);
    const uniqueCategories = ["all", ...new Set(categories)]

    const filterOutfitsHandler = (category) => {
      if(category === "all"){
        setOutfits(data);
        return;
      }
      const filterOutfits = data.filter(outfit => outfit.category === category);
      setOutfits(filterOutfits)
    }

  return (
    <section id="inspiration">
        <h2>Outfit Inspiration</h2>
        <p>
        Discover fresh, curated outfit ideas designed to spark your style creativity. 
        Whether you're drawn to cozy autumn layers, polished elegance, or effortless casual
        looks, Outfitly helps you explore trends and timeless pieces that fit your mood 
        and lifestyle. Find your next favorite look and make it your own. 
        </p>
        <div className="container inspiration__container">
            <OutfitsCategories categories={uniqueCategories} onFilterOutfits={filterOutfitsHandler}/>
            <Outfits outfits={outfits}/>
        </div>
    </section>
  )
}

export default Inspiration