import React from "react";

function Links(props){
    return (
        <>
         <h3></h3>
         <a id="" href={props.github}>{props.github}</a>
         <a href={props.linkedin}>{props.linkedin}</a>
        </>
    );
}

export default Links;