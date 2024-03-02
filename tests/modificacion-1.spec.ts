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

import { Complex } from "../src/Modificacion-1/Complex";
import { Rational } from "../src/Modificacion-1/Rational";
import { ArithmeticableCollection } from "../src/Modificacion-1/ArithmeticableCollection";

describe('Rational class that implements Arithmeticable interface tests', () => {
    it ('Rational class add method test', () => {
        let rational1 = new Rational(1, 2);
        let rational2 = new Rational(3, 4);
        let result = rational1.add(rational2);
        expect(result).to.be.deep.equal(new Rational(5, 4));
    });

    it('Rational class subtract method test', () => {
        let rational1 = new Rational(1, 2);
        let rational2 = new Rational(3, 4);
        let result = rational1.subtract(rational2);
        expect(result).to.be.deep.equal(new Rational(1, -4));
    });

    it('Rational class multiply method test', () => {
        let rational1 = new Rational(1, 2);
        let rational2 = new Rational(3, 4);
        let result = rational1.multiply(rational2);
        expect(result).to.be.deep.equal(new Rational(3, 8));
    });

    it('Rational class divide method test', () => {
        let rational1 = new Rational(1, 2);
        let rational2 = new Rational(3, 4);
        let result = rational1.divide(rational2);
        expect(result).to.be.deep.equal(new Rational(2, 3));
    });

    it('Rational denominator 0 test', () => {
        expect(() => new Rational(1, 0)).to.throw('El denominador no puede ser 0');
    });
});

describe('Complex class that implements Arithmeticable interface tests', () => {
    it ('Complex class add method test', () => {
        let complex1 = new Complex(1, 2);
        let complex2 = new Complex(3, 4);
        let result = complex1.add(complex2);
        expect(result).to.be.deep.equal(new Complex(4, 6));
    });

    it('Complex class subtract method test', () => {
        let complex1 = new Complex(1, 2);
        let complex2 = new Complex(3, 4);
        let result = complex1.subtract(complex2);
        expect(result).to.be.deep.equal(new Complex(-2, -2));
    });

    it('Complex class multiply method test', () => {
        let complex1 = new Complex(1, 2);
        let complex2 = new Complex(3, 4);
        let result = complex1.multiply(complex2);
        expect(result).to.be.deep.equal(new Complex(-5, 10));
    });

    it('Complex class divide method test', () => {
        let complex1 = new Complex(1, 2);
        let complex2 = new Complex(3, 4);
        let result = complex1.divide(complex2);
        expect(result).to.be.deep.equal(new Complex(0.44, 0.08));
    });

    it('Complex to string test', () => {
        let complex1 = new Complex(1, 2);
        expect(complex1.toString()).to.be.equal("1 + 2i");
    });
});

describe('ArithmeticableCollection class tests', () => {
    it('ArithmeticableCollection class addAritmeticable method test', () => {
        let rational1 = new Rational(1, 2);
        let rational2 = new Rational(3, 4);
        let rational3 = new Rational(5, 6);
        let collection = new ArithmeticableCollection([rational1, rational2]);
        collection.addAritmeticable(rational3);
        expect(collection.getNumberOfAritmeticables()).to.be.equal(3);
        collection.addAritmeticable(rational3);
        expect(collection.getNumberOfAritmeticables()).to.be.equal(4);
    });

    it('ArithmeticableCollection class getAritmeticable method test', () => {
        let rational1 = new Rational(1, 2);
        let rational2 = new Rational(3, 4);
        let rational3 = new Rational(5, 6);
        let collection = new ArithmeticableCollection([rational1, rational2, rational3]);
        expect(collection.getAritmeticable(1)).to.be.deep.equal(rational2);
        expect(collection.getAritmeticable(2)).to.be.deep.equal(rational3);
        expect(collection.getAritmeticable(0)).to.be.deep.equal(rational1);
    });

    it('ArithmeticableCollection class getNumberOfAritmeticables method test', () => {
        let rational1 = new Rational(1, 2);
        let rational2 = new Rational(3, 4);
        let rational3 = new Rational(5, 6);
        let collection = new ArithmeticableCollection([rational1, rational2, rational3]);
        expect(collection.getNumberOfAritmeticables()).to.be.equal(3);
        collection.addAritmeticable(rational3);
        expect(collection.getNumberOfAritmeticables()).to.be.equal(4);
    });
});