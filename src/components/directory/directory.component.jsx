import React from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectDirectorySections} from '../../redux/directory/directory.selectors.js';

import MenuItem from "../menu-item/menu-item.component";

import { DirectoryContainer } from "./directory.styles";

const Directory = ({directory}) => {
  return (
    <DirectoryContainer>
      {directory.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </DirectoryContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  directory: selectDirectorySections
});


export default connect(mapStateToProps)(Directory);
