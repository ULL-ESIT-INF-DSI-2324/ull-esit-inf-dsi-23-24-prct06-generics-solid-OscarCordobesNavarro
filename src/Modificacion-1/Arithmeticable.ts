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

/**
 * Interfaz genérica que define las operaciones aritméticas básicas.
 * @template T El tipo de dato sobre el que se realizarán las operaciones.
 */
export interface Arithmeticable<T> {
  /**
   * Realiza la operación de suma entre dos valores de tipo T.
   * @param b El segundo valor de la suma.
   * @returns El resultado de la suma.
   */
  add: (b: T) => T;

  /**
   * Realiza la operación de resta entre dos valores de tipo T.
   * @param b El valor que se resta.
   * @returns El resultado de la resta.
   */
  subtract: (b: T) => T;

  /**
   * Realiza la operación de multiplicación entre dos valores de tipo T.
   * @param b El segundo valor de la multiplicación.
   * @returns El resultado de la multiplicación.
   */
  multiply: (b: T) => T;

  /**
   * Realiza la operación de división entre dos valores de tipo T.
   * @param b El valor divisor.
   * @returns El resultado de la división.
   */
  divide: (b: T) => T;
}

