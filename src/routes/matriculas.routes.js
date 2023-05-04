import { Router } from "express";
import {
  crearMatriculas,
  getMatriculas,
  getMatriculasById,
  actualizarMatriculasById,
  borrarMatriculasById,
  defaultMatriculas
} from "../controllers/matriculas.controller.js";

const router = Router();

//CRUD para la tabla matriculas

//C
router.post("/matriculas/crearMatriculas", crearMatriculas);

//R - ejemplo simple
router.get("/matriculas/getmatriculas", getMatriculas);

//R - ejemplo con parametro
router.get("/matriculas/getMatriculasById/:id", getMatriculasById);

//U
router.put("/matriculas/actualizarMatriculasById/:id", actualizarMatriculasById);

//D
router.delete("/matriculas/borrarMatriculasById/:id", borrarMatriculasById);


//Ruta en caso de digitar una erronea
router.get("/Matriculas/*", defaultMatriculas);

export default router;
