# Case

For å kjøre lokalt

```sh
 npx create-next-app -example-path=https://github.com/varianter/nextjs-kurs/tree/base-case
```

Port blogg fra vanlig React til Next.js

1. Flytt Home "/"
   - Hent alle blogposter
2. Flytt Post "/posts/:id"
   - Returner en post på id
3. Flytt over Search "/search?q=..."
   - Returnere alle poster, som inneholder searchQuery
4. Implementer Static Regeneration på de som det gjelder
