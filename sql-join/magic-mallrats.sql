select "cus"."firstName","cus"."lastName"
from "films"
join "inventory" using ("filmId")
join "rentals" using ("inventoryId")
join "customers" as "cus" using ("customerId")
where "films"."title"='Magic Mallrats'
