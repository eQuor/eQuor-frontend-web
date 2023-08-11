import React from 'react';
import WhiteBack from './whiteBack'; // Corrected import statement
import TempPlate from './tempPlate'; // Corrected import statement

const Page = () => {
  return (
    <>
      <WhiteBack> {/* Use uppercase component name */}
      <TempPlate 
        title="Student Medical Report" 
        lableName="Student Full Name"
                  /> 
      </WhiteBack>   
      
    </>
  );
};

export default Page;


      