const express = require("express");
const pool = require("./connection");
const que = require("./queries");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const jwt = require("jsonwebtoken");
let secretKey = "YouwillneverHackusurbancomdigicaissedevsbdj";

const createUser = (request, response) => {
  const {
    CodeEntreprise,
    NomEntreprise,
    NomUser,
    PrenomUser,
    Login,
    Email,
    Telephone,
    DateAjout,
    Role,
    Utilisateur,
  } = request.body;
  pool.query(que.checkLoginexistance, [Login], (error, results) => {
    if (results.rows.length) {
      response.json({ message: "Login already exist !" });
    } else {
      pool.query(
        que.createuser,
        [
          CodeEntreprise,
          NomEntreprise,
          NomUser,
          PrenomUser,
          Login,
          Email,
          Telephone,
          DateAjout,
          Role,
          Utilisateur,
        ],
        (error, results) => {
          if (error) {
            throw error;
          } else {
            response.status(200).json({ message: "User added successfully" });
          }
        }
      );
    }
  });
};

const getUsers = (request, response) => {
  const CodeEntreprise = parseInt(request.params.CodeEntreprise);
  pool.query(que.getusers, [CodeEntreprise], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getClients = (request, response) => {
  const CodeEntreprise = parseInt(request.params.CodeEntreprise);
  pool.query(que.getclients, [CodeEntreprise], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const RemoveUser = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(que.getuserbyid, [id], (error, results) => {
    const nouserfound = !results.rows.length;
    if (nouserfound) {
      response.send("No user found in database");
    }
    pool.query(que.removeuser, [id], (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json("User deleted");
    });
  });
};

const RemoveClient = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(que.getclientbyid, [id], (error, results) => {
    const nouserfound = !results.rows.length;
    if (nouserfound) {
      response.send("No client found in database");
    }
    pool.query(que.removeclient, [id], (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json("Client deleted");
    });
  });
};

const updateClient = (request, response) => {
  const id = parseInt(request.params.id);
  const {
    NomClient,
    PrenomClient,
    Civilite,
    Societe,
    Telephone,
    Email,
    DateNaissance,
    Adresse,
    Ville,
    CodePostal,
    Batiment,
    Etage,
    Sonette,
    Code1,
    Code2,
    Code3,
    Commentaire,
    Montantfidilite,
    Codebarre,
    NbrComa,
    type,
    CodeEntreprise,
  } = request.body;
  pool.query(que.getclientbyid, [id], (error, results) => {
    const noclientfound = !results.rows.length;
    if (noclientfound) {
      response.json({ message: "No client found in database" });
    }
  });
  pool.query(
    que.updateclient,
    [
      NomClient,
      PrenomClient,
      Civilite,
      Societe,
      Telephone,
      Email,
      DateNaissance,
      Adresse,
      Ville,
      CodePostal,
      Batiment,
      Etage,
      Sonette,
      Code1,
      Code2,
      Code3,
      Commentaire,
      Montantfidilite,
      Codebarre,
      NbrComa,
      type,
      CodeEntreprise,
      id,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).json({ message: "Client updated succefully" });
    }
  );
};

const updateUser = (request, response) => {
  const id = parseInt(request.params.id);
  const {
    CodeEntreprise,
    NomEntreprise,
    NomUser,
    PrenomUser,
    Login,
    Email,
    Telephone,
    DateAjout,
    Role,
    Utilisateur,
  } = request.body;
  pool.query(que.getuserbyid, [id], (error, results) => {
    const nouserfound = !results.rows.length;
    if (nouserfound) {
      response.json({ message: "No user found in database" });
    }
  });
  pool.query(
    que.updateuser,
    [
      CodeEntreprise,
      NomEntreprise,
      NomUser,
      PrenomUser,
      Login,
      Email,
      Telephone,
      DateAjout,
      Role,
      Utilisateur,
      id,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).json({ message: "User updated succefully" });
    }
  );
};

