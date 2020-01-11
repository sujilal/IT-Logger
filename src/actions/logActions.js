import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from "./types";

// Method1 for GETLOGS

// export const getLogs = () => {
//   return async dispatch => {
//     setLoading();
//     const res = await fetch("/logs");
//     const data = await res.data;

//     dispatch({
//       type: GET_LOGS,
//       payload: data
//     });
//   };
// };

// Method 2 Get logs from Server
export const getLogs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

// Method 2 Add logs from Server
export const addLogs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

export const logErrors = () => {};
