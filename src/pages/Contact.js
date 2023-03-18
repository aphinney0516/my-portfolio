import react from 'react'
import maineCoast from '../assets/images/backgrounds/maineCoast.jpeg'
// Style image to half of the right screen and the contact list is on the left side
// Links and images for GitHub and LinkedIn should also be in the contact list(https://github.com/aphinney0516)(https://www.linkedin.com/in/andrew-phinney-86b386246/)
function Contact (){
    return (
        <div>
            <img src={maineCoast} alt='Maine Coast' />
            <ul>
                <li>aphinney0516@gmail.com</li>
                <li>(417)771-8113</li>
            </ul>
        </div>
    )
}

export default Contact;