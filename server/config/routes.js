let ReviewController = require("../controllers/ReviewController.js");
let RestaurantController = require("../controllers/RestaurantController");
let path = require("path");


module.exports = (app)=>{

  app.post("/api/reviews",ReviewController.create);
  app.delete("/api/reviews",ReviewController.destroy);
  app.get("/api/reviews",ReviewController.all);
  app.get("/api/reviews/:id",ReviewController.read);
  app.put("/api/reviews/:id",ReviewController.update);

  app.post("/api/restaurants",RestaurantController.create);
  app.delete("/api/restaurants",RestaurantController.destroy);
  app.get("/api/restaurants",RestaurantController.all);
  app.get("/api/restaurants/:id",RestaurantController.read);
  app.put("/api/restaurants/:id",RestaurantController.update);

//   app.all("*" , (req, res, next) => {
//     res.sendFile(path.resolve("./restaurants/dist/index.html"))
// })

}
