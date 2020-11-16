import React from "react";
import {withRouter} from 'react-router-dom'

import {
  MenuItemContainer,
  MenuItemImage,
  CategoryContainer,
} from "./menu-item.styles";

const MenuItem = ({ category, imageUrl, size, history, match, linkUrl }) => {
  return (
    <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <MenuItemImage imageUrl={imageUrl}/>
      <CategoryContainer>
        <p className="category">{category.toUpperCase()}</p>
      </CategoryContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
