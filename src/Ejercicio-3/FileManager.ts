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

export class FileManager {
  constructor(private filePath: string) {}

  public writeFile(data: string): void {
    const writeFile = new FileWriter(this.filePath);
    writeFile.writeFile(data);
  }

  public readFile(): string {
    const readFile = new FileReader(this.filePath);
    return readFile.readFile();
  }
}
