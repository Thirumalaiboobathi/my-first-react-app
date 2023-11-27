import React from "react";
import Image1 from "./Image1.jpg";
import Image3 from "./Image3.jpeg";

export function MyPilot() {
    const [state, setState] = React.useState({ name: 'DHONI', imageSrc: Image1 });

    const updateName = () => {
        setState(prevState => ({
            ...prevState,
            name: 'MSD',
            imageSrc: Image3 // Directly update the image source
        }));
    };
    
    return (
        <div>
            <p>Name: <b>{state.name}</b></p>
            <img
                src={state.imageSrc}
                alt="My Image"
                style={{
                    width: '500px', // Set width
                    height: 'auto', // Maintain aspect ratio
                    borderRadius: '8px', // Apply border radius
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' // Apply a shadow
                    // Add more CSS properties as needed
                }}
            />
            <br></br>
            <button onClick={updateName} style={{backgroundColor: "yellow"}}>Update Name</button>
        </div>
    );
}
