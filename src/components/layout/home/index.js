import React from 'react';
import{Card} from 'react-bootstrap';
import './style.css';

export default function Home(){
    return(
        <>
        <div className="container">
        <h1>Home page</h1>
        <p>Welcome to Quintet, the one stop website for investments in any sort of assets. Our website integrates your favourite fintech apps into one platform and allows you to use our wallet money to trade in cryptocurrencies, NFTs and in stocks at the same time.</p>
        </div>
        
        <div className="container">
        
             <div className="row1 card" >
                 <div className="col1"><a href="/nft">
                     <div className="card2"><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className="CardImg" src="https://i.ibb.co/mX4LbhX/nfts.png" />
  <Card.Body>
    <Card.Title>NFT</Card.Title>
    {/* <a href="/nft">
          <div className="btn btn-sm btn-success">TRY NOW</div>
      </a> */}
  </Card.Body>
</Card></div></a>

<a href="/crypto">
<div className="card2">
<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" className="CardImg" src="https://i.ibb.co/KjFfqxZ/crypto.jpg" />
    <Card.Body>
      <Card.Title>Crypto</Card.Title>
      {/* <a href="/crypto">
          <div className="btn btn-sm btn-success">TRY NOW</div>
      </a> */}
    </Card.Body>
  </Card>
</div>
</a>
</div>

<div className="col1">
  <a href="/stock">
     <div className="card2">
     <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className="CardImg" src="https://i.ibb.co/JkwfZf0/stock.png" />
  <Card.Body>
    <Card.Title>Stock</Card.Title>
    {/* <a href="/stock">
          <div className="btn btn-sm btn-success">TRY NOW</div>
      </a> */}
  </Card.Body>
</Card>
     </div></a>

     <a href="/news">
     <div className="card2">
     <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" className="CardImg" src='https://images.moneycontrol.com/static-mcnews/2021/03/BUZZING-STOCKS-770x433.jpg?impolicy=website&width=400&height=225' />
    <Card.Body>
      <Card.Title>News</Card.Title>
      {/* <a href="/news">
          <div className="btn btn-sm btn-success">TRY NOW</div>
      </a> */}
    </Card.Body>
  </Card>
     </div>
     </a>
</div>
        </div>
        </div>
        </>
    )
}