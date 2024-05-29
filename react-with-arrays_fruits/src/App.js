import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1378,
      name: "🍒 Cherry",
      color: "red",
    },
    {
      id: 1379,
      name: "🍉 Watermelone",
      color: "pink",
    },
    {
      id: 1380,
      name: "🍈 Melon",
      color: "green",
    },
    {
      id: 1381,
      name: "🍇 Grape",
      color: "darkblue",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
