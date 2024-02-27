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

export class ExportHTML implements ExportBill {
    public extention: string = 'html';

    exportBill(bill: Bill): void {
        console.log(`Exporting bill ${bill.getId()} to HTML`);
        console.log(this.createHTML(bill));
    }

    private createHTML(bill: Bill): string {
        return `
            <html>
                <head>
                    <title>Bill ${bill.getId()}</title>
                </head>
                <body>
                    <h1>Bill ${bill.getId()}</h1>
                    <p>Amount: ${bill.getAmount()}€</p>
                    <p>Date: ${bill.getDate()}</p>
                    <p>Client: ${bill.getClient()}</p>
                </body>
            </html>
        `;
    }
}