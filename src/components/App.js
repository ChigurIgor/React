import React from 'react';
import  Article from './Article'
import articles from '../fixtures'

function App(){
    return([
            <h1 >Title</h1>,
            <Article article ={articles[0]} foo="bar" flag/>
        ]
    )
}

export default App;