import React from 'react';
import Card from '../Components/card'
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';

const CardGrid = (props) => {
    return(
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                    <Card imgsrc={img1} />
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img2} />
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img3} />
                </div>
            </div>
        </div>
    );
}

export default CardGrid;