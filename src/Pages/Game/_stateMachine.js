/**
 *  PREPARED
 *  PLAYING
 *  PAUSED
 *  COLIDED
 *
 */

const stateMachine = {
  prepared: {
    START: "playing",
  },
  playing: {
    TOGGLE: "paused",
    COLIDED: "colided",
  },
  paused: {
    TOGGLE: "playing",
  },
  colided: {
    NEW: "prepared",
  },
};

export const initialState = "prepared";
export default stateMachine;