const getClientById = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(que.getclientbyid, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getUserById = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(que.getuserbyid, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getCategories = (request, response) => {
  const CodeEntreprise = parseInt(request.params.CodeEntreprise);
  pool.query(que.getcategories, [CodeEntreprise], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const updateCategory = (request, response) => {
  const id = parseInt(request.params.id);
  const {
    Categorie,
    Affichage,
    Affichagecuisine,
    Dateajoutcat,
    TVA,
    CodeEntreprise,
  } = request.body;
  pool.query(que.getcategorybyid, [id], (error, results) => {
    const noucategoryfound = !results.rows.length;
    if (noucategoryfound) {
      response.json({ message: "No category found in database" });
    }
  });
  pool.query(
    que.updatecategorie,
    [
      Categorie,
      Affichage,
      Affichagecuisine,
      Dateajoutcat,
      TVA,
      CodeEntreprise,
      id,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).json({ message: "Categorie updated succefully" });
    }
  );
};

const updateProduct = (request, response) => {
  const id = parseInt(request.params.id);
  const {
    idCat,
    ProductName,
    categorie,
    Affichagecusine,
    DateAjout,
    TVA,
    Pricev,
    Pricevp,
    unite,
    promo,
    Type,
    Affichage,
    CodeEntreprise,
  } = request.body;
  pool.query(que.getproductbyid, [id], (error, results) => {
    const noproductfound = !results.rows.length;
    if (noproductfound) {
      response.json({ message: "No product found in database" });
    }
  });
  pool.query(
    que.upodateproduit,
    [
      idCat,
      ProductName,
      categorie,
      Affichagecusine,
      DateAjout,
      TVA,
      Pricev,
      Pricevp,
      unite,
      promo,
      Type,
      Affichage,
      CodeEntreprise,
      id,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).json({ message: "Product updated succefully" });
    }
  );
};

const getCategoryById = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(que.getcategorybyid, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const AddCategory = (request, response) => {
  const {
    Categorie,
    Affichage,
    Affichagecuisine,
    Dateajoutcat,
    TVA,
    CodeEntreprise,
  } = request.body;
  pool.query(
    que.addcategorie,
    [Categorie, Affichage, Affichagecuisine, Dateajoutcat, TVA, CodeEntreprise],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).json({ message: "Categorie created succefully" });
    }
  );
};

const getProducts = (request, response) => {
  const CodeEntreprise = parseInt(request.params.CodeEntreprise);
  pool.query(que.getproducts, [CodeEntreprise], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getComposition = (request, response) => {
  const CodeEntreprise = parseInt(request.params.CodeEntreprise);
  pool.query(que.getcomposition, [CodeEntreprise], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getCompositionById = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(que.getcompositionbyId, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const AddComposition = (request, response) => {
  const {
    idCat,
    CategorieCompos,
    AffichageCuisine,
    CompositionName,
    Produit,
    Affichage,
    Prix,
    CodeEntreprise,
  } = request.body;
  pool.query(
    que.createcomposition,
    [
      idCat,
      CategorieCompos,
      AffichageCuisine,
      CompositionName,
      Produit,
      Affichage,
      Prix,
      CodeEntreprise,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).json({ message: "Composition created succefully" });
    }
  );
};

const UpdateComposition = (request, response) => {
  const id = parseInt(request.params.id);
  const {
    idCat,
    CategorieCompos,
    AffichageCuisine,
    CompositionName,
    Produit,
    Affichage,
    Prix,
    CodeEntreprise,
  } = request.body;
  pool.query(que.getcompositionbyId, [id], (error, results) => {
    const nocatcompofound = !results.rows.length;
    if (nocatcompofound) {
      response.json({ message: "No composition found in database" });
    }
  });
  pool.query(
    que.updatecomposition,
    [
      idCat,
      CategorieCompos,
      AffichageCuisine,
      CompositionName,
      Produit,
      Affichage,
      Prix,
      CodeEntreprise,
      id,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).json({ message: "Composition update succefully" });
    }
  );
};

const deleteComposition = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(que.getcompositionbyId, [id], (error, results) => {
    const nocompositionfound = !results.rows.length;
    if (nocompositionfound) {
      response.send("No composition found in database");
    }
    pool.query(que.removecomposition, [id], (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json("Composition deleted");
    });
  });
};

const getProductById = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(que.getproductbyid, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const Addproduct = (request, response) => {
  const {
    idCat,
    ProductName,
    categorie,
    Affichagecusine,
    DateAjout,
    TVA,
    Pricev,
    Pricevp,
    unite,
    promo,
    Type,
    Affichage,
    CodeEntreprise,
  } = request.body;
  pool.query(
    que.addproduit,
    [
      idCat,
      ProductName,
      categorie,
      Affichagecusine,
      DateAjout,
      TVA,
      Pricev,
      Pricevp,
      unite,
      promo,
      Type,
      Affichage,
      CodeEntreprise,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).json({ message: "Product created succefully" });
    }
  );
};

const getCategorieCompo = (request, response) => {
  const CodeEntreprise = parseInt(request.params.CodeEntreprise);
  pool.query(que.getcategorieCompo, [CodeEntreprise], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getCategorieCompoById = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(que.getcategorieCompobyid, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createCategorieCompo = (request, response) => {
  const { idprod, Product, CatgorieCompo, Affichage, CodeEntreprise } =
    request.body;
  pool.query(
    que.createacetgoriecomo,
    [idprod, Product, CatgorieCompo, Affichage, CodeEntreprise],
    (error, results) => {
      if (error) {
        throw error;
      }
      response
        .status(201)
        .send({ message: "Category composition created succefully" });
    }
  );
};

const updateCatcompo = (request, response) => {
  const id = parseInt(request.params.id);
  const { idprod, Product, CatgorieCompo, Affichage, CodeEntreprise } =
    request.body;
  pool.query(
    que.updatecatcompo,
    [idprod, Product, CatgorieCompo, Affichage, CodeEntreprise, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response
        .status(201)
        .json({ message: "Category composition updated succefully" });
    }
  );
};

const AddClient = (request, response) => {
  const {
    NomClient,
    PrenomClient,
    Civilite,
    Societe,
    Telephone,
    Email,
    DateNaissance,
    Adresse,
    Ville,
    CodePostal,
    Batiment,
    Etage,
    Sonette,
    Code1,
    Code2,
    Code3,
    Commentaire,
    Montantfidilite,
    Codebarre,
    NbrComa,
    type,
    CodeEntreprise,
  } = request.body;
  pool.query(
    que.createclient,
    [
      NomClient,
      PrenomClient,
      Civilite,
      Societe,
      Telephone,
      Email,
      DateNaissance,
      Adresse,
      Ville,
      CodePostal,
      Batiment,
      Etage,
      Sonette,
      Code1,
      Code2,
      Code3,
      Commentaire,
      Montantfidilite,
      Codebarre,
      NbrComa,
      type,
      CodeEntreprise,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).json({ message: "Client created succefully" });
    }
  );
};

const LoginAuth = (request, response) => {
  const { CodeEntreprise, Utilisateur, Login } = request.body;
  pool.query(que.checkLogin, [Login], (error, results) => {
    const user = results.rows;
    if (user.length == 0) {
      response.json({ message: "V??rifier Mot de Passe !" });
    } else {
      if (
        CodeEntreprise == user[0].CodeEntreprise &&
        Utilisateur == user[0].Utilisateur
      ) {
        jwt.sign(user[0], secretKey, (error, results) => {
          if (error) {
            response.json({ error: error });
          } else {
            response
              .status(200)
              .json({ Token: results, user, message: "Vous ??tes connect??" });
          }
        });
      } else {
        response.json({
          message: "V??rifier Code Entreprise ou Nom Entreprise !",
        });
      }
    }
  });
};

const Createdevise = (request, response) => {
  const { CodeEntreprise, NomEntreprise, Devise } = request.body;
  pool.query(
    que.createdevise,
    [CodeEntreprise, NomEntreprise, Devise],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).json({ message: "Devise created succefully" });
    }
  );
};

const getDevise = (request, response) => {
  const CodeEntreprise = parseInt(request.params.CodeEntreprise);
  pool.query(que.getdevise, [CodeEntreprise], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const Updatedevise = (request, response) => {
  const id = parseInt(request.params.id);
  const { CodeEntreprise, NomEntreprise, Devise } = request.body;
  pool.query(
    que.updatedevise,
    [CodeEntreprise, NomEntreprise, Devise, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send({ message: "Devise update succefully" });
    }
  );
};


const Removedevise = (request, response) => {
  const id = parseInt(request.params.id);
    pool.query(que.removedevise, [id], (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json("Devise deleted");
    });
  }


module.exports = {
  getUsers,
  createUser,
  getUserById,
  getCategories,
  getCategoryById,
  getProducts,
  getCategorieCompo,
  createCategorieCompo,
  getProductById,
  getCategorieCompoById,
  getClients,
  getClientById,
  AddCategory,
  Addproduct,
  getComposition,
  AddComposition,
  getCompositionById,
  AddClient,
  RemoveUser,
  RemoveClient,
  updateClient,
  updateUser,
  updateCategory,
  updateProduct,
  updateCatcompo,
  UpdateComposition,
  deleteComposition,
  LoginAuth,
  Createdevise,
  getDevise,
  Updatedevise,
  Removedevise
};
