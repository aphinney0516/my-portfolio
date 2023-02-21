import react from 'react'
import PortfolioCards from '../components/Cards'

import cardsAgainstApathy from '../assets/images/screenshots/CardsAgainstApathyScreenshot.png'
function Portfolio() {
    const projects = [{ id: 1, title: 'project 1', description: 'a description', image: cardsAgainstApathy }, 
    { id: 2, title: 'project 1', description: 'a description', image: cardsAgainstApathy }, 
    { id: 3, title: 'project 1', description: 'a description', image: cardsAgainstApathy }, 
    { id: 4, title: 'project 1', description: 'a description', image: cardsAgainstApathy }, 
    { id: 5, title: 'project 1', description: 'a description', image: cardsAgainstApathy },
    { id: 6, title: 'project 1', description: 'a description', image: cardsAgainstApathy }]
    return (
        <div style={{ border: '1px solid black' }}>
            <h2>Portfolio page</h2>
            <div style={{display:'flex'}}>
                {projects.map(project => {
                    return <PortfolioCards title={project.title}key={project.id}image={project.image}/>
                })}
            </div>
        </div>
    )
}

export default Portfolio;