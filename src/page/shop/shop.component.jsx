import React from 'react'

import CollectionOverview from '../../components/collection-overview/collection-overview.component'

import {ShopPageContainer} from './shop.styles'

const ShopPage = () => {
   return (
      <ShopPageContainer>
         <CollectionOverview/>
      </ShopPageContainer>
   )
}

export default ShopPage;