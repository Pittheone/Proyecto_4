
# Porjecto backend Pedro Ascui

Este proyecto es para aplicar las operaciones CRUD, utulizando node y express para su uso. Como detallado en la explicación del proyecto, es para hacer un sistema de reservas de hotel. También el proyecto tiene permanencia en la carpeta de data donde se encuentra database.json . 

## El port del proyecto es:
PORT=3000
y el URl del server es:
SERVER_URL=http://localhost:3000 

Los elementos para modificar y buscar son:
"hotel", 
"reservations_status",
"checkin_date",
"checkout_date",
"room_type",
"number_of_rooms",
"number_of_guests",
"id"

Para crear y obtener lista de reservas se necesita:
localhost:3000/api/reservations

Para actualizar y reservar una reserva se necesita:
localhost:3000/api/reservations/id

Para filtar reservas según hotel se necesita:
localhost:3000/api/reservations/search?hotel=

Para filtrar reservas según el tipo de habitación se necesita:
localhost:3000/api/reservations/search?room_type=

Para filtrar las fechas de la reserva se necesita:
ocalhost:3000/api/reservations/search?checkin_date=&checkout_date=

(Hay que poner la fecha en checkin_date y checkout_date, como por ejemplo:
localhost:3000/api/reservations/search?checkin_date=2024-09-01&checkout_date=2024-10-05)

Para filtar según el estado de la habitación se necesita:
localhost:3000/api/reservations/search?reservations_status=

Para filtrar según el número de de huéspedes se necesita:
localhost:3000/api/reservations/search?number_of_guests=

Para filtrar según el número de habitaciones se necesita:
localhost:3000/api/reservations/search?number_of_rooms=

Espero que se diviertan revisando este proyecto desarrollado por Pedro Ascui.







