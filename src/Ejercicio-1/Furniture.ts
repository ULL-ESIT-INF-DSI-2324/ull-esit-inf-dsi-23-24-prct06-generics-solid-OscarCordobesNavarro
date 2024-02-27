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

export class Furniture implements Belonging {
    name: string;
    delicate: boolean;
    size: size;

    constructor(name: string, delicate: boolean, size: size) {
        this.name = name;
        this.delicate = delicate;
        this.size = size;
    }

    getName(): string {
        return this.name;
    }

    getDelicate(): boolean {
        return this.delicate;
    }

    getSize(): size {
        return this.size;
    }
    
}