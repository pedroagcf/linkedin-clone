import { Route, Routes } from "react-router-dom";

import "./App.css";
import { HomePage } from "./Pages/HomePage";
import { UserProfilePage } from "./Pages/UserProfile";
import { HeaderComponent as Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile/:id" element={<UserProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
