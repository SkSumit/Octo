export const setText = (text) => {
  console.log("text", text);
  return {
    type: "SET_TEXT",
    text,
  };
};
