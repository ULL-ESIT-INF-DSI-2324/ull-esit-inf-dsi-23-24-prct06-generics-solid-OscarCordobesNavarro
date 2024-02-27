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
import { ExportBill } from './ExportBill';

export class ExportPDF implements ExportBill {
    public extention: string = 'pdf';

    exportBill(bill: Bill): void {
        console.log(`Exporting bill ${bill.getId()} to PDF`);
        console.log(this.createPDF(bill));
    }

    private createPDF(bill: Bill): string { // This method is not implemented
        return `
        -------------------------- FACTURA --------------------------
        Numero de factura: ${bill.getId()}
        Total: ${bill.getAmount()}€
        Fecha: ${bill.getDate()}
        A nombre de ${bill.getClient()}
        ¿Está pagada? ${bill.getPaid() ? 'Sí' : 'No'}

        `
    }
}