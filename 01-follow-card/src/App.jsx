import "./index.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  { userName: "KevinSpigel", name: "Kevin Spigel" },
  { userName: "JohnDoe", name: "John Doe" },
  { userName: "JaneDoe", name: "Jane Doe" },
];

export function App() {
  return (
    <section className="App">
      {users.map((user) => {
        const { userName, name } = user;
        return (
          <TwitterFollowCard key={userName} userName={userName} name={name} />
        );
      })}
    </section>
  );
}
