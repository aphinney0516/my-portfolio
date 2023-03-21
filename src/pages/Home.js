import react from 'react'
import seriousHeadshot from '../assets/images/headshots/seriousHeadshot.jpeg'
import laughingHeadshot from '../assets/images/headshots/laughingHeadshot.jpeg'
import dressyHeadshot from '../assets/images/headshots/dressyHeadshot.JPG'
import Carousel from 'react-bootstrap/Carousel';
import '../App.css'
// I like my name either in the upper right of the header or at the top of this page in an <h1></h1>
function Home (){
    return (
        <div style={{display:'flex', flexDirection:'column',margin:'0 auto',maxWidth:'80vw', height:'100%'}}>
            <h4 style={{fontFamily:"'Bad Script', cursive", textAlign: 'center'}}>"A big advantage of doing a lot of things in life that don't work out is the inpiration you recieve to simplify that process for the next generation of life explorers."</h4>
            <Carousel style={{overflow: 'hidden',height:'600px',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2)'}}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={seriousHeadshot}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={laughingHeadshot}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={dressyHeadshot}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Home;