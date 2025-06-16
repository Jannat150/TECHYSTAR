import React from 'react'
import vg from "../assets/2.webp"
import { AiFillGoogleCircle,AiFillAmazonCircle, AiFillYoutube , AiFillInstagram } from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className='home' id="home">
      <main>
        <h1>TechyStar</h1>
        <p>Solutions to all your problems</p>
      </main>
    </div>
    <div className="home2">
        <img src={vg} alt="" />
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum neque nulla, accusantium illum nihil ratione alias laborum soluta quis ipsam enim a saepe iure eaque est repellendus. Ea, iure ipsa?
            </p>
        </div>
    </div>

    <div className="home3" id='about'>
      <div>
        <h1>Who are you?</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dolores corrupti illum quis velit recusandae voluptatem inventore incidunt dolore quasi esse adipisci quibusdam ipsam delectus, veniam numquam soluta eaque in.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima accusantium nobis unde nihil necessitatibus at amet natus velit optio harum provident accusamus, nostrum, ducimus iste maiores laborum? Aliquid, illo reiciendis.
        </p>
      </div>

    </div>
    <div className="home4" id="brands">
    <div>
        <h1>Brands</h1>
        <article>
            <div style={{
                animationDelay:"0.3s"
            }}>
                <AiFillGoogleCircle/>
                <p>Google</p>
            </div>
            <div style={{
                animationDelay:"0.5s"
            }}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
            </div>

            <div style={{
                animationDelay:"0.7s"
            }}>
                <AiFillYoutube/>
                <p>Youtube</p>
            </div>

            <div style={{
                animationDelay:"0.3s"
            }}>
                <AiFillInstagram/>
                <p>Instagram</p>
            </div>

        </article>



    </div>



    </div>


    </>
  )
}

export default Home
