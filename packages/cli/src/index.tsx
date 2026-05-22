import { black, createCliRenderer, TextAttributes } from "@opentui/core";
import { createRoot } from "@opentui/react";
import Header from "./components/header";
import InputBar from "./components/input-bar";

function App() {
  return (
    <box
      backgroundColor="#0D0D12"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%"
    >
      <Header />
      <box width="100%">
        <InputBar onSubmit={(text) => {}} disabled={false} />
      </box>
    </box>
  );
}

const renderer = await createCliRenderer();
createRoot(renderer).render(<App />);
