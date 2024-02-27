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


export class BillsHandler {

    private bills: Map<number, Bill> = new Map<number, Bill>();

    constructor(bills?: Bill[], private exporter: Exporter<ExportBill> = new Exporter<ExportBill>(new ExportPDF())) {
        if (bills) {
            bills.forEach((bill) => {
                this.bills.set(bill.getId(), bill);
            });
        }
    }

    public addBill(bill: Bill): void {
        this.bills.set(bill.getId(), bill);
    }

    public removeBill(id: number): void {
        this.bills.delete(id);
    }

    public exportBill(id: number): void {
        const bill = this.bills.get(id);
        if (bill) {
            this.exporter.exportBill(bill);
        } else {
            console.log(`Bill with id ${id} not found`);
        }
    }

    public setExporter(exporter: Exporter<ExportBill>): void {
        this.exporter = exporter;
    }

    private getBills(): Iterator<Bill> {
        return this.bills.values();
    }

    public listBills(): void {
        const iterator = this.getBills();
        let result = iterator.next();
        while (!result.done) {
            this.exporter.exportBill(result.value);
            result = iterator.next();
        }
    }

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

    public getNumberOfBills(): number {
        return this.bills.size;
    }
}