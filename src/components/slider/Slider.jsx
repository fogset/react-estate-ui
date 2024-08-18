import { useState } from "react";
import "./slider.scss";

function Slider({ images }) {
    const [imageIndex, setImageINdex] = useState(null);

    const changeSlide = (direction) => {
        if (direction === "left") {
            if (imageIndex === 0) {
                setImageINdex(images.length - 1);
            } else {
                setImageINdex(imageIndex - 1);
            }
        } else {
            if (imageIndex === images.length - 1) {
                setImageINdex(0);
            } else {
                setImageINdex(imageIndex + 1);
            }
        }
    };
    return (
        <div className="slider">
            {imageIndex !== null && (
                <div className="fullSlider">
                    <div className="arrow" onClick={() => changeSlide("left")}>
                        <img src="arrow.png" alt="" />
                    </div>
                    <div className="imgContainer">
                        <img src={images[imageIndex]} alt="" />
                    </div>
                    <div className="arrow" onClick={() => changeSlide("right")}>
                        <img src="arrow.png" className="right" alt="" />
                    </div>
                    <div className="close" onClick={() => setImageINdex(null)}>
                        X
                    </div>
                </div>
            )}
            <div className="bigImage">
                <img src={images[0]} alt="" onClick={() => setImageINdex(0)} />
            </div>
            <div className="smallImages">
                {images.slice(1).map((image, index) => (
                    <img src={image} alt="" key={index} onClick={() => setImageINdex(index + 1)} />
                ))}
            </div>
        </div>
    );
}

export default Slider;
