import CategoryButton from "./CategoryButton"
import {useState} from 'react'

const OutfitsCategories = ({categories, onFilterOutfits}) => {
const [activeCategory, setActiveCategory] = useState('all');

const changeCategoryHandler = (activeCat) => {
  setActiveCategory(activeCat);
  onFilterOutfits(activeCat);
}

  return (
    <div className="inspiration__categories">
      {
        categories.map(category => (
          <CategoryButton key={category} category={category} 
          onChangeCategory={() => changeCategoryHandler(category)} 
          className={`btn cat__btn ${activeCategory == category ? 'primary' : 'white'}`}/>
        ))
      }
    </div>
  )
}

export default OutfitsCategories