import Hero from "./components/Hero";
import Projects from "./components/Projects";
import "./style.css";

export default function App() {
  return `<div>
    ${Hero()}
    ${Projects()}
 </div>`;
}
