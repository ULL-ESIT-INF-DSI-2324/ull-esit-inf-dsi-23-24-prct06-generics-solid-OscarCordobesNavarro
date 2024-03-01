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

import { Bill } from "./Bill";
import { ExportBill } from "./ExportBill";
import * as fs from "fs";

export class ExportHTML implements ExportBill {
  public extention: string = "html";

  exportBill(bill: Bill): void {
    console.log(`Exporting bill ${bill.getId()} to HTML`);
    console.log(this.createHTML(bill));
  }

  private createHTML(bill: Bill): string {
    return this.generateHTML(bill);
  }

  private generateHTML(bill: Bill) {
    const htmlString = ` <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bill ${bill.getId()}</title>
        <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 20px;
            box-sizing: border-box;
        }

        h1 {
            text-align: center;
            color: #333;
            border-bottom: 2px solid #333;
            padding-bottom: 10px;
        }

        p {
            text-align: left;
            margin-bottom: 8px;
        }

        .bill-info {
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
            margin-top: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .amount {
            font-size: 24px;
            font-weight: bold;
            color: #27ae60;
        }

        .date {
            color: #333;
        }

        .client {
            color: #3498db;
        }

        .paid-status {
            color: #e74c3c;
            font-weight: bold;
        }
    </style>
    </head>
    
    <body>
        <h1>Bill ${bill.getId()}</h1>
        <p>Amount: ${bill.getAmount()}€</p>
        <p>Date: ${bill.getDate()}</p>
        <p>Client: ${bill.getClient()}</p>
        <p>Paid: ${bill.getPaid() ? "Yes" : "No"}</p>
    </body>
    
    </html>`;

    // Creamos el archivo HTML
    fs.writeFileSync(`./exports/bill${bill.getId()}.html`, htmlString);

    return "Archivo HTML creado correctamente"
  }
}
