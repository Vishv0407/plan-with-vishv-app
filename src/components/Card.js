import { useState } from "react";

function Card(props) {
    
    const [readmore, setReadmore] = useState(false);

    function readMoreHandler() {
        setReadmore(!readmore);
    }

    const info = `${props.info}`;
    const description = readmore ? info : `${info.substring(0,200)}....`;

    return(
        <div className="card">
            <img src={props.image} alt="travel-place" className="image"></img>

            <div className="tour-info">
                <div className="tour-details">
                    <p className="tour-price">₹ {props.price}</p>
                    <p className="tour-name">{props.name}</p>
                </div>

                <div className="description">
                    {description}
                    <span className="read-more" onClick={readMoreHandler}>
                        {readmore ? `Show Less` : `Read More`}
                    </span>
                </div>
            </div>

            <button className="not-int-btn" onClick={() => props.removeTour(props.id)}> Not interested</button>
        </div>
    );
}

export default Card;