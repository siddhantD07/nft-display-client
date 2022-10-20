import { useSelector } from "react-redux";
import { useEffect } from "react";

import Header from "./components/Header";
import MainPage from "./pages/MainPage";

function App() {

  const displayView = useSelector((state) => state.displayView);

  useEffect(() => {}, [displayView]);

    return (
      <>
        <Header />
        <MainPage />
      </>
    );

}

export default App;
