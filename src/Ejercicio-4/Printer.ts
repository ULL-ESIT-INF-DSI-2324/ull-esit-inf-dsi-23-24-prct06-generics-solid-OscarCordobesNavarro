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

import { Printable } from './Printable';

/**
 * Clase que implementa la interfaz Printable y representa una impresora.
 */
export class Printer implements Printable {
  /**
   * Imprime un documento.
   */
  print(): void {
    console.log('Printing...');
  }
}