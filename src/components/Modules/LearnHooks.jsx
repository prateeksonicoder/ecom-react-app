import React, { useEffect, useRef, useState } from "react";

const LearnHooks = () => { 
    const btnRef = useRef();
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(count); 
    },
[count]);
    return(
         <div><button style={{ display: "none" }} 
            ref={btnRef}
            onClick={() => setCount((prev) => prev+1)}>Add Count</button>
            <br />
            <br />

        <button onClick={() => {
            //btnRef.current.click()
            btnRef.current.style.display = "block"
        }}>Trigger Count</button>
         </div>
    );
};

export default LearnHooks;  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>
<body>
    
</body>
</html>

 //in app.js<Route path="/LearnHooks" element={<LearnHooks />}/>