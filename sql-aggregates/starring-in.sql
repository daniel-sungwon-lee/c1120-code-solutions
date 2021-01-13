select "c"."name" as "category",
       count("cm".*) as "filmCount"
from "actors" as "a"
join "castMembers" as "cm" using ("actorId")
join "filmCategory" as "fc" using ("filmId")
join "categories" as "c" using ("categoryId")
where "a"."actorId"=178
group by "c"."categoryId"
order by count("cm".*) desc
