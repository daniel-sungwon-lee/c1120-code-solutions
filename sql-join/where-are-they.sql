select "a"."line1", "a"."district","c"."name" as "city","ct"."name" as "country"
from "addresses" as "a"
join "cities" as "c" using ("cityId")
join "countries" as "ct" using ("countryId")
