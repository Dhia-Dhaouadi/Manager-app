const express = require("express");
const controller = require("./controller");
const router = express.Router();
const cors = require("cors");
const app = express();
router.use(function (req, res, next) {
     res.setHeader('Access-Control-Allow-Origin', '*');
     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("preflightContinue", false,);
    res.setHeader("optionsSuccessStatus", 204,);
     next();
});


router.get("/users", cors(), controller.getUsers);
router.get("/clients", cors(), controller.getClients);
router.get("/client/:id", cors(), controller.getClientById);
router.post("/Addclient", cors(), controller.AddClient);
router.post("/createusers", cors(), controller.createUser);
router.get("/user/:id", cors(), controller.getUserById);
router.get("/categories", cors(), controller.getCategories);
router.post("/addcategorie", cors(), controller.AddCategory);
router.get("/products", cors(), controller.getProducts);
router.get("/product/:id", cors(), controller.getProductById);
router.post("/Addproduct", cors(), controller.Addproduct);
router.get("/CategorieCompo", cors(), controller.getCategorieCompo);
router.post("/CategorieCompo", cors(), controller.createCategorieCompo);
router.get("/CategorieCompo/:id", cors(), controller.getCategorieCompoById);
router.get("/categorie/:id", cors(), controller.getCategoryById);
router.get("/compositions", cors(), controller.getComposition);
router.post("/Addcompositions", cors(), controller.AddComposition);
router.get("/Composition/:id", cors(), controller.getCompositionById);
router.delete("/Deleteuser/:id", cors(), controller.RemoveUser);
router.delete("/Deleteclient/:id", cors(), controller.RemoveClient);
router.put("/Updateclient/:id", cors(), controller.updateClient);
router.put("/Updateuser/:id", cors(), controller.updateUser);
router.put("/Updatecategorie/:id", cors(), controller.updateCategory);
router.put("/Updateproduct/:id", cors(), controller.updateProduct);
router.put("/Updatecategorycompo/:id", cors(), controller.updateCatcompo);
router.put("/Updatecomposition/:id", cors(), controller.UpdateComposition);
router.delete("/Deletecomposition/:id", cors(), controller.deleteComposition);
router.post("/LoginAuth",cors(),controller.LoginAuth);
router.get("/test",controller.test);


module.exports = router;
