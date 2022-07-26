const express = require("express");
const controllers = require("../app/controllers");

const apiRouter = express.Router();


apiRouter.get("/soal", controllers.api.v1.produkController.list);
apiRouter.get("/soal2", controllers.api.v1.produkController.list2);
apiRouter.post("/produk/add", controllers.api.v1.produkController.create);
apiRouter.put("/produk/update/:id", controllers.api.v1.produkController.update);
apiRouter.get("/api/v1/produk/:id", controllers.api.v1.produkController.detail);
apiRouter.delete(
  "/produk/hapus/:id",
  controllers.api.v1.produkController.hapus
);

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
