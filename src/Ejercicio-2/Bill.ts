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

export class Bill {
    constructor(private id: number, private date: Date, private amount: number, private client: string, private paid: boolean = false) {}

    getId(): number {
        return this.id;
    }

    getDate(): string {
        const day = this.date.getDate();
        const month = this.date.getMonth() + 1;
        const year = this.date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    getAmount(): number {
        return this.amount;
    }

    getPaid(): boolean {
        return this.paid;
    }

    getClient(): string {
        return this.client;
    }
}