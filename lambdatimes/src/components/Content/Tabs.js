import React from 'react';
import Tab from './Tab';

const Tabs = props => {
  const { selected, tabs, selectTabHandler } = props;

  return (
    <div className='tabs'>
      <div className='topics'>
        <span className='title'>TRENDING TOPICS:</span>
        {tabs.map((tab, i) => {
          return (
            <Tab
              selectTabHandler={selectTabHandler}
              selected={selected === tab}
              tab={tab}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
