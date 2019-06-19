/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import brickLayer from '../../../helpers/brickLayer';
import {
  trimCanvasWidth,
  trimCanvasHeight
} from '../../../helpers/canvasSizeCorrector';

export default class extends Component {
  render() {
    const {
      brickHeight,
      brickWidth,
      brickMortar,
      trimHeight,
      trimWidth,
      firstColor,
      saturation,
      colorArray,
      lightness,
      secondColor,
      colorMode,
      colorHueMode,
      mortarColor,
      staggerBricks,
      save,
      borderTransparent,
    } = this.props;
    let { canvasHeight, canvasWidth } = this.props;
    if (trimHeight)
      canvasHeight = trimCanvasHeight(canvasHeight, brickHeight, brickMortar);
    if (trimWidth)
      canvasWidth = trimCanvasWidth(canvasWidth, brickWidth, brickMortar);
    const bricks = brickLayer({
      staggerBricks,
      canvasHeight,
      canvasWidth,
      brickHeight,
      brickWidth,
      brickMortar,
      firstColor,
      secondColor,
      colorArray,
      saturation,
      lightness,
      colorHueMode,
      colorMode,
    });
    return (
      <div>
        <button type="submit" onClick={save}>
          Generate Download Link
        </button>
        <span id="download-div" />
        <div id="stats">
          <p>
            Actual Canvas Dimensions: {canvasWidth} x {canvasHeight} height
          </p>
          <p>
            Brick Dimensions: {brickWidth} x {brickHeight} height, with a{' '}
            {brickMortar} mortar
          </p>
          <button
            style={{ marginBottom: 30 }}
            type="submit"
            onClick={() => this.setState({ _: Math.random() })}
          >
            Refresh
          </button>
        </div>
        <svg
          id="brickwall"
          width={canvasWidth}
          style={borderTransparent ? {} : { backgroundColor: mortarColor }}
          height={canvasHeight}
          preserveAspectRatio="xMinYMax meet"
        >
          {bricks &&
            bricks.map(({ x, y, fill }) => (
              <rect
                className="brick"
                width={brickWidth}
                height={brickHeight}
                key={`${x}+${y}`}
                x={x}
                y={y}
                fill={fill}
              />
            ))}
        </svg>
      </div>
    );
  }
}
