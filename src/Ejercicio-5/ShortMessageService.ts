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

import { NotificationService } from "./NotificationService";

/**
 * Clase que implementa la interfaz NotificationService y se encarga de enviar notificaciones por SMS.
 */
export class ShortMessageService implements NotificationService<string> {
  /**
   * Método que envía una notificación por SMS.
   * @param message El mensaje a enviar.
   */
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}
