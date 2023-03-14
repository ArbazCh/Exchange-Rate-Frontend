export const getDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const date = today.getDate().toString().padStart(2, "0");
  const formattedDate = `${year}-${month}-${date}`;
  return formattedDate;
};
export const getDateNDaysAgo = (n) => {
  const today = new Date();
  const dateNDaysAgo = new Date(today.getTime() - n * 24 * 60 * 60 * 1000);
  const year = dateNDaysAgo.getFullYear();
  const month = (dateNDaysAgo.getMonth() + 1).toString().padStart(2, "0");
  const date = dateNDaysAgo.getDate().toString().padStart(2, "0");
  const formattedDate = `${year}-${month}-${date}`;
  return formattedDate;
};
