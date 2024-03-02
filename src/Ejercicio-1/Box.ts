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

/**
 * Clase que representa una caja genérica que puede contener objetos de tipo T.
 */
export class Box<T extends Belonging> {

    private items: Map<string, T> = new Map<string, T>();
    private id: string;

    /**
     * Crea una instancia de la clase Box.
     * @param id El identificador de la caja.
     */
    constructor(id: string) {
        this.id = id;
    }

    /**
     * Añade un elemento a la caja.
     * @param item El elemento a añadir.
     */
    addItem(item: T): void {
        this.items.set(item.getName(), item);
    }

    /**
     * Elimina un elemento de la caja.
     * @param item El nombre del elemento a eliminar.
     */
    removeItem(item: string): void {
        this.items.delete(item);
    }

    /**
     * Obtiene el nombre de la caja.
     * @returns El nombre de la caja.
     */
    getName(): string {
        return this.id;
    }

    /**
     * Obtiene un iterador de los elementos de la caja.
     * @returns Un iterador de los elementos de la caja.
     */
    private getItems(): Iterator<T> {
        return this.items.values();
    }

    /**
     * Busca un elemento en la caja.
     * @param item El nombre del elemento a buscar.
     * @returns El elemento encontrado.
     */
    findItem(item: string): T {
        return this.items.get(item)!;
    }

    /**
     * Muestra por consola los elementos de la caja.
     */
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