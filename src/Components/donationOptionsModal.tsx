import React, { useState } from "react";

type donateFrom = "Exchanges" | "EVMWallets";
type language = "japanese" | "english";

interface DonateElement {
  title: string;
  link: string;
  message: string;
}

const donateElementFromExchangeJp: DonateElement = {
  title: "取引所から寄付する",
  link: "https://medium.com/@astarnetworkdonationfollower/evmwalletからのastr送金手順についてのご案内-evmwallet-metamaskなど-にastrをお持ちでない方-a46e487cee18",
  message: "こちらから"
}

const donateElementFromEVMWalletsJp: DonateElement = {
  title: "EVMウォレット(Metamaskなど)から寄付する",
  link: "https://medium.com/@astarnetworkdonationfollower/evmwalletからのastr送金手順についてのご案内-evmwallet-metamaskなど-にastrをお持ちの方-c0488cbd32e3",
  message: "すでにASTRがWalletにある方はこちらから"
}

const donateElementFromExchangeEn: DonateElement = {
  title: "Donate from Exchanges",
  link: "https://medium.com/@astarnetworkdonationfollower/guidance-on-astr-transfer-from-evmwallet-for-those-without-astr-in-evmwallet-such-as-metamask-e4529b79bffe",
  message: "here"
}

const donateElementFromEVMWalletsEn: DonateElement = {
  title: "Donate from EVM Wallets. Ex.Metamask",
  link: "https://medium.com/@astarnetworkdonationfollower/guide-for-transferring-astr-from-evmwallet-for-users-holding-astr-in-evmwallet-such-as-metamask-422a35851c3f",
  message: "here"
}

const donateElementMap: Map<donateFrom, Map<language, DonateElement>> = new Map([
  ["Exchanges" as donateFrom, new Map([
    ["japanese" as language, donateElementFromExchangeJp],
    ["english" as language, donateElementFromExchangeEn]
  ])],
  ["EVMWallets" as donateFrom, new Map([
    ["japanese" as language, donateElementFromEVMWalletsJp],
    ["english" as language, donateElementFromEVMWalletsEn]
  ])],
]);

const getDonateComponent = (donateFrom: donateFrom, language: language) => {
  const donateElement: DonateElement | undefined = donateElementMap.get(donateFrom)?.get(language);
  return (
    <>
      <div className="text-center mb-4">
        <h2 className="text-2xl font-extrabold text-black">{donateElement!.title}</h2>
      </div>
      <ul className="mb-4">
        <li>
          <a href={donateElement!.link} className="text-black">
            {donateElement!.message}
          </a>
        </li>
      </ul>
    </>
  );
}

const getDonateForm = (language: language) => {
  return (
    <>
      {getDonateComponent("Exchanges", language)}
      {getDonateComponent("EVMWallets", language)}
    </>
  );
}

interface Props {
  onClose: () => void;
}

const DonationOptionsModal: React.FC<Props> = ({ onClose }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<language>("japanese");

  const handleLanguageChange = (language: language) => {
    setSelectedLanguage(language);
  };

  const handleModalOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if ((e.target as Element).classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay bg-opacity-0 fixed z-[-1] inset-0 bg-purple-100 opacity-80" onClick={handleModalOverlayClick}></div>
      <div className="bg-purple-200 rounded-lg p-8 w-[80%] max-w-[800px]">
        <div className="text-right mb-4">
          <button
            className={`text-blue-500 hover:underline ${
              selectedLanguage === "english" ? "font-extrabold" : ""
            }`}
            onClick={() => handleLanguageChange("english")}
          >
            English
          </button>
          {" / "}
          <button
            className={`text-blue-500 hover:underline ${
              selectedLanguage === "japanese" ? "font-extrabold" : ""
            }`}
            onClick={() => handleLanguageChange("japanese")}
          >
            日本語
          </button>
        </div>
        {getDonateForm(selectedLanguage)}
      </div>
    </div>
  );
}

export default DonationOptionsModal;