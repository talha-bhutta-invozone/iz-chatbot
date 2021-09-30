import React from "react";
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import '../../assets/styles/global.scss';
const chooseoptions1 = () => {

return(
                <div className="container   ">
                    <Link to="/thirdscreen">
                    <div className="second-options">
                        <p className='second-option-text'>Web Development</p>
                    </div>
                    </Link>
                    <div className="second-options">
                        <p className='second-option-text'>Mobile App Development</p>
                    </div>
                    <div className="second-options">
                        <p className='second-option-text'>Enterprise App Development</p>
                    </div>
                    <div className="second-options">
                        <p className='second-option-text'>Software Quality Assurance</p>
                    </div>    
                    <div className="second-options">
                        <p className='second-option-text'>DevOps</p>
                    </div>    
                    <div className="second-options">
                        <p className='second-option-text'>Data Scrapping</p>
                    </div>    
                    <div className="second-options">
                        <p className='second-option-text'>Big Data</p>
                    </div>    
                    <div className="second-options">
                        <p className='second-option-text'>IOT Development</p>
                    </div>    
                    <div className="second-options">
                        <p className='second-option-text'>Technical Support Services</p>
                    </div>    
                    <div className="second-options">
                        <p className='second-option-text'>UI/UX Design</p>
                    </div>    
                 </div>

);
}

export default chooseoptions1;

export const Chooseoptions2 = () => {

    return(
                    <div className="container">
                        <Link to="/form">
                        <div className="second-options">
                            <p className='second-option-text'>E-commerce Development</p>
                        </div>
                        </Link>
                        <div className="second-options">
                            <p className='second-option-text'>Front-End Development</p>
                        </div>
                        <div className="second-options">
                            <p className='second-option-text'>Full Stack Development</p>
                        </div>
                        <div className="second-options">
                            <p className='second-option-text'>Custom Website Development</p>
                        </div>    
                        <div className="second-options">
                            <p className='second-option-text'>Content Management Development</p>
                        </div>    
                        <div className="second-options">
                            <p className='second-option-text'>Web & Mobile Design</p>
                        </div>    
                        <div className="second-options">
                            <p className='second-option-text'>Api and Backend Development</p>
                        </div>    
                        <div className="second-options">
                            <p className='second-option-text'>IOT Development</p>
                        </div>    
                        <div className="second-options ml-0">
                            <p className='second-option-text '>Other</p>
                        </div>    
                     </div>
    
    );
    }

    export const Scheduler = () => {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: true
          };
        return(
            <div className="width">
            <div className="flex justify-center mb-2">
                    <Slider className="slider_comp" {...settings}>
                        <div className="calender-style size">
                           <p className="text-xs">23</p>
                           <p className="text-xs">Aug</p>
                        </div >
                        <div className="calender-style">
                           <p className="text-xs">24</p>
                           <p className="text-xs">Aug</p>

                        </div >
                        <div className="calender-style">
                           <p className="text-xs">25</p>
                           <p className="text-xs">Aug</p>
                        </div >
                        <div className="calender-style">
                           <p className="text-xs">26</p>
                           <p className="text-xs">Aug</p>
                        </div >
                        <div className="calender-style">
                           <p className="text-xs">27</p>
                           <p className="text-xs">Aug</p>
                        </div >
                        <div className="calender-style">
                           <p className="text-xs">28</p>
                           <p className="text-xs">Aug</p>
                        </div >
                        <div className="calender-style">
                           <p className="text-xs">29</p>
                           <p className="text-xs">Aug</p>
                        </div >
                        <div className="calender-style">
                           <p className="text-xs">30</p>
                           <p className="text-xs">Aug</p>
                        </div >
                        
                    </Slider>

                </div>

            <div className="flex justify-center mb-2">
                    <Slider className="slider_comp" {...settings}>
                        <div className="calender-style">
                           <p className="text-xs">8:00<br /> am</p>
                        </div >
                        <div className="calender-style">
                           <p className="text-xs">8:00<br /> am</p>
                        </div >
                        <div className="calender-style">
                           <p className="text-xs">8:30<br /> am</p>
                        </div >
                        <div className="calender-style">
                           <p className="text-xs">9:00<br /> am</p>
                        </div >
                        <div className="calender-style">
                           <p className="text-xs">9:30<br /> am</p>
                        </div >
                        <div className="calender-style">
                           <p className="text-xs">10:00<br /> am</p>
                        </div >
                        <div className="calender-style">
                           <p className="text-xs">10:30<br /> am</p>
                        </div >
                        <div className="calender-style">
                           <p className="text-xs">11:00<br /> am</p>
                        </div >
                        
                    </Slider>

                </div>
                </div>
        );
    }