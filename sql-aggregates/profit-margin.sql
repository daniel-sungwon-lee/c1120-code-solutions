select "f"."title" as "movie",
       (sum("p"."amount") - "f"."replacementCost") as "profit"
from "films" as "f"
join "inventory" as "i" using ("filmId")
join "rentals" as "r" using ("inventoryId")
join "payments" as "p" using ("rentalId")
group by "f"."filmId"
order by (sum("p"."amount") - "f"."replacementCost") desc
limit 5
