import React from 'react';

function Article(props){
    console.log(props);
    const {article}= props;
    const {foo}=props;
    const {flag}=props;
    let body =        <section>{article.text}</section>;
    return(
        <div id="topDiv" className="mainDiv">

            <h2>{article.title}</h2>
            <button onClick={handleClick}>close</button>
            {body}
            <h3>creation date: {foo} {(new Date(article.date)).toDateString()}{flag}</h3>
        </div>
    )
}

function handleClick() {
console.log("----","clicked");

}


export  default Article;