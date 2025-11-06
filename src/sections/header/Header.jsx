import HeaderImage from '../../assets/header.png'
import socials from './socials'
import './header.css'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__picture">
          <img src={HeaderImage} alt="Header Picture" />
        </div>
        <h3>Outfitly</h3>
        <p>Outfitly brings together the latest trends, timeless classics, and creative 
          outfit ideas to help you express your style with confidence. Whether 
          you're dressing for work, a night out, or casual weekends — find inspiration 
          that fits you.</p>
          <div className="header__cta">
            <a href="#contact" className='btn primary'>Let's talk</a>
            <a href="#inspiration" className='btn light'>Outfits</a>
          </div>
          <div className="header__socials">
            {
              socials.map(item => <a key={item.id} href={item.link} target="_blank" 
                rel="noopener noreferrer">{item.icon}</a>
              )
            }
          </div>
      </div>
    </header>
  )
}

export default Header