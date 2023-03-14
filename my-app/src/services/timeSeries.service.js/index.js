import API from "../../api/api.config";

export const TimeSeriesService = async (start, end, base, target) => {
  try {
    const { data } = await API.get(
      `/timeseries?start_date=${start}&end_date=${end}&base=${base}&symbols=${target}`
    );
    return data;
  } catch (error) {
    console.log("Time Series Service Catch Error", error);
  }
};
