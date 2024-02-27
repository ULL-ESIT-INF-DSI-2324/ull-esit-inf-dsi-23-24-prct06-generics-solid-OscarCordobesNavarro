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

export class Box<T extends Belonging> {

    private items: Map<string, T> = new Map<string, T>();
    private id: string;

    constructor(id: string) {
        this.id = id;
    }

    addItem(item: T): void {
        this.items.set(item.getName(), item);
    }

    removeItem(item: string): void {
        this.items.delete(item);
    }

    getName(): string {
        return this.id;
    }

    private getItems(): Iterator<T> {
        return this.items.values();
    }

    findItem(item: string): T {
        return this.items.get(item)!;
    }

    listItems(): void {
        const iterator = this.getItems();
        let result = iterator.next();
        let items: string = "";
        while (!result.done) {
            items += result.value.getName() + ", ";
            result = iterator.next();
        }
        console.log("Id: " + this.id + "( Items: " +this.items.size + ")" + " contains: " + items);
    }
}