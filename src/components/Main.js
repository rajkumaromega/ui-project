import React from 'react'
import "./Main.css"
import person from "../images/first image.jpeg"
import { AiOutlineArrowRight } from 'react-icons/ai'
const Main = () => {
  return (
    <div className='Main'>
        <div className='section1'>
            <div className='content-box'>
                 <p> <span class="grdnt">I design products</span> that delight and inspire people.</p>

            </div>
            <div className='description-box'>
                <p>Hi! I'm Jake, a product designer based in Berlin. I create user-friendly interface for fast-graing startups.</p>
            </div>
            <div className='btn-grp'>
                <button className='btnone'>Book a call</button>
                <button className='btntwo'></button>
                <a id="button"> Download CV </a>
                <a ><AiOutlineArrowRight className=' btn arrow-side' /></a>
                
            </div>
        </div>
        <div className='section2'>
            <div className='imgperson'>
                <img src={person} />
            </div>
        </div>
    </div>
  )
}

export default Main