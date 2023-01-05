const getusers = 'SELECT * FROM public."Users" WHERE "CodeEntreprise" = $1 ORDER BY id ASC';
const getclients ='SELECT * FROM public."Client" WHERE "CodeEntreprise" = $1 ORDER BY id ASC';
const getclientbyid = 'SELECT * FROM public."Client" WHERE id = $1';
const getuserbyid = 'SELECT * FROM public."Users" WHERE id = $1';
const getcategories = 'SELECT * FROM public."Categories" WHERE "CodeEntreprise" = $1 ORDER BY id ASC';
const getcategorybyid = 'SELECT * FROM public."Categories" WHERE id = $1';
const addcategorie ='INSERT INTO public."Categories" ("Categorie", "Affichage", "Affichagecuisine", "Dateajoutcat","TVA","CodeEntreprise") VALUES ($1, $2, $3, $4, $5, $6)';
const getproducts = 'SELECT * FROM public."Products" WHERE "CodeEntreprise" = $1 ORDER BY id ASC';
const getcomposition = 'SELECT * FROM public."Composition" WHERE "CodeEntreprise" = $1 ORDER BY id ASC';
const getcompositionbyId = 'SELECT * FROM public."Composition" WHERE id = $1';
const getproductbyid = 'SELECT * FROM public."Products" WHERE id = $1';
const addproduit ='INSERT INTO public."Products" ("idCat", "ProductName", "categorie", "Affichagecusine", "DateAjout", "TVA", "Pricev", "Pricevp", "unite", "promo", "Type","Affichage", "CodeEntreprise") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11,$12,$13)';
const getcategorieCompo = 'SELECT * FROM public."CategorieComposintion" WHERE "CodeEntreprise" = $1 ORDER BY id ASC';
const getcategorieCompobyid = 'SELECT * FROM public."CategorieComposintion" WHERE id = $1';
const createuser ='INSERT INTO public."Users" ("CodeEntreprise", "NomEntreprise", "NomUser", "PrenomUser","Login", "Email", "Telephone", "DateAjout", "Role") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)';
const createacetgoriecomo = 'INSERT INTO public."CategorieComposintion" (idprod, "Product", "CatgorieCompo","Affichage", "CodeEntreprise") VALUES ($1, $2, $3, $4, $5)';
const createcomposition = 'INSERT INTO public."Composition" ("idCat","CategorieCompos","AffichageCuisine","CompositionName","Produit","Affichage","Prix", "CodeEntreprise") VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
const createclient = 'INSERT INTO public."Client" ("NomClient","PrenomClient","Civilite","Societe","Telephone","Email","DateNaissance","Adresse","Ville","CodePostal","Batiment","Etage","Sonette","Code1","Code2","Code3","Commentaire","Montantfidilite","Codebarre","NbrComa", "type", "CodeEntreprise") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)';
const removeuser = 'DELETE FROM public."Users" WHERE id = $1';
const removeclient = 'DELETE FROM public."Client" WHERE id = $1';
const updateclient = 'UPDATE public."Client" SET "NomClient" = $1,"PrenomClient" = $2,"Civilite" = $3,"Societe" = $4,"Telephone" = $5,"Email" = $6,"DateNaissance" = $7,"Adresse" = $8,"Ville" = $9,"CodePostal" = $10,"Batiment" = $11,"Etage" = $12,"Sonette" = $13,"Code1" = $14,"Code2" = $15,"Code3" = $16,"Commentaire" = $17,"Montantfidilite" = $18,"Codebarre" = $19,"NbrComa" = $20, "type" = $21, "CodeEntreprise" = $22  WHERE id=$23';
const updateuser = 'UPDATE public."Users" SET "CodeEntreprise" = $1, "NomEntreprise" = $2, "NomUser" = $3, "PrenomUser" = $4,"Login" = $5, "Email" = $6, "Telephone" = $7, "DateAjout" = $8, "Role" = $9 WHERE id = $10';
const updatecategorie ='UPDATE public."Categories" SET "Categorie" = $1, "Affichage" = $2, "Affichagecuisine" = $3, "Dateajoutcat" = $4,"TVA" = $5, "CodeEntreprise" = $6 WHERE id = $7';
const upodateproduit = 'UPDATE public."Products" SET  "idCat" = $1, "ProductName" = $2, "categorie" = $3, "Affichagecusine" = $4, "DateAjout" = $5, "TVA" = $6, "Pricev" = $7, "Pricevp" = $8, "unite" = $9, "promo" = $10, "Type" = $11, "Affichage" = $12, "CodeEntreprise" = $13 WHERE id = $14';
const updatecatcompo = 'UPDATE public."CategorieComposintion" SET idprod = $1, "Product" = $2, "CatgorieCompo" = $3, "Affichage" = $4, "CodeEntreprise" = $5   WHERE id = $6';
const updatecomposition = 'UPDATE public."Composition" SET "idCat" = $1,"CategorieCompos" = $2,"AffichageCuisine" = $3,"CompositionName" = $4,"Produit" = $5,"Affichage" = $6,"Prix" = $7, "CodeEntreprise" = $8 WHERE id = $9';
const removecomposition = 'DELETE FROM public."Composition" WHERE id = $1';
const checkLoginexistance = 'SELECT u FROM public."Users" u WHERE u."Login"=$1';
const checkLogin = 'SELECT * FROM public."Users" WHERE "Login"=$1';
const createdevise = 'INSERT INTO public."Devise" ("CodeEntreprise", "NomEntreprise", "Devise") VALUES ($1, $2, $3)';
const getdevise = 'SELECT * FROM public."Devise" WHERE "CodeEntreprise" = $1 LIMIT 1';
const updatedevise = 'UPDATE public."Devise" SET  "CodeEntreprise" = $1, "NomEntreprise" = $2, "Devise" = $3 WHERE id = $4';
const removedevise = 'DELETE FROM public."Devise" WHERE id = $1';
module.exports = {
  getusers,
  getuserbyid,
  getcategories,
  getcategorybyid,
  getproducts,
  getcategorieCompo,
  createuser,
  createacetgoriecomo,
  getproductbyid,
  getcategorieCompobyid,
  getclients,
  getclientbyid,
  addcategorie,
  addproduit,
  getcomposition,
  createcomposition,
  getcompositionbyId,
  createclient,
  removeuser,
  removeclient,
  updateclient,
  updateuser,
  updatecategorie,
  upodateproduit,
  updatecatcompo,
  updatecomposition,
  removecomposition,
  checkLoginexistance,
  checkLogin,
  createdevise,
  getdevise,
  updatedevise,
  removedevise
};



