import React from 'react'

import StarContainer from './star-rating.styles';

const StarRating = ({selected = false}) => (
   <StarContainer selected={selected}/>
);

export default StarRating;