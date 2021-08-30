import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);
    
    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }
    
    function handlePexelsResponse(response) {
      setPhotos(response.data.photos);
    }


    function search() {
        //documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        const pexelsApiKey = "563492ad6f917000010000017ab87a4c86434235b33d034ae32d619a";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=12`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}` }
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value)
    }
    
    function load() {
      setLoaded(true);
      search();
    }
    
    if (loaded) {
      return (
      <div className="Dictionary">
        <section>
          <h1 className="titleQ">
            What word do you want to look up?
          </h1>
        <form onSubmit={handleSubmit}>
            <input type="search" 
            onChange={handleKeywordChange} 
            defaultValue={props.defaultKeyword}/>
        </form>
        <div className="Hint">
            suggestions: sunset, happiness, rainbow,...
        </div>
        </section>
        <Results results={results}/>
        <Photos photos={photos}/>
      </div>
    );
    } else {
      load();
      return "Loading";
    }
    
    
}