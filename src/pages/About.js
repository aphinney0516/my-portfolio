import react from 'react'
// Headshot to the left with bio next to it on the right in the homepage font
import brandedHeadshot from '../assets/images/headshots/brandedHeadshot.jpeg'
function About() {
    return (
        <div style={{height: "100vh", padding: "2em", fontFamily:"'Bad Script', cursive", textAlign: 'center', fontSize: "19px"}} className='aboutContainers'>
            <img src={brandedHeadshot} alt='Branded Headshot' style={{width:'50%', margin:"0 2em", height:'auto', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2)', float: "left"}} />
            <h3>Get to know Andrew</h3>
            <p>
                Andrew Phinney was born and raised in Bangor, Maine, then moved to the midwest to begin the college and career portion of his life. During his college years he recieved a BA in Church Music from Baptist Bible College and an MA in Middle School Curriculum and Instruction from Drury University. He also spent some time studying Computer Science and Counseling. With this varied educational background, Andy has work experience as a youth director and an educator. While working within the educational field he taught a hybrid course in middle school English. He also spent time teaching Chinese students English online through VIPkid. Recently Andy moved to Chicago to begin a new career path, which led to his enrollment at Northwestern Universitv's Full Stack Web Development and Coding program. In the future he hopes to put his dynamic background to use as a web developer.
            </p>
        </div>
    )
}

export default About;