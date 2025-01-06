import { createRoot } from 'react-dom/client';
// import app from './app';



const name  = ()=>{
    return(
        <div className="container">
            HELLO I'm a react component.
        </div>
    )
};



const container = document.getElementById('root');


const root = createRoot(container);
root.render(React.createElement(name));