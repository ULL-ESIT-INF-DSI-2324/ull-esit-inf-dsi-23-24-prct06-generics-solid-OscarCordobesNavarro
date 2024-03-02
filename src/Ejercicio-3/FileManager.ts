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

import { FileReader } from "./FileReader";
import { FileWriter } from "./FileWriter";

/**
 * Clase que representa un administrador de archivos.
 * Permite escribir y leer archivos en una ubicación específica.
 */
export class FileManager {
  /**
   * Crea una instancia de FileManager.
   * @param filePath La ruta del archivo.
   */
  constructor(private filePath: string) {}

  /**
   * Escribe datos en el archivo.
   * @param data Los datos a escribir.
   */
  public writeFile(data: string): void {
    const writeFile = new FileWriter(this.filePath);
    writeFile.writeFile(data);
  }

  /**
   * Lee el contenido del archivo.
   * @returns El contenido del archivo.
   */
  public readFile(): string {
    const readFile = new FileReader(this.filePath);
    return readFile.readFile();
  }
}
