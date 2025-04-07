const express = require('express');
const router = express.Router();

const reservationsController = require('../Controllers/reservationsController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       required:
 *         - hotel
 *         - reservations_status
 *         - checkin_date
 *         - checkout_date
 *         - room_type
 *         - number_of_rooms
 *         - number_of_guests
 *         - id
 *       properties:
 *         id:
 *           type: integer
 *           description: The reservation's unique identifier
 *         hotel:
 *           type: string
 *           description: The hotel's name
 *         reservations_status:
 *           type: string
 *           description: The status of the reservation
 *         checkin_date:
 *           type: string
 *           description: The check-in date of the reservation
 *         checkout_date:
 *           type: string
 *           description: The check-out date of the reservation
 *         room_type:
 *           type: string
 *           description: The type of room reserved
 *         number_of_rooms:
 *           type: integer
 *           description: The number of rooms reserved
 *         number_of_guests:
 *           type: integer
 *           description: The number of guests for the reservation
 *       example:
 *         hotel: Pizza Hotel
 *         reservations_status: Reserved
 *         checkin_date: 2024-09-01
 *         checkout_date: 2024-10-05
 *         room_type: Suit deluxe
 *         number_of_rooms: 5
 *         number_of_guests: 1
 *         id: 1
 */

/**
 * @swagger
 * /api/reservations:
 *   post:
 *     summary: Create a new reservation
 *     tags: [Reservations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       201:
 *         description: Reservation created successfully
 */
router.post('/', reservationsController.create);

/**
 * @swagger
 * /api/reservations:
 *   get:
 *     summary: Get list of all reservations
 *     tags: [Reservations]
 *     responses:
 *       200:
 *         description: A list of reservations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/reservation'
 *       500:
 *         description: Server not found
 */
router.get('/', reservationsController.readAll);

/**
 * @swagger
 * /api/reservations/{id}:
 *   put:
 *     summary: Update information of a specific reservation
 *     tags: [Reservations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The reservation's unique identifier
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: Reservation updated successfully
 *       404:
 *         description: Reservation not found
 */
router.put('/:id', reservationsController.update);

/**
 * @swagger
 * /api/reservations/{id}:
 *   delete:
 *     summary: Delete a specific reservation
 *     tags: [Reservations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The reservation's unique identifier
 *     responses:
 *       200:
 *         description: Reservation deleted successfully
 *       404:
 *         description: Reservation not found
 */
router.delete('/:id', reservationsController.delete);

/**
 * @swagger
 * /api/reservations/search:
 *   get:
 *     summary: Search reservations with filters
 *     tags: [Reservations]
 *     parameters:
 *       - in: query
 *         name: hotel
 *         schema:
 *           type: string
 *         description: The name of the hotel
 *       - in: query
 *         name: reservations_status
 *         schema:
 *           type: string
 *         description: The hotel's reservation status
 *       - in: query
 *         name: checkin_date
 *         schema:
 *           type: string
 *           format: date
 *         description: The date of check-in
 *       - in: query
 *         name: checkout_date
 *         schema:
 *           type: string
 *           format: date
 *         description: The date of check-out
 *       - in: query
 *         name: room_type
 *         schema:
 *           type: string
 *         description: The type of room reserved
 *       - in: query
 *         name: number_of_rooms
 *         schema:
 *           type: integer
 *         description: The number of rooms reserved
 *       - in: query
 *         name: number_of_guests
 *         schema:
 *           type: integer
 *         description: The number of guests for the reservation
 *     responses:
 *       200:
 *         description: A list of reservations that match the filters
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
router.get('/search', reservationsController.filter);

module.exports = router;
