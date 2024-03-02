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
 * Clase genérica que representa un notificador.
 * @template T - El tipo de mensaje que se enviará.
 */
export class Notifier<T> {
  /**
   * Crea una instancia de Notifier.
   * @param notificationService - El servicio de notificación utilizado para enviar mensajes.
   */
  constructor(private notificationService: NotificationService<T>) {}

  /**
   * Envía una notificación utilizando el servicio de notificación proporcionado.
   * @param message - El mensaje que se enviará.
   */
  sendNotification(message: T): void {
    this.notificationService.notify(message);
  }
}