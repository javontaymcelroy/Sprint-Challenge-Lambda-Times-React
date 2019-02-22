import React from 'react';
import styled from 'styled-components';

/* Using your props, determine if the `tab` prop matches the `selectedTab` prop,
      if they match, the className should be: 'tab active-tab',
      if it is not it should just be 'tab'*/

const SelectedTab = styled.div`
  background-color: red;
  color: #333;
  border: 2px solid #333;
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 0.8rem;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: white;
  }
`;
const Tabs = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: white;
  background-color: #333333;
  border-radius: 5px;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 0.8rem;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    filter: brightness(150%);
  }
`;

const Tab = props => {
  const selectedClass = props.SelectedTab;

  return (
    <div>
      {props.tab === selectedClass ? (
        <SelectedTab
          onClick={e => {
            e.preventDefault;
            props.selectTabHandler(props.tab);
          }}
        >
          {props.tab.toUpperCase()}
        </SelectedTab>
      ) : (
        <Tabs
          onClick={e => {
            e.preventDefault;
            props.selectTabHandler(props.tab);
          }}
        >
          {props.tab.toUpperCase()}
        </Tabs>
      )}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
