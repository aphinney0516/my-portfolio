import react from 'react'
import PortfolioCards from '../components/Cards'
import cardsAgainstApathy from '../assets/images/screenshots/CardsAgainstApathyScreenshot.png'
import bandwagon from '../assets/images/screenshots/bandwagonScreenshot.png'
import mealTrain from '../assets/images/screenshots/mealTrainScreenshot.png'

function Portfolio() {
    const projects = [
        { 
            id: 1, 
            title: 'Cards Against Apathy', 
            description: 'A fitness app that gamifies exercise by using a deck of cards.', 
            image: cardsAgainstApathy, 
            gitHub: 'https://github.com/The-Fighting-Mongooses-Official/Cards-Against-Apathy', 
            link:  'https://the-fighting-mongooses-official.github.io/Cards-Against-Apathy/'
        },
        { 
            id: 2, 
            title: 'Bandwagon', 
            description: 'An event app that connects unknown bands and musicians with potential fans.', 
            image: bandwagon, 
            gitHub: 'https://github.com/5ynergy/bandwagon', 
            link: 'https://bandwagon-official.herokuapp.com/'},
        { 
            id: 3, 
            title: 'Meal Train', 
            description: 'A healthy eating app designed to plan daily balanced meals', 
            image: mealTrain, 
            gitHub: 'https://github.com/TrilogyHi5/meal-train', 
            link: 'https://meal-train.herokuapp.com/'
        }
    ]
    return (
        <div style={{ border: '1px solid black', height: "100vh" }}>
            <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: "space-evenly", marginTop: "2em" }}>
                {projects.map(project => {
                    return <PortfolioCards title={project.title} key={project.id} image={project.image} description={project.description} gitHub={project.gitHub} link={project.link}/>
                })}
            </div>
        </div>
    )
}

export default Portfolio;