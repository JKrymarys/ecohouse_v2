const API_URL =
  "https://8o8h5nqi81.execute-api.eu-west-2.amazonaws.com/tempData";

export const getHistoricData = async () =>
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data.Items.sort())
    .catch(() => {
      console.error("Couldn't fetch data");
      return [];
    });
