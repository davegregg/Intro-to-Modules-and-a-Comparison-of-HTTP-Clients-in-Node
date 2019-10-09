module.exports = function (uri) {

  const request = require("superagent");
  const logSpacing = "\n\n\n";
  
  request
    .get(uri)
    .then(response => {
        console.log(logSpacing);
        console.log("Superagent library way of making a GET request");
        console.log("Status code:", response.status);
    
        // notice we can skip the .json() "hydration" step because Superagent is doing it for us
        const hydratedBody = response.body;
        console.log(hydratedBody);
    });

}
