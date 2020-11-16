import React from "react";
import {withRouter} from 'react-router-dom'
import CartItem from "../cart-item/cart-item.component";

import {
  CollectionPreviewContainer,
  CollectionContainer,
  CollectionTitle,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, routeName, collection, history, match  }) => {
  return (
    <CollectionPreviewContainer>
      <CollectionTitle onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</CollectionTitle>
      <CollectionContainer>
        {collection.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </CollectionContainer>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
