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
 * Clase que representa una prenda de ropa.
 */
export class Clothes implements Belonging {
    name: string;
    delicate: boolean;
    size: size = size.SMALL;

    /**
     * Crea una instancia de Clothes.
     * @param name - El nombre de la prenda de ropa.
     * @param delicate - Indica si la prenda de ropa es delicada.
     * @param size - El tamaño de la prenda de ropa (opcional).
     */
    constructor(name: string, delicate: boolean, size?: size) {
        this.name = name;
        this.delicate = delicate;
        if (size) {
            this.size = size;
        }
    }

    /**
     * Obtiene el nombre de la prenda de ropa.
     * @returns El nombre de la prenda de ropa.
     */
    getName(): string {
        return this.name;
    }

    /**
     * Indica si la prenda de ropa es delicada.
     * @returns true si la prenda de ropa es delicada, false en caso contrario.
     */
    getDelicate(): boolean {
        return this.delicate;
    }

    /**
     * Obtiene el tamaño de la prenda de ropa.
     * @returns El tamaño de la prenda de ropa.
     */
    getSize(): size {
        return this.size;
    }
}