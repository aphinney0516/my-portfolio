import react from 'react'
import andrewPhinneyResume from '../assets/images/screenshots/andrewPhinneyResume.png'
function Resume (){
    return (
        <div style={{textAlign: 'center'}}>
            <a href='https://docs.google.com/document/d/19VjcEoveKGQzFi6GnfdUQePtJzv8EL_3/edit?usp=sharing&ouid=105705104423119930984&rtpof=true&sd=true' target='_blank' rel='nonreferrer'>
                <img style={{width:'80%', margin:"0 2em", height:'auto', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2)'}} src={andrewPhinneyResume} alt='Resume' />
            </a>
        </div>
    )
}

export default Resume;