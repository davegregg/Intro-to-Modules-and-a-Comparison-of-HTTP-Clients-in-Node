module.exports = function (uri) {

  const axios = require("axios");
  const logSpacing = "\n\n\n";
  
  axios
    .get(uri)
    .then(response => {
      console.log(logSpacing);
      console.log("The AXIOS library way of making a GET request (using .then)");
      console.log("Status code:", response.status);

      // notice we can skip the .json() "hydration" step because AXIOS is doing it for us
      const hydratedBody = response.data;
      console.log(hydratedBody);
    });

}
