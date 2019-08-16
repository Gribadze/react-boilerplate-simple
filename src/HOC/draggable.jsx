import React from 'react';

export function draggable(WrappedComponent) {
  return function (props) {
    return (
      <div>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default {
  draggable,
};
