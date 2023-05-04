import { getConnection, querys, sql } from "../models/index.js";

//Función para crear un registro de una matricula
export const crearMatriculas = async (req, res) => {
  let { id_estudiante } = req.body;
  let { id_sede } = req.body;
  let { id_profesor } = req.body;
  let { id_cursos } = req.body;
  let { fecha_hora_consulta } = req.body;
  

  
  
  // validacion
  if (id_estudiante == null) {
    return res.status(400).json({ msg: "Por favor llene el campo del estudiante requerido" });
  }
  else if (id_sede == null) {
      return res.status(400).json({ msg: "Por favor llene el campo de la sede requerido" });
    }
    else if (id_profesor == null) {
      return res.status(400).json({ msg: "Por favor llene el campo del profesor requerido" });
    }
    else if (id_cursos == null) {
      return res.status(400).json({ msg: "Por favor llene el campo del curso requerido" });
    }
    else if ( fecha_hora_consulta == null) {
      return res.status(400).json({ msg: "Por favor llene el campo de la fecha requerido" });
    }
    


  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("id_estudiante", sql.VarChar, id_estudiante)
      .input("id_sede", sql.VarChar, id_sede)
      .input("id_profesor", sql.VarChar, id_profesor)
      .input("id_cursos", sql.VarChar, id_cursos)
      .input("fecha_hora_consulta", sql.VarChar, fecha_hora_consulta)
      .query(querys.crearMatriculas);

    res.json({ id_estudiante, id_sede, id_profesor, id_cursos, fecha_hora_consulta });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


//Función para obtener todos los datos de las matriculas
export const getMatriculas = async (req, res) => {
try {

  const pool = await getConnection();

  const result = await pool
  .request()
  .query(querys.getMatriculas);

  res.json(result.recordset);

} catch (error) {
  res.status(500);
  res.send(error.message);
}
};


//Funcion para obtener los datos de matriculas escogiendo el id
export const getMatriculasById = async (req, res) => {
try {
  const pool = await getConnection();

  const result = await pool
    .request()
    .input("id", req.params.id)
    .query(querys.getMatriculasById);

  return res.json(result.recordset[0]);
} catch (error) {
  res.status(500);
  res.send(error.message);
}
};


//Funcion para actualizar los datos de una matricula
export const actualizarMatriculasById = async (req, res) => { 
  const { id_estudiante } = req.body;
  const { id_sede } = req.body;
  const { id_profesor } = req.body;
  const { id_cursos } = req.body;
  const { fecha_hora_consulta } = req.body;

// validacion

if (id_estudiante == null) {
  return res.status(400).json({ msg: "Por favor llene el campo del estudiante requerido" });
}
else if (id_sede == null) {
    return res.status(400).json({ msg: "Por favor llene el campo de la sede requerido" });
  }
  else if (id_profesor == null) {
    return res.status(400).json({ msg: "Por favor llene el campo del profesor requerido" });
  }
  else if (id_cursos == null) {
    return res.status(400).json({ msg: "Por favor llene el campo del curso requerido" });
  }
  else if ( fecha_hora_consulta == null) {
    return res.status(400).json({ msg: "Por favor llene el campo de la fecha requerido" });
  }


  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("id_estudiante", sql.VarChar, id_estudiante)
      .input("id_sede", sql.VarChar, id_sede)
      .input("id_profesor", sql.VarChar, id_profesor)
      .input("id_cursos", sql.VarChar, id_cursos)
      .input("fecha_hora_consulta", sql.VarChar, fecha_hora_consulta)
      .query(querys.crearMatriculas);

    res.json({ id_estudiante, id_sede, id_profesor, id_cursos, fecha_hora_consulta });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Funcion para borrar una matricula escogiendo el id
export const borrarMatriculasById = async (req, res) => {
try {
  const pool = await getConnection();

  const result = await pool
    .request()
    .input("id", req.params.id)
    .query(querys.borrarMatriculasById);

  if (result.rowsAffected[0] === 0) return res.sendStatus(404);

  return res.sendStatus(204);
} catch (error) {
  res.status(500);
  res.send(error.message);
}
};


export const defaultMatriculas = (req, res) => res.send('Error 404 | La ruta que buscas no existe en esta API. Revisa la ruta que estás digitando.');