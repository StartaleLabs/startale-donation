import React, { useState } from "react";
import Image from "next/image";

export default function DonationOptionsModal({ onClose }) {
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const handleModalOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  const getLinksByLanguage = () => {
    if (selectedLanguage === "english") {
      return {
        donateFromExchanges: "Donate from Exchanges",
        donateFromEVMWallets: "Donate from EVM Wallets. Ex.Metamask",
        english: "Here"
      };
    } else if (selectedLanguage === "japanese") {
      return {
        donateFromExchanges: "取引所から寄付する",
        donateFromEVMWallets: "EVMウォレット(Metamaskなど)から寄付する",
        japanese: "こちらから",
      };
    }
  };

  const links = getLinksByLanguage();

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
        <div className="text-center mb-4">
          <h2 className="text-2xl font-extrabold text-black">{links.donateFromExchanges}</h2>
        </div>
        <ul>
          {selectedLanguage === "english" && (
            <li>
              <a href="https://medium.com/@astarnetworkdonationfollower/guidance-on-astr-transfer-from-evmwallet-for-those-without-astr-in-evmwallet-such-as-metamask-e4529b79bffe" className="text-black">
                here
              </a>
            </li>
          )}
          {selectedLanguage === "japanese" && (
            <li>
              <a href="https://medium.com/@astarnetworkdonationfollower/evmwalletからのastr送金手順についてのご案内-evmwallet-metamaskなど-にastrをお持ちでない方-a46e487cee18"
              className="text-black">
                こちらから
              </a>
            </li>
          )}
        </ul>
        <div className="text-center mt-4">
          <h2 className="text-2xl font-extrabold text-black">{links.donateFromEVMWallets}</h2>
        </div>
        <ul>
          {selectedLanguage === "english" && (
              <li>
                <a href="https://medium.com/@astarnetworkdonationfollower/guide-for-transferring-astr-from-evmwallet-for-users-holding-astr-in-evmwallet-such-as-metamask-422a35851c3f"
                className="text-black">
                  here
                </a>
              </li>
          )}
          {selectedLanguage === "japanese" && (
            <li>
              <a href="https://medium.com/@astarnetworkdonationfollower/evmwalletからのastr送金手順についてのご案内-evmwallet-metamaskなど-にastrをお持ちの方-c0488cbd32e3"
              className="text-black"><br/>
                すでにASTRがWalletにある方はこちらから
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
