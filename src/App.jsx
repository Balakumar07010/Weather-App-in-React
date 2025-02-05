import { useState,  useEffect } from "react";
import "./App.css";
import qr from "/qr.png";
import { document } from "postcss";

function App() {
  let [img, setImg] = useState("");
  let [load, setLoad] = useState(false);
  let [link, setLink] = useState("");
  let [qsize, setqSize] = useState("");

  let generate = async () => {
    setLoad(true);
    try {
      const URL = `https://api.qrserver.com/v1/create-qr-code/?size=${qsize}x${qsize}&data=${encodeURIComponent(
        link
      )}`;
      setImg(URL);
    } catch (error) {
      console.error("Error", error);
    } finally {
      setLoad(false);
    }
  };
  let download = () => {
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        console.log("hello");
        const down = document.createElement("a");
        down.href = URL.createObjectURL(blob);
        down.download = "QrCode.png";
        document.body.appendChild(down);
        down.click();
        document.body.removeChild(down);
      })
      .catch((err) => console.error("Errror message : ", err));
  };
   useEffect(() => {
     // Check if we are in the browser environment
     if (typeof document !== "undefined") {
       console.log("Running in the browser");
     } else {
       console.log("Not running in the browser");
     }
   }, []);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-1/3 border-2 border-black ">
        <h1 className="text-3xl font-bold text-center my-4">
          QR Code Generater
        </h1>
        <div className="w-1/3 mx-auto my-4">
          {load && <p>please Wait .....</p>}
          {img && <img src={img} alt="qr" className="w-full" />}
        </div>
        <div className="inputdata flex flex-col w-10/12 ms-8 my-4 relative">
          <input
            type="text"
            id="getLink"
            className="border-solid border-0 border-b-2 border-black p-2 w-full outline-none z-10 bg-transparent"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          {/* <label
            htmlFor="getLink"
            className="text-lg font-semibold absolute top-2.5 left-2 "
          >
            Enter a Link
          </label> */}
        </div>
        <div className="inputdata flex flex-col w-10/12 mx-8 my-4 relative">
          <input
            type="text"
            id="getLink"
            className="border-solid border-0 border-b-2 border-black p-2 w-full outline-none z-10 bg-transparent"
            value={qsize}
            onChange={(e) => setqSize(e.target.value)}
          />
          {/* <label
            htmlFor="getSize"
            className="text-lg font-semibold absolute top-2.5 left-2 "
          >
            Enter a Size
          </label> */}
        </div>
        <div className="ms-8 my-8 flex gap-4">
          <button
            className="bg-blue-800 text-white tracking-wider p-2 rounded-lg hover:bg-blue-700 hover:shadow-3xl "
            onClick={generate}
            disabled={load}
          >
            Generate
          </button>
          <button
            className="bg-green-800 text-white tracking-wider p-2 rounded-lg hover:bg-green-700 hover:shadow-3xl "
            onClick={download}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
