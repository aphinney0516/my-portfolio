import react from 'react'
import PortfolioCards from '../components/Cards'
import cardsAgainstApathy from '../assets/images/screenshots/CardsAgainstApathyScreenshot.png'
import bandwagon from '../assets/images/screenshots/bandwagonScreenshot.png'

// Center styling for the titles and description.
// Link projects sites to images (https://the-fighting-mongooses-official.github.io/Cards-Against-Apathy/)(https://bandwagon-official.herokuapp.com/)
function Portfolio() {
    const projects = [{ id: 1, title: 'Cards Against Apathy', description: 'A fitness app that gamifies exercise by using a deck of cards.', image: cardsAgainstApathy }, 
    { id: 2, title: 'Bandwagon', description: 'An event app that connects unknown bands and musicians with potential fans.', image: bandwagon }, 
    { id: 3, title: 'project 3', description: 'a description', image: cardsAgainstApathy }]
    return (
        <div style={{ border: '1px solid black'}}>
            <h2>Portfolio page</h2>
            <div style={{display:'flex'}}>
                {projects.map(project => {
                    return <PortfolioCards title={project.title}key={project.id}image={project.image}description={project.description}/>
                })}
            </div>
        </div>
    )
}

export default Portfolio;