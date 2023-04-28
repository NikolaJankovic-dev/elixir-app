import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import style from "./Elixir.module.css";
import { getItem } from "../getters/getters";

const queryClient = new QueryClient();

export default function ElixirQ() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const params = useParams();
  const { isLoading, error, data } = useQuery(["repoData", params.id], () =>
    getItem(params.id)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const item = data.data.attributes;
  const img = item.image.data.attributes.url;

  return (
    <div>
      <Navbar />
      <div className={style.elixir}>
        <img src={`https://elixir-strapi.4bees.io${img}`} alt="elixir" />
        <div className={style.table}>
          <div
            className={
              item.type === 1
                ? style.type1
                : item.type === 2
                ? style.type2
                : style.type3
            }
          >
            NAZIV
          </div>
          <div
            className={
              item.type === 1
                ? style.type1
                : item.type === 2
                ? style.type2
                : style.type3
            }
          >
            {item.name}
          </div>
          <div>TIP SIROVINE</div>
          <div>ALTERNATIVNA SIROVINA</div>
          <div>ALTERNATIVA ZA</div>
          <div>
            Sumpornu kiselinu <br />
            Fosfornu kiselinu
          </div>
          <div>POREKLO I KARAKTERISTIKE</div>
          <div>
            Nastaje u automobilskoj industriji
            <br />
            <br />
            Smesam sumporne i fosforne kiseline.... Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ullam unde dolorem dignissimos harum
            eligendi vitae incidunt possimus enim quos nostrum reiciendis, fuga,
            libero provident culpa veritatis architecto ipsum numquam! A. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Delectus minus
            alias doloribus odio, ipsam vero! Cumque vel eos maiores veritatis
            dolorum harum a labore, repudiandae, tempore voluptas aut odit
            nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Alias inventore necessitatibus magnam, blanditiis dolor corporis
            sapiente, cum nihil ipsam ut aspernatur hic doloribus omnis quidem
            tempore facilis numquam, aut sunt?
          </div>
        </div>
      </div>
    </div>
  );
}
