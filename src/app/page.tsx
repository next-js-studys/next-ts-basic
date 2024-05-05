import { Note } from "@prisma/client";
import { cache } from "react";




async function getNotes() {
  const res = await fetch('http://localhost:3000/api/notes', { cache: 'no-store' })
  const data = await res.json() as { data: Note[] }
  return data
}

export default async function Home() {
  const { data } = await getNotes()
  const marko = "marko"
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.content}</h1>
        </div>
      ))}
    </div>

  );
}
