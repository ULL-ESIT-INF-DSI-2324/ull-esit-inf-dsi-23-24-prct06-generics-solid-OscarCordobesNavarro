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
import { Scannable } from './Scannable';

export class PrinterScanner implements Printable, Scannable {
  print(): void {
    console.log('Printing...');
  }
  scan(): void {
    console.log('Scanning...');
  }
}
