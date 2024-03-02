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

import { ExportBill } from "./ExportBill";
import { Bill } from "./Bill";

/**
 * Clase que representa un exportador genérico.
 * @template T - Tipo de exportador que se utilizará.
 */
export class Exporter<T extends ExportBill> {

    /**
     * Crea una instancia de Exporter.
     * @param exporter - El exportador a utilizar.
     */
    constructor(private exporter: T) {}

    /**
     * Establece el exportador a utilizar.
     * @param exportBill - El exportador a establecer.
     */
    public setExporter(exportBill: T) {
        this.exporter = exportBill;
    }

    /**
     * Exporta una factura utilizando el exportador establecido.
     * @param bill - La factura a exportar.
     */
    public exportBill(bill: Bill): void {
        this.exporter.exportBill(bill);
    }
}