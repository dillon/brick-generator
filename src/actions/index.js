export const TOGGLE_STAGGER_BRICKS = 'TOGGLE_STAGGER_BRICKS';
export const TOGGLE_BRICK_POPUP = 'TOGGLE_BRICK_POPUP';
export const TOGGLE_CANVAS_POPUP = 'TOGGLE_CANVAS_POPUP';
export const SET_BRICK_DIMENSIONS = 'SET_BRICK_DIMENSIONS';
export const SET_CANVAS_DIMENSIONS = 'SET_CANVAS_DIMENSIONS';
export const TOGGLE_TRIM = 'TOGGLE_TRIM';
export const SET_COLOR = 'SET_COLOR';
export const SET_HSL = 'SET_HSL';
export const SAVE_IMAGE = 'SAVE_IMAGE';
export const SET_COLOR_MODE = 'SET_COLOR_MODE';
export const SET_COLOR_HUE_MODE = 'SET_COLOR_HUE_MODE';
export const ADD_TO_COLOR_ARRAY = 'ADD_TO_COLOR_ARRAY';
export const REMOVE_FROM_COLOR_ARRAY = 'REMOVE_FROM_COLOR_ARRAY';
export const EDIT_COLOR_IN_ARRAY = 'EDIT_COLOR_IN_ARRAY';
export const TOGGLE_BORDER_TRANSPARENT = 'TOGGLE_BORDER_TRANSPARENT';

export const toggleBorderTransparent = () => ({
  type: TOGGLE_BORDER_TRANSPARENT
})

export function toggleStaggerBricks() {
  return {
    type: TOGGLE_STAGGER_BRICKS
  };
}

export function toggleBrickDimensionsPopup() {
  return {
    type: TOGGLE_BRICK_POPUP
  };
}

export function toggleCanvasDimensionsPopup() {
  return {
    type: TOGGLE_CANVAS_POPUP
  };
}

export function setBrickDimensions(dimensions) {
  return {
    type: SET_BRICK_DIMENSIONS,
    payload: dimensions
  };
}

export function setCanvasDimensions(dimensions) {
  return {
    type: SET_CANVAS_DIMENSIONS,
    payload: dimensions
  };
}

export function toggleTrim(name) {
  return {
    type: TOGGLE_TRIM,
    payload: name
  };
}

export function setColor({ name, color }) {
  return {
    type: SET_COLOR,
    payload: { name, color }
  };
}

export function setHSL({ name, value }) {
  return {
    type: SET_HSL,
    payload: { name, value }
  };
}

export function setColorMode(mode) {
  return {
    type: SET_COLOR_MODE,
    payload: mode
  };
}

export function setColorHueMode(mode) {
  return {
    type: SET_COLOR_HUE_MODE,
    payload: mode
  };
}

export function saveImage() {
  return { type: SAVE_IMAGE };
}

export function addToColorArray(color) {
  return {
    type: ADD_TO_COLOR_ARRAY,
    payload: color
  };
}

export function removeFromColorArray({ index }) {
  return {
    type: REMOVE_FROM_COLOR_ARRAY,
    payload: { index }
  };
}

export function editColorInArray({ index, color }) {
  return {
    type: EDIT_COLOR_IN_ARRAY,
    payload: { index, color }
  };
}
