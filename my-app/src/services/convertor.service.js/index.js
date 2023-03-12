import axios from "axios";

export const convertService = async (base, target) => {
  try {
    // console.log("here");
    const { data } = await axios.get(
      `https://api.exchangerate.host/convert?from=${base}&to=${target}`
    );
    // console.log("data: ", data);
    return data.result;
  } catch (error) {
    console.log("Convert Service Catch Error", error);
  }
};
