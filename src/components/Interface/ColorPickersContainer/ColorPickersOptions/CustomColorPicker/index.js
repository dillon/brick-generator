import React from 'react';
import { SketchPicker } from 'react-color';
import { editColorInArray } from '../../../../../actions';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      backgroundColor: '',
      colorTransparent: false
    };
  }

  componentDidMount() {
    const { color } = this.props;
    this.setState({ backgroundColor: color });
  }

  handleClick = () => {
    const {
      displayColorPicker,
      backgroundColor,
      colorTransparent
    } = this.state;
    const { index, dispatch } = this.props;
    if (colorTransparent) {
      dispatch(editColorInArray({ index, color: false }))
    } else if (displayColorPicker) {
      dispatch(editColorInArray({ index, color: backgroundColor }));
    }
    this.setState(prevState => ({
      displayColorPicker: !prevState.displayColorPicker
    }));
  };

  handleClose = () => {};

  handleOnChangeComplete = color => {
    this.setState({ backgroundColor: color.hex });
  };

  handleToggleColorTransparent = ({ target: { checked } }) => {
    this.setState({ colorTransparent: checked });
  };

  render() {
    const { backgroundColor } = this.state;
    const styles = {
      color: {
        width: '36px',
        height: '14px',
        borderRadius: '2px',
        background: backgroundColor
      },
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        display: 'inline-block',
        cursor: 'pointer'
      },
      popover: {
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        borderRadius: '1px',
        position: 'absolute',
        zIndex: '2',
        backgroundColor: 'white'
      },
      cover: {
        display: 'none',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px'
      }
    };
    const { displayColorPicker, colorTransparent } = this.state;

    return (
      <div>
        <button type="submit" style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.color} />
        </button>
        {displayColorPicker ? (
          <div style={styles.popover}>
            <button
              type="submit"
              style={styles.cover}
              onClick={this.handleClose}
            >
              Save
            </button>
            <div style={{ margin: 10 }}>
              <span style={{ margin: '0px 10px 0px 0px' }}>Transparent: </span>
              <input
                type="checkbox"
                name="borderTransparent"
                checked={colorTransparent}
                onChange={this.handleToggleColorTransparent}
              />
            </div>
            {!colorTransparent && (
              <SketchPicker
                color={backgroundColor}
                onChangeComplete={this.handleOnChangeComplete}
              />
            )}
          </div>
        ) : null}
      </div>
    );
  }
}
