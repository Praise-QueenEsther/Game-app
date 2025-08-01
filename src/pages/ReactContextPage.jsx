import React from 'react';

function Name(params) {
    return <div>

    <title> What is React context</title>
    <p>React Context is a mechanism in react that allow the sharing of data across component tree
        without manually passing the props down through every level of the tree
    </p>

    <div>Importance of React context</div>
     <ul>
        <li>Helps to avoid prop drilling</li>
        <li>Helps to manage global data like  such as user authentication status, theme settings (light/dark mode), or language preferences.</li>
      </ul>

      <div>Components of React Context</div>
      <ul>
        <li>Context.Provider=	Wraps components to provide the data </li>
        <li>useState=react hook that gives you an array with two items and it's use to change states 
          e.gname will be the current value (initially 'Esther')

          setName is the function to change the value
        </li>
        <li>useContext=Lets child components access the shared data</li>
        <li>createContext=Creates the "storage box" where data will live</li>
      </ul>
    </div>
}

export default Name