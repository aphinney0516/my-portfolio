import react from 'react'
// Style this so that it fits the page better, and the header is centered
import andrewPhinneyResume from '../assets/images/screenshots/andrewPhinneyResume.png'
function Resume (){
    return (
        <div>
            <h2>Click to go to resume</h2>
            <a href='https://docs.google.com/document/d/19VjcEoveKGQzFi6GnfdUQePtJzv8EL_3/edit?usp=sharing&ouid=105705104423119930984&rtpof=true&sd=true' target='_blank' rel='nonreferrer'>
                <img src={andrewPhinneyResume} alt='Resume' />
            </a>
        </div>
    )
}

export default Resume;