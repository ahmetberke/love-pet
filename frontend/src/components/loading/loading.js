/* eslint linebreak-style: ["error", "windows"]*/
import React from 'react';
import {Spinner} from 'react-bootstrap';

function Loading(props) {
  return (
    (props.loading) ?
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner> :
        props.children
  );
}

export default Loading;
