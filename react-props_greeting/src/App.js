import "./styles.css";

export default function App() {
  return <Greeting name="Friends" />;
}

function Greeting({ name }) {
  return <div>Hello, {name}!</div>;
}
