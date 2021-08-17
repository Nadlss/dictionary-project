import React from "react";

export default function Phonetic(props) {
    console.log(props.phonetic);
    return (
        <div className="Phonetic">
            <a href={props.phonetic.audio} traget="_blank">
                Listen here
            </a>
            <br />
            {props.phonetic.text}
        </div>
    );
}