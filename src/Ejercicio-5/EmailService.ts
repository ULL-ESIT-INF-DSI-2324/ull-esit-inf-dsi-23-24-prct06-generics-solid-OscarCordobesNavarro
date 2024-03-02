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
 * Clase que implementa la interfaz NotificationService y se encarga de enviar notificaciones por correo electrónico.
 */
export class EmailService implements NotificationService<string> {
  /**
   * Método que envía una notificación por correo electrónico.
   * @param message El mensaje de la notificación.
   */
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}