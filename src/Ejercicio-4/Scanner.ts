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

import { Scannable } from "./Scannable";

/**
 * Clase que representa un escáner.
 * Implementa la interfaz Scannable.
 */
export class Scanner implements Scannable {
  /**
   * Realiza el escaneo.
   * Imprime en la consola 'Scanning...'.
   */
  scan(): void {
    console.log('Scanning...');
  }
}