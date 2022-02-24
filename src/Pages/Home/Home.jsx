import React from "react";
import ImageContainer from "../../Components/ImageContainer";
import { ImagesExtractor } from "../../Helpers/ImagesExtractor";

const Home = () => {
    // const images = ImagesExtractor(require.context('../../Assets/Images', false, /\.(png|jpe?g|svg)$/));    

    return( 
           <div className="main-container">
                        {/* <div className="row">
                        {
                            Object.keys(images).map((key) => (
                                <ImageContainer key={key} imgSrc={images[key]} />
                            ))
                        }
                    </div> */}
                    <p>hello</p>
                </div>
       
    )
}

export default Home;
