import React, { useContext } from 'react';
import { Data } from '../../context/DataProvider';

const About = () => {
  const context = useContext(Data);
  
  // Assuming context provides some data like 'name'
  const { name } = context;

  return ( 
    <div>
      {/*Render the name from the context */}
      <h2>About {name}</h2>
    </div>
  );
};

export default About