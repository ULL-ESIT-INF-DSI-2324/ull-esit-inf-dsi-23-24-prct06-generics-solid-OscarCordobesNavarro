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
 * Enumerado que representa los tamaños posibles de un objeto.
 */
export enum size {
    SMALL,
    MEDIUM,
    LARGE
}

/**
 * Interfaz que define las propiedades y métodos de un objeto pertenencia.
 */
export interface Belonging {
    name: string;
    delicate: boolean;
    size: size;

    /**
     * Devuelve el nombre del objeto pertenencia.
     * @returns El nombre del objeto pertenencia.
     */
    getName(): string;

    /**
     * Devuelve si el objeto pertenencia es delicado o no.
     * @returns True si el objeto pertenencia es delicado, false en caso contrario.
     */
    getDelicate(): boolean;

    /**
     * Devuelve el tamaño del objeto pertenencia.
     * @returns El tamaño del objeto pertenencia.
     */
    getSize(): size;
}