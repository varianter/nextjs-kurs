# Case

For å kjøre lokalt

```sh
 npx create-next-app -example-path=https://github.com/varianter/nextjs-kurs/tree/wo-slides
```

Port blogg fra vanlig React til Next.js

1. Implementer backend
   - GET:posts/ Returner liste med id og tittel for hver blogg
   - GET:posts/\[id\] Returner bloggpost med id
   - GET:search/q?={searchQuery} Returner id og tittel på blogposter som har har innhold som matcher SearchQuery
2. Flytt Home "/"
   - Erstatt routing - react-router til next/link
   - Implementer Pre-rendring
3. Flytt Post "/posts/:id"
   - Erstatt routing
   - Implementer Pre-rendring
4. Flytt over Search "/search?q=..."
   - Returnere alle poster, som inneholder searchQuery
5. Flytt over Layout
