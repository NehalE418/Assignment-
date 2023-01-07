import React from 'react';
import './App.css';
import Cards from './Components/Cards';

function App() {
  let arr: any = [
    {
      img: './Bitcoin.png',
      col: 'linear-gradient(180deg,rgba(98, 106, 136, 0.1) 0%,rgba(234, 179, 0, 0.06) 100%)',
      name: 'Bitcoin (BTC)',
      price: '$31,812.80',
      vary: +10,
      tlv1: './Salona.png',
      tlv2: './etherium.png',
      tlv3: './Binance.png',
    },
    {
      img: './Salona.png',
      col: 'linear-gradient(180deg,rgba(98, 106, 136, 0.1) 0%,rgba(220, 31, 255, 0.1) 100%)',
      name: 'Solana (SOL)',
      price: '$32.83',
      vary: -12.32,
      tlv1: './Bitcoin.png',
      tlv2: './etherium.png',
      tlv3: './Binance.png',
    },
    {
      img: './etherium.png',
      col: 'linear-gradient(180deg,rgba(98, 106, 136, 0.1) 0%,rgba(237, 240, 244, 0.1) 100%)',
      name: 'Ethereum (ETH)',
      price: '$1,466.45',
      vary: -11.93,
      tlv1: './Salona.png',
      tlv2: './Bitcoin.png',
      tlv3: './Binance.png',
    },
    {
      img: './Binance.png',
      col: 'linear-gradient(180deg,rgba(98, 106, 136, 0.1) 0%,rgba(234, 179, 0, 0.06) 100%)',
      name: 'Binance (BUSD)',
      price: '$1.00',
      vary: +0.26,
      tlv1: './Salona.png',
      tlv2: './etherium.png',
      tlv3: './Bitcoin.png',
    },
    {
      img: './siba.png',
      col: 'linear-gradient(180deg,rgba(98, 106, 136, 0.1) 0%,rgba(228, 45, 4, 0.1) 100%)',
      name: 'Shiba Inu (SHIB)',
      price: '$0.00000001948',
      vary: -8.1,
      tlv1: './Salona.png',
      tlv2: './etherium.png',
      tlv3: './Binance.png',
    },
  ];
  return (
    <div className="class">
      <div className="heading">
        <img
          src="./icon.png"
          alt="icon"
          style={{ width: '13.33', height: '13.33' }}
        />
        <div>
          <span>Trending Assets</span>
        </div>
      </div>
      <div className="main-class">
        {arr.map((item: any) => {
          return <Cards props={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
