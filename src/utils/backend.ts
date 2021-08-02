const API_URL = "https://8o8h5nqi81.execute-api.eu-west-2.amazonaws.com";

const routes = {
  allData: "/getAllTempData",
};

export const getHistoricData = async () =>
  fetch(`${API_URL}${routes.allData}`)
    .then((response) => response.json())
    .catch((e) => {
      console.log("Error", e);
      return [];
    });
