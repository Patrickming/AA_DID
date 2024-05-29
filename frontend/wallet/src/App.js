import React,{ useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import BottomBar from "./components/BottomBar"
import { createSmartAccountClient } from "@alchemy/aa-core";
import { createLightAccount } from "@alchemy/aa-accounts";
import { http } from "viem";
import { sepolia } from "@alchemy/aa-core";

// // 定义lightAccountParams
// const lightAccountParams = {
//   privateKey: "YOUR_PRIVATE_KEY", // 替换为你的私钥
//   id: 'your_id',
//   network: 'sepolia'
// }

// async function initializeSmartAccountClient() {
//   // 确保 createLightAccount 使用正确的参数
//   const account = await createLightAccount(lightAccountParams);
//   return new createSmartAccountClient({
//     transport: http("ALCHEMY_RPC_URL"), // 替换为实际的 RPC URL
//     chain: sepolia,
//     account: account,
//   });
// }

// async function sendUserOperation(smartAccountClient, lightAccountParams, targetAddress, dataValue, valueAmount) {
//   const uo = { 
//     target: targetAddress, 
//     data: dataValue, 
//     value: valueAmount 
//   };
//   const account = await createLightAccount(lightAccountParams);
//   const result = await smartAccountClient.sendUserOperation({
//     uo: uo,
//     account: account
//   });

//   return result;
// }



function App() {
  // const [smartAccountClient, setSmartAccountClient] = useState(null);

  // useEffect(() => {
  //   async function setupClient() {
  //     const client = await initializeSmartAccountClient();
  //     setSmartAccountClient(client);
  //   }
  //   setupClient();
  // }, []);

  // // 使用示例
  // useEffect(() => {
  //   if (smartAccountClient) {
  //     sendUserOperation(smartAccountClient, lightAccountParams, "0xaddress", "0x", 0n)
  //       .then(result => {
  //         console.log(result);
  //       })
  //       .catch(error => {
  //         console.error(error);
  //       });
  //   }
  // }, [smartAccountClient]);
  
  return (
    <div className="App">
      <Router>
        <BottomBar />
        
      </Router>
    </div>
  );
}

export default App;