import React from 'react';
import Add from '../Add/Add';
import Display from '../Display/Display';

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Add />
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-6">
          <Display />
        </div>
      </div>
    </div>
  );
};

export default Home;
