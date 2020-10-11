mkdir -p build/

npx mdx-deck build ./next/deck.mdx
mv ./public ./build/next

cp ./index.html ./build/