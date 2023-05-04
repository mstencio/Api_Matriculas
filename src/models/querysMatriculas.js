export const querys = {

  //C
  crearMatriculas:
  "INSERT INTO matriculas VALUES (@id_estudiante, @id_sede, @id_profesor, @id_cursos, @fecha_hora_consulta);",

      //R - ejemplo simple
  getMatriculas:
   "SELECT * FROM view_get_matriculas",

     //R - Ejemplo con parametro
  getMatriculasById: 
  "SELECT * FROM matriculas WHERE id_matriculas = @id  ",

    //U
actualizarMatriculasById:
"UPDATE estudiante SET nombre = @nombre, cedula = @cedula, telefono = @telefono, direccion = @direccion, correo = @correo WHERE id_estudiante = @id",

  // D
  borrarMatriculasById:
   "DELETE matriculas where id_matriculas = @id",

};