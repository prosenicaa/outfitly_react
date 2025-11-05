import data from './data'
import FAQ from './FAQ'
import './faqs.css'

const FAQs = () => {
  return (
    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <p>These are some of the most common questions we receive from our users. 
        Click on a question to reveal the answer, and if you don't see what you're 
        looking for, feel free to reach out to us anytime.
      </p>
      <div className="container faqs__container">
        {
          data.map(item => (
            <FAQ key={item.id} faq={item}/>
          ))
        }
      </div>
      </section>
  )
}

export default FAQs