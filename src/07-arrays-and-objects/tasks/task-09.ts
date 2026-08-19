/**
 * A social media platform stores posts.
 * Tasks:
 * 1. Find post that containing "typescript"!
 * 2. Find post that containing "nestjs"!
 * 3. Find the post with highest number of likes!
 * 4. Calculate the total of likes!
 */

const posts = [
  {
    author: "Andi",
    content: "Learning TypeScript #typescript #programming",
    hashtags: ["typescript", "programming"],
    likes: 120,
  },
  {
    author: "Budi",
    content: "My first NestJS project #nestjs #typescript",
    hashtags: ["nestjs", "typescript"],
    likes: 250,
  },
  {
    author: "Citra",
    content: "Frontend development #nextjs #react",
    hashtags: ["nextjs", "react"],
    likes: 180,
  },
  {
    author: "Deni",
    content: "Backend with NestJS #nestjs #backend",
    hashtags: ["nestjs", "backend"],
    likes: 300,
  },
];

console.log(`\nTask 1`)
console.table(posts.filter((data) => data.hashtags.find((info) => info === "typescript")))

console.log(`\nTask 2`)
console.table(posts.filter((data) => data.hashtags.find((info) => info === "nestjs")))

console.log(`\nTask 3`)
console.log(posts.sort(function(a, b){return b.likes - a.likes})[0])

console.log(`\nTask 4`)
console.log(posts.reduce((sum, data) => sum += data.likes ,0))
