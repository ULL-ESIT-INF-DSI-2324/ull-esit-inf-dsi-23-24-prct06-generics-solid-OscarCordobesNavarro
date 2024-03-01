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
import { FileManager } from "../../src/Ejercicio-3/FileManager";
import { FileReader } from "../../src/Ejercicio-3/FileReader";
import { FileWriter } from "../../src/Ejercicio-3/FileWriter";

describe("FileReader class tests", () => {
  it("FileReader class is defined", () => {
    const fileReader: FileReader = new FileReader("./example.txt");
    expect(fileReader).to.not.be.undefined;
  });

  it("FileReader class can read a file", () => {
    const fileReader: FileReader = new FileReader(
      "./tests/Ejercicio-3/example.txt",
    );
    const content: string = fileReader.readFile();
    expect(content).to.not.be.undefined;
  });
});

describe("FileWriter class tests", () => {
  it("FileWriter class is defined", () => {
    const fileWriter: FileWriter = new FileWriter("./example.txt");
    expect(fileWriter).to.not.be.undefined;
  });

  it("FileWriter class can write a file", () => {
    const fileWriter: FileWriter = new FileWriter(
      "./tests/Ejercicio-3/read1.txt",
    );
    fileWriter.writeFile(
      "Esto es una prueba para comprobar la clase FileWriter",
    );
    const fileReader: FileReader = new FileReader(
      "./tests/Ejercicio-3/read1.txt",
    );
    const content: string = fileReader.readFile();
    expect(content).to.equal(
      "Esto es una prueba para comprobar la clase FileWriter",
    );
  });
});

describe("FileManager class tests", () => {
  it("FileManager class is defined", () => {
    const fileManager: FileManager = new FileManager("./example.txt");
    expect(fileManager).to.not.be.undefined;
  });

  it("FileManager class can read a file", () => {
    const fileManager: FileManager = new FileManager(
      "./tests/Ejercicio-3/read1.txt",
    );
    const content: string = fileManager.readFile();
    expect(content).to.not.be.undefined;
  });

  it("FileManager class can write a file", () => {
    const fileManager: FileManager = new FileManager(
      "./tests/Ejercicio-3/read2.txt",
    );
    fileManager.writeFile(
      "Esto es una prueba para comprobar la clase FileManager",
    );
    const fileReader: FileReader = new FileReader(
      "./tests/Ejercicio-3/read2.txt",
    );
    const content: string = fileReader.readFile();
    expect(content).to.equal(
      "Esto es una prueba para comprobar la clase FileManager",
    );
  });
});
