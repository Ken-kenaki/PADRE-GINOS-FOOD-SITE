const user = (userInput)=>{
    return React.createElement(
        'div',
        {},
        React.createElement('h1', {}, `Welcome to React${userInput.name}`),
        React.createElement('p', {}, `I am ${userInput.age} years old`),
        React.createElement('p', {}, `I am a ${userInput.profession}`)
    )
}


const app = ()=>{
    return React.createElement(
        'div',
        {},
        React.createElement('h1', {}, 'Hello World'),
    ),
    React.createElement(
        user,
        {name: 'John', age: 25, profession: 'developer'}
        
    )

}



const container = document.getElementById('root');


const root = ReactDOM.createRoot(container);
root.render(React.createElement(app));