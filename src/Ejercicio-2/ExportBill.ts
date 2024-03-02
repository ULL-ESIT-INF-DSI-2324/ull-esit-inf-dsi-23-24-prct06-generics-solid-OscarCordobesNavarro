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

import { Bill } from './Bill';

/**
 * Interfaz que representa una factura exportable.
 */
export interface ExportBill {
    /**
     * Extensión del archivo de exportación.
     */
    extention: string;

    /**
     * Exporta una factura.
     * @param bill La factura a exportar.
     */
    exportBill(bill: Bill): void;
}