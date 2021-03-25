
const apiBaseUrl = "http://0105f1f7c72c.ngrok.io";


export const getCurrentState = async () => fetch(`${apiBaseUrl}/current-house-state`)
    .then(response => response.json())
    .catch(e => console.log("Error", e))