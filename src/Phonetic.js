import React from "react";
import "./Phonetic.css";
import sound from './volume.png';

export default function Phonetic(props) {
    console.log(props.phonetic);
    return (
        <div className="Phonetic">
            <a href={props.phonetic.audio} target="_blank"><img src={sound} className="sound img-fluid" alt="sound"/>
            </a>
            <i class="far fa-play-circle"></i>
            {props.phonetic.text}
        </div>
    );
}