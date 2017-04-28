var ApiUtils = {
  checkStatus: function(response) {
    console.log('We are in ApiUtils');
    console.log(response);
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      let error = new Error(response.status);
      error.response = response;
      throw error;
    }
  }
};
export { ApiUtils as default };
