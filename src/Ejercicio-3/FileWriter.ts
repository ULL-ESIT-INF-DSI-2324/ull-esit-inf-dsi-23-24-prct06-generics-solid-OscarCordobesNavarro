/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Desarrollo de Sistemas Informáticos
 * Curso: 3º
 * Autor: Óscar Cordobés Navarro
 * Correo: alu0101478081@ull.edu.es
 * Fecha: 18/02/2024
 * Práctica 6: Clases e interfaces genéricas. Principios SOLID
 */

import * as fs from 'fs';

/**
 * Clase que representa un escritor de archivos.
 */
export class FileWriter {
  private file: string;

  /**
   * Crea una instancia de FileWriter.
   * @param file La ruta del archivo a escribir.
   */
  constructor(file: string) {
    this.file = file;
  }

  /**
   * Escribe los datos proporcionados en el archivo.
   * @param data Los datos a escribir en el archivo.
   */
  public writeFile(data: string): void {
    try {
      fs.writeFileSync(this.file, data, 'utf-8');
      console.log('Archivo escrito exitosamente.');
    } catch (error) {
      console.error('Error al escribir en el archivo:', (error as Error).message);
    }
  }
}