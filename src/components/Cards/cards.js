import React from 'react'


const Card = (props) => {
    return (
        <div className="container">
         <div className="overflow">
                <img src={props.imgsrc} alt="img1" />
          </div>
          <div className="card-body">
              <h4 className="card-title">CARD TEST</h4>
            <p className="card-text text-secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty
            </p>
            <a href="#" className="btn btn-outline-success">Go Anywhere</a>
          </div>
        </div>
            
    )
}

export default Card;