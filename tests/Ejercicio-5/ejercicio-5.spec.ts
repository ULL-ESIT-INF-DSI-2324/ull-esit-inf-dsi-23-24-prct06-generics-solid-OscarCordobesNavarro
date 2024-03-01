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
import { EmailService } from "../../src/Ejercicio-5/EmailService";
import { Notifier } from "../../src/Ejercicio-5/Notifier";
import { ShortMessageService } from "../../src/Ejercicio-5/ShortMessageService";

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

describe("EmailService class test", () => {
  it("should exist the EmailService class", () => {
    const emailService = new EmailService();
    expect(emailService).to.be.instanceOf(EmailService);
  });
  it('should print "Sending notification by email: message"', () => {
    const emailService = new EmailService();
    emailService.notify("message");
    expect(capturedLogs[0]).to.be.equal("Sending notification by email: message");
  });
});

describe("ShortMessageService class test", () => {
  it("should exist the ShortMessageService class", () => {
    const shortMessageService = new ShortMessageService();
    expect(shortMessageService).to.be.instanceOf(ShortMessageService);
  });
  it('should print "Sending notification by SMS: message"', () => {
    const shortMessageService = new ShortMessageService();
    shortMessageService.notify("message");
    expect(capturedLogs[0]).to.be.equal("Sending notification by SMS: message");
  });
});

describe("Notifier class test", () => {
  it("should exist the Notifier class", () => {
    const notifier = new Notifier(new EmailService());
    expect(notifier).to.be.instanceOf(Notifier);
  });
  it('should print "Sending notification by email: message"', () => {
    const notifier = new Notifier(new EmailService());
    notifier.sendNotification("message");
    expect(capturedLogs[0]).to.be.equal("Sending notification by email: message");
  });
  it('should print "Sending notification by SMS: message"', () => {
    const notifier = new Notifier(new ShortMessageService());
    notifier.sendNotification("message");
    expect(capturedLogs[0]).to.be.equal("Sending notification by SMS: message");
  });
});