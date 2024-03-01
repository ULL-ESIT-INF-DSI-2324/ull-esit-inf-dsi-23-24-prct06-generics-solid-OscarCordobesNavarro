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
import { Scanner } from "../../src/Ejercicio-4/Scanner";
import { Printer } from "../../src/Ejercicio-4/Printer";
import { PrinterScanner } from "../../src/Ejercicio-4/PrinterScanner";

let capturedLogs: string[] = [];

beforeEach(() => {
  capturedLogs = [];
  const originalLog = console.log;
  console.log = (...args: any[]) => {
    capturedLogs.push(args.map((arg) => String(arg)).join(" "));
    originalLog.apply(console, args);
  };
});

afterEach(() => {
  console.log = console.log;
});

describe("Scanner class test", () => {
  it("should exist the Scanner class", () => {
    const scanner = new Scanner();
    expect(scanner).to.be.instanceOf(Scanner);
  });
  it('should print "Scanning..."', () => {
    const scanner = new Scanner();
    scanner.scan();
    expect(capturedLogs[0]).to.be.equal("Scanning...");
  });
});

describe("Printer class test", () => {
  it("should exist the Printer class", () => {
    const printer = new Printer();
    expect(printer).to.be.instanceOf(Printer);
  });
  it('should print "Printing..."', () => {
    const printer = new Printer();
    printer.print();
    expect(capturedLogs[0]).to.be.equal("Printing...");
  });
});

describe("PrinterScanner class test", () => {
  it("should exist the PrinterScanner class", () => {
    const printerScanner = new PrinterScanner();
    expect(printerScanner).to.be.instanceOf(PrinterScanner);
  });
  it('should print "Printing..."', () => {
    const printerScanner = new PrinterScanner();
    printerScanner.print();
    expect(capturedLogs[0]).to.be.equal("Printing...");
  });
  it('should print "Scanning..."', () => {
    const printerScanner = new PrinterScanner();
    printerScanner.scan();
    expect(capturedLogs[0]).to.be.equal("Scanning...");
  });
});


