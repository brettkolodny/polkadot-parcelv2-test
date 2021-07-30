import { ApiPromise, WsProvider } from "@polkadot/api";

async function main() {
  const provider = new WsProvider("wss://rpc.polkadot.io");
  const api = await ApiPromise.create({ provider });

  console.log(api.genesisHash.toHex());
}

main();