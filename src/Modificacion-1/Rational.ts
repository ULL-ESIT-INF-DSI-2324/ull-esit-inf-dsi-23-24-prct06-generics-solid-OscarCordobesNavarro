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

import { Arithmeticable } from "./Arithmeticable";

/**
 * Representa un número racional y proporciona operaciones aritméticas básicas.
 */
export class Rational implements Arithmeticable<Rational> {
    private numerator: number;
    private denominator: number;
    
    /**
     * Crea una instancia de la clase Rational.
     * @param numerator El numerador del número racional.
     * @param denominator El denominador del número racional.
     * @throws Error si el denominador es 0.
     */
    constructor(numerator: number, denominator: number) {
        if (denominator === 0) {
            throw new Error('El denominador no puede ser 0');
        } else {
            this.numerator = numerator;
            this.denominator = denominator;
        }
    }
    
    /**
     * Realiza la suma de dos números racionales.
     * @param b El número racional a sumar.
     * @returns El resultado de la suma.
     */
    add(b: Rational): Rational {
        const result = new Rational(this.numerator * b.denominator + b.numerator * this.denominator, this.denominator * b.denominator);
        return result.simplify();
    }
    
    /**
     * Realiza la resta de dos números racionales.
     * @param b El número racional a restar.
     * @returns El resultado de la resta.
     */
    subtract(b: Rational): Rational {
        const result = new Rational(this.numerator * b.denominator - b.numerator * this.denominator, this.denominator * b.denominator);
        return result.simplify();
    }
    
    /**
     * Realiza la multiplicación de dos números racionales.
     * @param b El número racional a multiplicar.
     * @returns El resultado de la multiplicación.
     */
    multiply(b: Rational): Rational {
        const result = new Rational(this.numerator * b.numerator, this.denominator * b.denominator);
        return result.simplify();
    }
    
    /**
     * Realiza la división de dos números racionales.
     * @param b El número racional a dividir.
     * @returns El resultado de la división.
     */
    divide(b: Rational): Rational {
        const result = new Rational(this.numerator * b.denominator, this.denominator * b.numerator);
        return result.simplify();
    }

    private mcd(n1: number, n2: number): number {
        if (n2 === 0) {
          return n1;
        }
        return this.mcd(n2, n1 % n2);
    }

    private simplify(): Rational {
        const mcd = this.mcd(this.numerator, this.denominator);
        return new Rational(this.numerator / mcd, this.denominator / mcd);
    }

}