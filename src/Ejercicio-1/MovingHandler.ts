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

/**
 * Clase que maneja el movimiento de objetos genéricos.
 * @template T - Tipo de objeto que puede ser movido.
 */
export class MovingHandler<T extends Belonging> {
    private boxes: Map<string, Box<T>>;

    constructor() {
        this.boxes = new Map<string, Box<T>>();
    }

    /**
     * Añade una caja al manejador.
     * @param box - Caja a añadir.
     */
    public addBox(box: Box<T>): void {
        this.boxes.set(box.getName(), box);
    }

    /**
     * Elimina una caja del manejador.
     * @param box - Nombre de la caja a eliminar.
     */
    public removeBox(box: string): void {
        this.boxes.delete(box);
    }

    /**
     * Obtiene un iterador de las cajas del manejador.
     * @returns Iterador de las cajas.
     */
    private getBoxes(): Iterator<Box<T>> {
        return this.boxes.values();
    }

    /**
     * Busca una caja en el manejador.
     * @param box - Nombre de la caja a buscar.
     * @returns La caja encontrada.
     */
    public findBox(box: string): Box<T> {
        return this.boxes.get(box)!;
    }

    /**
     * Lista todas las cajas del manejador.
     */
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