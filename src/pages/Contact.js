import react from 'react'
import maineCoast from '../assets/images/backgrounds/maineCoast.jpeg'
// Style image to half of the right screen and the contact list is on the left side
// Links and images for GitHub and LinkedIn should also be in the contact list(https://github.com/aphinney0516)
function Contact (){
    return (
        <div style={{height: "100vh", padding: "2em", fontFamily:"'Bad Script', cursive", textAlign: 'center', fontSize: "19px"}} >
            <img src={maineCoast} alt='Maine Coast' style={{width:'50%', margin:"0 2em", height:'100vh', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2)', float: "left"}}  />
            <div>
                <h2>
                <a href="mailto:aphinney0516@gmail.com">aphinney0516@gmail.com</a>
                </h2>
                <br />
                <h2>
                    <a href='https://www.linkedin.com/in/andrew-phinney-86b386246/' target='_blank' rel='nonreferrer'>LinkedIn</a>
                </h2>
                <br />
                <h2>
                    <a href='https://github.com/aphinney0516' target='_blank' rel='nonreferrer'>GitHub</a>
                </h2>
                <br />
                <h2>(417)771-8113</h2>
                <h2>____________________</h2>
                <br />
                <h2>Thanks for visiting!</h2>
            </div>
        </div>
    )
}

export default Contact;