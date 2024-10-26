import { Colors } from "./Colors";

export function App() {
  return (
    <div>
      <Colors
        colors={[
          { id: 1, name: "Blue" },
          { id: 2, name: "Yellow" },
          { id: 3, name: "Red" },
          { id: 4, name: "Green" },
          { id: 5, name: "White" },
        ]}
      />
    </div>
  );
}
