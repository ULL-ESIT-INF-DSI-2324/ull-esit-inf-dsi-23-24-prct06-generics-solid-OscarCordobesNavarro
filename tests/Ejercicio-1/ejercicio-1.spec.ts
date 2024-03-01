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

import { Belonging, size } from "../../src/Ejercicio-1/Belonging";
import { Clothes } from "../../src/Ejercicio-1/Clothes";
import { Furniture } from "../../src/Ejercicio-1/Furniture";
import { Box } from "../../src/Ejercicio-1/Box";
import { MovingHandler } from "../../src/Ejercicio-1/MovingHandler";

describe("Belonging items tests", () => {
  it("Clothes tests", () => {
    const clothes = new Clothes("shirt", false);
    it("Clothes name test", () => {
      expect(clothes.getName()).to.equal("shirt");
    });

    it("Clothes size test", () => {
      expect(clothes.getSize()).to.equal(size.SMALL);
    });

    it("Clothes delicacy test", () => {
      expect(clothes.getDelicate()).to.equal(false);
    });
  });
  it("Furniture tests", () => {
    const furniture = new Furniture("table", true, size.LARGE);
    it("Furniture name test", () => {
      expect(furniture.getName()).to.equal("table");
    });

    it("Furniture size test", () => {
      expect(furniture.getSize()).to.equal(size.LARGE);
    });

    it("Furniture delicacy test", () => {
      expect(furniture.getDelicate()).to.equal(true);
    });
  });
});

describe("Box tests", () => {
  const box = new Box<Belonging>("box1");
  const clothes = new Clothes("shirt", false);
  const furniture = new Furniture("table", true, size.LARGE);
  box.addItem(clothes);
  box.addItem(furniture);
  it("find shirt should return clothes", () => {
    expect(box.findItem("shirt")).to.equal(clothes);
  });
  it("findItem 'table' should return furniture", () => {
    expect(box.findItem("table")).to.equal(furniture);
  });

  it("findItem 'chair' should return undefined", () => {
    expect(box.findItem("chair")).to.equal(undefined);
  });

  it("findItem 'pants' should return undefined", () => {
    expect(box.findItem("pants")).to.equal(undefined);
  });

  it("getName should return 'box1'", () => {
    expect(box.getName()).to.equal("box1");
  });

  it("removeItem 'shirt' should return undefined", () => {
    expect(box.removeItem("shirt")).to.equal(undefined);
  });

  it("removeItem 'table' should return undefined", () => {
    expect(box.removeItem("table")).to.equal(undefined);
  });
});

describe("MovingHandler tests", () => {
  const box = new Box<Belonging>("box1");
  const clothes = new Clothes("shirt", false);
  const furniture = new Furniture("table", true, size.LARGE);
  box.addItem(clothes);
  box.addItem(furniture);
  const box2 = new Box<Belonging>("box2");
  const box3 = new Box<Belonging>("box3");
  const box4 = new Box<Belonging>("box4");
  const movingHandler = new MovingHandler();
  movingHandler.addBox(box);
  movingHandler.addBox(box2);
  movingHandler.addBox(box3);
  movingHandler.addBox(box4);
  it("addBox should return undefined", () => {
    expect(movingHandler.addBox(box)).to.equal(undefined);
  });
  it("removeBox should return undefined", () => {
    expect(movingHandler.removeBox("box1")).to.equal(undefined);
  });
  it("findBox should return box2", () => {
    expect(movingHandler.findBox("box2")).to.equal(box2);
  });
  it("findBox should return box3", () => {
    expect(movingHandler.findBox("box3")).to.equal(box3);
  });
});
