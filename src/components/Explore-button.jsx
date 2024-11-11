import React from 'react';

const ExploreButton = ({ name, href }) => {
  return (
    <a href={href} className="btn">
      &nbsp;&nbsp;<i className="bx bx-chevron-right"></i> {name}
    </a>
  );
}

export default ExploreButton;