// craco.config.js
module.exports = {
    devServer: {
      setupMiddlewares: (middlewares, devServer) => {
        // Replace deprecated onBeforeSetupMiddleware
        devServer.app.use((req, res, next) => {
          console.log('Custom middleware before setup');
          next();
        });
  
        // Replace deprecated onAfterSetupMiddleware
        devServer.app.use((req, res, next) => {
          console.log('Custom middleware after setup');
          next();
        });
  
        return middlewares;
      },
    },
  };
  