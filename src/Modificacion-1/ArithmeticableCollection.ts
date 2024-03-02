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

import { Arithmeticable } from './Arithmeticable';

/**
 * Clase que representa una colección de objetos que implementan la interfaz Arithmeticable.
 * @template T - Tipo de los objetos en la colección que implementan la interfaz Arithmeticable.
 */
export class ArithmeticableCollection<T extends Arithmeticable<T>> {
  private collection: T[];

  /**
   * Crea una instancia de ArithmeticableCollection.
   * @param collection - Colección de objetos que implementan la interfaz Arithmeticable.
   */
  constructor(collection: T[]) {
    this.collection = collection;
  }

  /**
   * Añade un objeto aritmético a la colección.
   * @param a - Objeto aritmético a añadir.
   */
  addAritmeticable(a: T): void {
    this.collection.push(a);
  }

  /**
   * Obtiene un objeto aritmético de la colección.
   * @param index - Índice del objeto aritmético a obtener.
   * @returns El objeto aritmético en el índice especificado.
   */
  getAritmeticable(index: number): T {
    return this.collection[index];
  }

  /**
   * Obtiene el tamaño de la colección.
   * @returns El número de objetos aritméticos en la colección.
   */
  getNumberOfAritmeticables(): number {
    return this.collection.length;
  }
}
