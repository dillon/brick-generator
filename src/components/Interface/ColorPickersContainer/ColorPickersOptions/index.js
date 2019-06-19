/* eslint-disable react/no-array-index-key */
import React from 'react';
import { random } from 'chroma-js';
import { connect } from 'react-redux';
import ColorPicker from './ColorPicker';
import ColorSlide from './ColorSlide';
import CustomColorPicker from './CustomColorPicker';
import {
  removeFromColorArray,
  addToColorArray,
  toggleBorderTransparent
} from '../../../../actions';
// import styles from './styles'

class ColorPickersContainer extends React.Component {
  removeHandler = ({ index }) => {
    const { dispatch } = this.props;
    dispatch(removeFromColorArray({ index }));
  };

  handleAdd = () => {
    const { dispatch } = this.props;
    dispatch(addToColorArray(random()));
  };

  handleToggleBorderTransparent = () => {
    const { dispatch } = this.props;
    dispatch(toggleBorderTransparent());
  };

  render() {
    const {
      colorHueMode,
      saturation,
      lightness,
      colorArray,
      borderTransparent
    } = this.props;
    return (
      <div>
        <h2>Mortar Color</h2>
        <div style={{ margin: '20px 0px' }}>
          <span style={{ margin: '0px 10px 0px 0px' }}>Transparent Mortar</span>
          <input
            type="checkbox"
            name="borderTransparent"
            checked={borderTransparent}
            onChange={this.handleToggleBorderTransparent}
          />
        </div>
        {!borderTransparent && (
          <ColorPicker
            colorName="mortarColor"
            header="Mortar Color"
            {...this.props}
          />
        )}
        <h2>Colors</h2>
        {colorHueMode === 'two-point scale' && (
          <div style={{ display: 'flex' }}>
            <ColorPicker
              colorName="firstColor"
              header="First Color"
              {...this.props}
            />
            <ColorPicker
              colorName="secondColor"
              header="Second Color"
              {...this.props}
            />
          </div>
        )}
        {colorHueMode === 'totally-random RGB' && (
          <p>No color values to select. Random rgb values generated.</p>
        )}
        {colorHueMode === 'controlled-random HSL' && (
          <div style={{ display: 'flex' }}>
            <ColorSlide
              value={saturation}
              valueName="saturation"
              {...this.props}
            />
            <ColorSlide
              value={lightness}
              valueName="lightness"
              {...this.props}
            />
          </div>
        )}
        {colorHueMode === 'choose color from multiple' && (
          <div style={{ maxWidth: 800 }}>
            <span>Click on color box to edit, click again to save.</span>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(52px, 1fr))',
                gridColumnGap: 0,
                gridRowGap: 15
              }}
            >
              <button
                style={{ marginRight: 5, borderRadius: 5 }}
                type="submit"
                onClick={this.handleAdd}
              >
                Add Color
              </button>
              {colorArray.map((color, index) => {
                return (
                  <div key={index + color}>
                    <CustomColorPicker
                      index={index}
                      key={index + color}
                      color={color}
                      {...this.props}
                    />
                    <button
                      type="submit"
                      onClick={() => this.removeHandler({ index })}
                    >
                      delete
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({
  firstColor,
  secondColor,
  mortarColor,
  colorMode,
  colorHueMode
}) => ({
  firstColor,
  secondColor,
  mortarColor,
  colorMode,
  colorHueMode
});

export default connect(mapStateToProps)(ColorPickersContainer);
