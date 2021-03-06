import React from 'react';

import style from './style';

export default ({ children, ...attrs }) => (
  <p {...attrs}>
    <style jsx>{style}</style>
    {children}
  </p>
);
