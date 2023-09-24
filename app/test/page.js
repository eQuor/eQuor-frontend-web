"use client";
import React, { Fragment, useState } from 'react';
import Popup from 'components/Popup';

function test() {
  const [showModel, setShowModel] = useState(false);
  
  return (
    <>
    <div className="col-start-2 col-end-12 row-start-2 row-end-4 container mx-auto mt-4 flex gap-10">
      <Fragment>
        <button onClick={() => setShowModel(true)}>click</button>
        <Popup isVisible={showModel} onClose={() => setShowModel(false)} />dfsfsdfsdf
      </Fragment>
    </div>
    </>
  );
}

export default test;
