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
import * as PDFDocument from "pdfkit";
import * as fs from "fs";

/**
 * Clase que representa la exportación de una factura a formato PDF.
 * Implementa la interfaz ExportBill.
 */
export class ExportPDF implements ExportBill {
  public extention: string = "pdf";

  /**
   * Exporta una factura a formato PDF.
   * @param bill La factura a exportar.
   */
  exportBill(bill: Bill): void {
    console.log(`Exportando factura ${bill.getId()} a PDF`);
    console.log(this.generatePDF(bill));
  }

  /**
   * Genera el contenido PDF de la factura.
   * @param bill La factura para la cual se va a generar el PDF.
   * @returns Fragmento de texto que indica la ruta del PDF generado.
   */
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
