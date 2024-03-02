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

import { Belonging, size } from './Belonging';

/**
 * Clase que representa un mueble.
 * Implementa la interfaz Belonging.
 */
export class Furniture implements Belonging {
    name: string;
    delicate: boolean;
    size: size;

    /**
     * Crea una instancia de Furniture.
     * @param name - El nombre del mueble.
     * @param delicate - Indica si el mueble es delicado.
     * @param size - El tamaño del mueble.
     */
    constructor(name: string, delicate: boolean, size: size) {
        this.name = name;
        this.delicate = delicate;
        this.size = size;
    }

    /**
     * Obtiene el nombre del mueble.
     * @returns El nombre del mueble.
     */
    getName(): string {
        return this.name;
    }

    /**
     * Indica si el mueble es delicado.
     * @returns true si el mueble es delicado, false en caso contrario.
     */
    getDelicate(): boolean {
        return this.delicate;
    }

    /**
     * Obtiene el tamaño del mueble.
     * @returns El tamaño del mueble.
     */
    getSize(): size {
        return this.size;
    }
    
}