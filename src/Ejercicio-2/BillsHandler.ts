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

import { Bill } from './Bill';
import { Exporter } from './Exporter';
import { ExportBill } from './ExportBill';
import { ExportPDF } from './ExportPDF';

/**
 * Clase que maneja las facturas.
 */
export class BillsHandler {

    private bills: Map<number, Bill> = new Map<number, Bill>();

    /**
     * Constructor de la clase BillsHandler.
     * @param bills - Array de facturas (opcional).
     * @param exporter - Objeto Exporter utilizado para exportar las facturas (por defecto, Exporter<ExportBill> con ExportPDF).
     */
    constructor(bills?: Bill[], private exporter: Exporter<ExportBill> = new Exporter<ExportBill>(new ExportPDF())) {
        if (bills) {
            bills.forEach((bill) => {
                this.bills.set(bill.getId(), bill);
            });
        }
    }

    /**
     * Añade una factura al manejador.
     * @param bill - Factura a añadir.
     */
    public addBill(bill: Bill): void {
        this.bills.set(bill.getId(), bill);
    }

    /**
     * Elimina una factura del manejador.
     * @param id - ID de la factura a eliminar.
     */
    public removeBill(id: number): void {
        this.bills.delete(id);
    }

    /**
     * Exporta una factura utilizando el objeto Exporter.
     * @param id - ID de la factura a exportar.
     */
    public exportBill(id: number): void {
        const bill = this.bills.get(id);
        if (bill) {
            this.exporter.exportBill(bill);
        } else {
            console.log(`Factura con ID ${id} no encontrada`);
        }
    }

    /**
     * Establece el objeto Exporter utilizado para exportar las facturas.
     * @param exporter - Objeto Exporter a establecer.
     */
    public setExporter(exporter: Exporter<ExportBill>): void {
        this.exporter = exporter;
    }

    /**
     * Obtiene un iterador de las facturas almacenadas en el manejador.
     * @returns Un iterador de las facturas.
     */
    private getBills(): Iterator<Bill> {
        return this.bills.values();
    }

    /**
     * Lista todas las facturas utilizando el objeto Exporter.
     */
    public listBills(): void {
        const iterator = this.getBills();
        let result = iterator.next();
        while (!result.done) {
            this.exporter.exportBill(result.value);
            result = iterator.next();
        }
    }

    /**
     * Lista las facturas cuyo cliente coincide con el nombre proporcionado.
     * @param name - Nombre del cliente.
     */
    public listBillsByName(name: string): void {
        const iterator = this.getBills();
        let result = iterator.next();
        while (!result.done) {
            if (result.value.getClient() === name) {
                this.exporter.exportBill(result.value);
            }
            result = iterator.next();
        }
    }

    /**
     * Obtiene el número de facturas almacenadas en el manejador.
     * @returns El número de facturas.
     */
    public getNumberOfBills(): number {
        return this.bills.size;
    }
}