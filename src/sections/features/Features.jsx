import data from './data'
import './features.css'
import Card from '../../components/Card'


const Features = () => {
  return (
    <section id="features">
        <h2>Why You'll Love Outfitly</h2>
        <p>We offer you a complete style experience designed to inspire, organize, 
        and elevate your everyday look.</p>
        <div className="container features__container">
            {
                data.map(item => (
                    <Card key={item.id} className="feature light">
                        <div className="feature__icon">{item.icon}</div>
                        <div className="feature__details">
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    </Card>
                ))
            }
        </div>
    </section>
  )
}

export default Features