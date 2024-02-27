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

import "mocha";
import { expect } from "chai";
import { Bill } from "../src/Ejercicio-2/Bill";
import { Exporter } from "../src/Ejercicio-2/Exporter";
import { ExportBill } from "../src/Ejercicio-2/ExportBill";
import { ExportPDF } from "../src/Ejercicio-2/ExportPDF";
import { ExportHTML } from "../src/Ejercicio-2/ExportHTML";
import { BillsHandler } from "../src/Ejercicio-2/BillsHandler";

describe("Bill class tests", () => {
    it("Bill class is defined", () => {
        const bill: Bill = new Bill(1, new Date() , 100, "oscar");
        expect(bill).to.not.be.undefined;
    });

    it("Bill class has all the properties", () => {
        const bill: Bill = new Bill(1, new Date(2024, 1, 22) , 100, "oscar");
        expect(bill.getId()).to.equal(1);
        expect(bill.getDate()).to.not.be.undefined;
        expect(bill.getDate()).to.be.equal("22/2/2024");
        expect(bill.getAmount()).to.equal(100);
        expect(bill.getClient()).to.equal("oscar");
    });
});

describe("Exporter class tests", () => {
    it("Exporter class is defined", () => {
        const exporter: Exporter<ExportBill> = new Exporter<ExportBill>(new ExportHTML());
        expect(exporter).to.not.be.undefined;
    });

    it("Exporter class can export to PDF", () => {
        const exporter: Exporter<ExportBill> = new Exporter<ExportBill>(new ExportPDF());
        const bill: Bill = new Bill(1, new Date() , 100, "oscar");
        exporter.exportBill(bill);
    });

    it("Exporter class can export to HTML", () => {
        const exporter: Exporter<ExportBill> = new Exporter<ExportBill>(new ExportHTML());
        const bill: Bill = new Bill(1, new Date() , 100, "oscar");
        exporter.exportBill(bill);
    });

    it("Exporter class can change exporter between PDF and HTML", () => {
        const exporter: Exporter<ExportBill> = new Exporter<ExportBill>(new ExportHTML());
        const bill: Bill = new Bill(1, new Date() , 100, "oscar");
        exporter.exportBill(bill);
        exporter.setExporter(new ExportPDF());
        exporter.exportBill(bill);
    });
});

describe("BillsHandler class tests", () => {
    it("BillsHandler class is defined", () => {
        const billsHandler: BillsHandler = new BillsHandler();
        expect(billsHandler).to.not.be.undefined;
    });

    it("BillsHandler class can add bills", () => {
        const billsHandler: BillsHandler = new BillsHandler();
        const bill: Bill = new Bill(1, new Date() , 220, "ramon");
        const bill2: Bill = new Bill(2, new Date() , 200, "pablo");
        billsHandler.addBill(bill);
        expect(billsHandler.getNumberOfBills()).to.equal(1);
        billsHandler.addBill(bill2);
        expect(billsHandler.getNumberOfBills()).to.equal(2);
    });

    it("BillsHandler class can remove bills", () => {
        const billsHandler: BillsHandler = new BillsHandler();
        const bill: Bill = new Bill(1, new Date() , 133, "eduardo");
        const bill2: Bill = new Bill(2, new Date() , 200, "alex");
        billsHandler.addBill(bill);
        billsHandler.addBill(bill2);
        expect(billsHandler.getNumberOfBills()).to.equal(2);
        billsHandler.removeBill(1);
        expect(billsHandler.getNumberOfBills()).to.equal(1);
    });

    it("BillsHandler class can export bills only tomas", () => {
        const billsHandler: BillsHandler = new BillsHandler();
        const bill: Bill = new Bill(1, new Date() , 100, "tomas");
        const bill2: Bill = new Bill(2, new Date() , 200, "pablo");
        billsHandler.addBill(bill);
        billsHandler.addBill(bill2);
        billsHandler.exportBill(1);
    });

    it("BillsHandler class can list bills, andres and pablo", () => {
        const billsHandler: BillsHandler = new BillsHandler();
        const bill: Bill = new Bill(1, new Date() , 100, "andres");
        const bill2: Bill = new Bill(2, new Date() , 200, "pablo");
        billsHandler.addBill(bill);
        billsHandler.addBill(bill2);
        billsHandler.listBills();
    });

    it("BillsHandler class can list bills by name, name searched oscar", () => {
        const billsHandler: BillsHandler = new BillsHandler();
        const bill: Bill = new Bill(1, new Date() , 100, "oscar");
        const bill2: Bill = new Bill(2, new Date() , 200, "pablo");
        billsHandler.addBill(bill);
        billsHandler.addBill(bill2);
        billsHandler.listBillsByName("oscar");
    });

    it("BillsHandler class can change exporter PDF -> HTML", () => {
        const billsHandler: BillsHandler = new BillsHandler();
        const bill: Bill = new Bill(1, new Date() , 100, "oscar");
        billsHandler.addBill(bill);
        billsHandler.exportBill(1);
        billsHandler.setExporter(new Exporter<ExportBill>(new ExportHTML()));
        billsHandler.exportBill(1);
    });
});
