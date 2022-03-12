import React from 'react';
import{Card,Button,Row,Col} from 'react-bootstrap';
import '../layout/home/style.css';

export default function Nft(){
    return(
        <div className="container">
             <div className="row1 card" >
                 <div className="col1">
                     <div className="card2"><Card style={{ width: '18rem', border:'none' }}>
                     
                     <Card.Img className="CardImg" variant="top" src='https://d1-invdn-com.akamaized.net/content/pic1f4df1d3a47ee95637971a8ce66691e1.jpeg' />
    <Card.Body>
      <Card.Title>Art NFT</Card.Title>
      <Card.Text>
      Art is the most popular form of NFT out there. The conception of NFTs was a prime opportunity for artists to sell their best works online as though they are physical.
      </Card.Text>
    </Card.Body>
</Card></div>

<div className="card2">
<Card style={{ width: '18rem', border:'none' }}>
<Card.Img variant="top" className="CardImg" src='https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/NQ3EJQDYMRDBFIRYLFTHC5EQFQ.jpg'/>
  <Card.Body>
    <Card.Title>Music NFT</Card.Title>
    <Card.Text>
    Music NFTs are changing the way fans connect with their favorite artists.
    </Card.Text>
  </Card.Body>
  </Card>
</div>
                 
</div>

 <div className="col1">
     <div className="card2">
     <Card style={{ width: '18rem', border:'none'}}>
  <Card.Img variant="top" className="CardImg" src='https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/XGP2QQC45VEY5DCMQZLO6JJD2Y.jpg' />
  <Card.Body>
    <Card.Title>Collectable NFT</Card.Title>
    <Card.Text>
    NFTs can be thought of as digital trading cards.Companies can sell all types of collectible items on the NFT market, not just trading cards. If it's anything that you can deem collectible, it can be put it on the market.
    </Card.Text>
  </Card.Body>
</Card>
     </div>
     <div className="card2">
     <Card style={{ width: '18rem', border:'none' }}>
    <Card.Img variant="top" className="CardImg" src='https://vagazine.com/vaga_v3/wp-content/uploads/2021/08/METAJACKET-RTFKT-NFT-fashion-Toby-Evans.gif' />
    <Card.Body>
      <Card.Title>Virtual Fashion NFT</Card.Title>
      <Card.Text>
      Owning a virtual handbag or necklace is definitely reserved for more extravagant and fashion-forward individuals.
      </Card.Text>
    </Card.Body>
  </Card>
     </div>
</div>
             </div>
        </div>
    )
}