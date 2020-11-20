export const loadState = () => {
  try {
    const state = localStorage.getItem("state");

    console.log(state);
    if (state === null) {
      return undefined;
    }
    return JSON.parse(state);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const localState = JSON.stringify(state.userstock);
    const what = localStorage.setItem("state", localState);
    // console.log(what);
  } catch (error) {
    return undefined;
  }
};
