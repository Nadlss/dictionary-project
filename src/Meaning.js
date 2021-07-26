import React from "react";

export default function Meaning(props) {
    console.log(props.meaning.definitions[0].definition)
    return (
        <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function(definition, index) {
            return(
                <div key={index}>
                    <p>{definition.definition}</p>
                    <p className="exampleSentence">"{definition.example}"</p>
                </div>
            )
        })}
        </div>
    );
}