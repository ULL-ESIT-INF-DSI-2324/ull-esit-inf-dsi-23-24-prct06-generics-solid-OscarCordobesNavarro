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

/**
 * Representa una factura.
 */
export class Bill {
    /**
     * Crea una instancia de Bill.
     * @param id - El identificador de la factura.
     * @param date - La fecha de la factura.
     * @param amount - El monto de la factura.
     * @param client - El cliente asociado a la factura.
     * @param paid - Indica si la factura ha sido pagada (opcional, por defecto es false).
     */
    constructor(private id: number, private date: Date, private amount: number, private client: string, private paid: boolean = false) {}

    /**
     * Obtiene el identificador de la factura.
     * @returns El identificador de la factura.
     */
    getId(): number {
        return this.id;
    }

    /**
     * Obtiene la fecha de la factura en formato "dd/mm/yyyy".
     * @returns La fecha de la factura.
     */
    getDate(): string {
        const day = this.date.getDate();
        const month = this.date.getMonth() + 1;
        const year = this.date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    /**
     * Obtiene el monto de la factura.
     * @returns El monto de la factura.
     */
    getAmount(): number {
        return this.amount;
    }

    /**
     * Indica si la factura ha sido pagada.
     * @returns true si la factura ha sido pagada, false en caso contrario.
     */
    getPaid(): boolean {
        return this.paid;
    }

    /**
     * Obtiene el cliente asociado a la factura.
     * @returns El cliente asociado a la factura.
     */
    getClient(): string {
        return this.client;
    }
}