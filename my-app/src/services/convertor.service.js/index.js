import API from "../../api/api.config";

export const convertService = async (base, target) => {
  try {
    const { data } = await API.get(`/convert?from=${base}&to=${target}`);
    return data;
  } catch (error) {
    console.log("Convert Service Catch Error", error);
  }
};
