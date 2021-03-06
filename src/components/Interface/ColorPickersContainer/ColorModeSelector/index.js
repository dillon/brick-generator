import React from 'react';
import { colorModes } from '../../../../constants/defaults';
import { setColorMode } from '../../../../actions';
import Select from '../../../Common/Select';

export default class Component extends React.Component {
  handleSelectChange = event => {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(setColorMode(value));
  };

  render() {
    const { colorMode, colorHueMode } = this.props;
    return (
      <div>
        Color Scale Method
        <Select
          disabled={colorHueMode !== 'two-point scale'}
          handleChange={this.handleSelectChange}
          value={colorMode}
          options={colorModes}
        />
      </div>
    );
  }
}
