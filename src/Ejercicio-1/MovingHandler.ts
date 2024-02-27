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

import { Belonging } from './Belonging';
import { Box } from './Box';

export class MovingHandler<T extends Belonging> {
    private boxes: Map<string, Box<T>>;

    constructor() {
        this.boxes = new Map<string, Box<T>>();
    }

    public addBox(box: Box<T>): void {
        this.boxes.set(box.getName(), box);
    }

    public removeBox(box: string): void {
        this.boxes.delete(box);
    }

    private getBoxes(): Iterator<Box<T>> {
        return this.boxes.values();
    }

    public findBox(box: string): Box<T> {
        return this.boxes.get(box)!;
    }

    public listBoxes(): void {
        console.log("Boxes: ");
        const iterator = this.getBoxes();
        let result = iterator.next();
        while (!result.done) {
            result.value.listItems();
            result = iterator.next();
        }
    }
}