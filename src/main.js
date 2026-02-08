import Hero from "./components/Hero";
import "./style.css";

const app = document.getElementById("app");

app.innerHTML = `${Hero()}`;
