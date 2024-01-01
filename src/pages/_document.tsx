import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Astar Network/Startale Labs</title>
        <meta
          name="description"
          content="石川県能登地方を震源とする「令和6年能登半島地震」の発生をうけ、Astar FoundationおよびStartale LabsはWeb3技術を用いて緊急災害支援募金ページを開設しました。暗号資産による募金を受け付けます。"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
