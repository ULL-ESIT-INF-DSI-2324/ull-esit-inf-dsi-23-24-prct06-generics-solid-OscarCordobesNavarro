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
 * Interfaz que define un servicio de notificación genérico.
 * @template T - El tipo de mensaje que se va a notificar.
 */
export interface NotificationService<T> { 
    /**
     * Método para notificar un mensaje.
     * @param message - El mensaje a notificar.
     */
    notify(message: T): void;
}