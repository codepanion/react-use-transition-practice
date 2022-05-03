import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState, useTransition } from "react";
import Preview from "./Preview";

const defaultCoordinates = { x: 0, y: 0 };

const App = () => {
  const [mouseCoordinates, setMouseCoordinates] = useState(defaultCoordinates);
  const [previewMouseCoordinates, setPreviewMouseCoordinates] =
    useState(defaultCoordinates);

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }) => {
      setMouseCoordinates({ x: clientX, y: clientY });

      startTransition(() => {
        setPreviewMouseCoordinates({ x: clientX, y: clientY });
      });
    };

    document
      .querySelector("body")
      .addEventListener("mousemove", handleMouseMove);

    return () => {
      document
        .querySelector("body")
        .removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Coordinates - x: {mouseCoordinates.x}, y: {mouseCoordinates.y}
        </p>
        <Preview
          x={previewMouseCoordinates.x}
          y={previewMouseCoordinates.y}
          isPending={isPending}
        />
      </header>
    </div>
  );
};

export default App;
