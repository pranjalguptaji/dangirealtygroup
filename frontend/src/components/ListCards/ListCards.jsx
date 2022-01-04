import React from 'react';
import './ListCards.scss';
import ActionAreaCard from '../ComponentCard/ComponenetCard';
import { useNavigate } from 'react-router-dom';

const ListCards = (props) => {
    const navigate = useNavigate();
    const PropertyClickHandler=()=>{
        navigate("/viewProperty");
    }
    return (
        <div>
            <div className="our-listings">
                <h1>
                    {props.text}
                </h1>
            </div>
            <div className="housing-lists">
                <ActionAreaCard clickHandler={PropertyClickHandler}/>
                <ActionAreaCard clickHandler={PropertyClickHandler}/>
                <ActionAreaCard clickHandler={PropertyClickHandler}/>
                <ActionAreaCard clickHandler={PropertyClickHandler}/>
                <ActionAreaCard clickHandler={PropertyClickHandler}/>
                <ActionAreaCard clickHandler={PropertyClickHandler}/>
            </div>
        </div>
    )
}

export default ListCards;