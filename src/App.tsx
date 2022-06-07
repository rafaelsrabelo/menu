import { General } from "./components/General";
import { Header } from "./components/Header";
import { Releases } from "./components/Releases";
import { Shop } from "./components/Shop";
import { Status } from "./components/Status";

export default function App() {

  return (
    <>
      <Header />
      <Status />
      <div className="display-flex">
        <Releases />
        <Shop />
      </div>
      <General />
    </>
  )
}
