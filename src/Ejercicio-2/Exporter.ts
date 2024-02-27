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

export class Exporter<T extends ExportBill> {

    constructor(private exporter: T) {}

    public setExporter(exportBill: T) {
        this.exporter = exportBill;
    }

    public exportBill(bill: Bill): void {
        this.exporter.exportBill(bill);
    }
}