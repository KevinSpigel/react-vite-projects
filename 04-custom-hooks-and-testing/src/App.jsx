import "./App.css";
import { CatImage } from "./components/CatImage";
import { useCatFact } from "./hooks/useCatFact";
import { useCatImage } from "./hooks/useCatImage";

function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refreshFact();
  };

  return (
    <main>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "50px",
        }}
      >
        <h1>App de gatitos</h1>
        <button onClick={handleClick}>Get new random fact</button>
      </div>
      <section>
        {fact && <p>{fact}</p>}

        {imageUrl && (
          <img
            src={imageUrl}
            alt={`Image extracted using the first rhee words for ${fact}`}
          />
        )}
        <CatImage fact={fact} />
      </section>
    </main>
  );
}

export default App;
