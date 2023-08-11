import React from 'react';

const TempPlate = ({ title, lableName}) => { // Use destructuring to directly get the 'title' prop
  return (
<div>            <div>
              <h1 className="text-xl text-left text-[#012970] font-medium">
                {title}
              </h1>
            </div>
            <div className="h-12 bg-white"></div>
            <div className="text-base bg-white">
              <div>
                <label>{lableName}</label>
                <input
                  type="text"
                  autoComplete="none"
                  required
                  className="appearance-none rounded-none relative vlock w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                        text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                  placeholder="Tharusha Pathirana"
                />
              </div>
              <br />
            </div>
</div>
  );
};

export default TempPlate;