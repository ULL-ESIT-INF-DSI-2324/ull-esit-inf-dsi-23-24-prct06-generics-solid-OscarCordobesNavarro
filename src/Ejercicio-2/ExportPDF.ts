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

// './exports/bill.pdf'

import { Bill } from "./Bill";
import { ExportBill } from "./ExportBill";
import * as PDFDocument from "pdfkit";
import * as fs from "fs";

export class ExportPDF implements ExportBill {
  public extention: string = "pdf";

  exportBill(bill: Bill): void {
    console.log(`Exporting bill ${bill.getId()} to PDF`);
    console.log(this.createPDF(bill));
  }

  private createPDF(bill: Bill): string {
    return this.generatePDF(bill);
  }

  private generatePDF(bill: Bill) {
    const doc = new PDFDocument({ size: "A4" });
    const output = fs.createWriteStream("./exports/bill.pdf");

    // Si no existe el directorio, lo creamos
    if (!fs.existsSync("./exports")) {
      fs.mkdirSync("./exports");
    }

    doc.fontSize(24);
    doc.font("Courier-Bold");
    doc.text("OscarCN INC.", 50, 50, { align: "center" });
    doc.fontSize(12);
    doc.moveTo(50, 70).lineTo(550, 70).stroke();
    doc.moveDown(3);

    doc.font("Courier-Bold");
    doc.text(`Numero de factura: ${bill.getId()}`, { align: "center" });
    doc.moveDown();

    doc.rect(50, 100, 500, 100).stroke();
    doc.font("Courier");
    doc.text(`Total: ${bill.getAmount()}€`, { align: "left" });
    doc.text(`Fecha: ${bill.getDate()}`, { align: "left" });
    doc.text(`Cliente: ${bill.getClient()}`, { align: "left" });
    doc.text(`Pagado: ${bill.getPaid() ? "Sí" : "No"}`, { align: "left" });

    //Añadir al final de la página un texto en el centro
    doc.font("Courier-Bold");

    while (doc.y < 750) {
      // Si llegamos al final de la página, añadimos un texto
      if (doc.y > 740) {
        doc.text(
          "Este PDF ha sido generado automáticamente utilizando pdfkit",
          { align: "center" },
        );
        break;
      }
      doc.moveDown();
    }

    doc.pipe(output);
    doc.end();

    return `PDF generado en ${output.path}`;
  }
}
