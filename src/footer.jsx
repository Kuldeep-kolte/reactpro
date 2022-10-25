// function Component
export const Footer = (props) => {
    return(
    <>
    <h2 className="hello text-success">WELCOME TO Pune</h2>
    {/* Props */}
    <h1>I am {props.name}</h1> 
    </>)
    
}
// another method for export function component
//export {Footer}

// 20 oct. 2022
// 
export const Herosec = () =>{
    const print = () =>{
        console.log("clicked");
    }
    return(
        <div className="ms-4">
        <h3>I am Hero Section 👍</h3>
        
        <button className="btn btn-warning" onClick={()=>{print()}}> Click here 😍 </button>
        </div>
    )
}
