import React,{useState} from "react";
import "./App.css";
import { useWeb3 } from "@openzeppelin/network/react";
import Web3Data from "./components/Web3Data.js";

const infuraProjectId = "f34cdbfed83040de97b37f1d15a09bb9";

function App() {
  // const { networkId, networkName, providerName } = web3Context;
  const [projectId , setProjectId]= useState("");
  const web3Context = useWeb3(
    `wss://mainnet.infura.io/ws/v3/${infuraProjectId}`
  );
  return (
    <div className="App">
      <div>
        <br />
        <img
          src={
            "https://startfi.io/wp-content/uploads/2021/02/StartFi-Logo-cw-txt.png"
          }
          width={"25%"}
        />
        <h1>React Dapp Demo for STARTFI!</h1>
		{/* <input value={projectId} onChange={(e)=>setProjectId(e.target.value)} placeholder="enter project id"/> */}
        <Web3Data title="Web3 Data" web3Context={web3Context} />
      </div>
    </div>
  );
}
export default App;
