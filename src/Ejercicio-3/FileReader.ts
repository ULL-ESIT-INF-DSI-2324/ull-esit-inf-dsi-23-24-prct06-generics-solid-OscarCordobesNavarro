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

import * as fs from "fs";

export class FileReader {
  private file: string;

  constructor(file: string) {
    this.file = file;
  }

  public readFile(): string {
    try {
      const content: string = fs.readFileSync(this.file, "utf-8");
      return content;
    } catch (error) {
      console.error("Error al leer el archivo:", (error as Error).message);
      return "";
    }
  }
}
