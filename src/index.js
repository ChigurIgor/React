import React from 'react';
import {render} from 'react-dom';

function Article(){
    let body =        <section>body</section>;
    return(
        <div id="topDiv" className="mainDiv">

            <h2>Title</h2>
            {body}
        </div>
    )
}


function App(){
    return([
            <h1 >Title</h1>,
            <Article/>
        ]
    )
}



render(<App/>,document.getElementById('root'));