import "./App.css";
import React, { Suspense } from "react";
import Form from "./Component/Form/Form.jsx";
import Image from "./Component/Form/Image.jsx";

function App() {
  const countryLoading = fetch(
    "https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json"
  ).then((res) => res.json());

  return (
    <>
      <div className="flex flex-row">
        <Image></Image>
        <Suspense fallback={<h1 className="text-center">Loading...</h1>}>
          <Form countryLoading={countryLoading}></Form>
        </Suspense>
      </div>
    </>
  );
}

export default App;
