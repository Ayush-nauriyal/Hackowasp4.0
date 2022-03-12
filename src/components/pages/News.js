import React from 'react';
import{Card,Button,Row,Col} from 'react-bootstrap';
import '../layout/home/style.css';

export default function Nft(){
    return(
        <div className="container">
             <div className="row1 card" >
                 <div className="col1">
                     <div className="card2"><Card style={{ width: '18rem' }}>
                     
                     <Card.Img className="CardImg" variant="top" src='https://stat1.moneycontrol.com/mcnews/images/shows-logo.jpg' />
    <Card.Body>
      <Card.Title>MoneyControl</Card.Title>
    </Card.Body>
</Card></div>

<div className="card2">
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" className="CardImg" src='https://mms.businesswire.com/media/20210105005308/en/850010/4/Coindesk_Logo_RGB.jpg'/>
  <Card.Body>
    <Card.Title>CoinDesk</Card.Title>
  </Card.Body>
  </Card>
</div>
                 
</div>

 <div className="col1">
     <div className="card2">
     <Card style={{ width: '18rem'}}>
  <Card.Img variant="top" className="" src='https://i.ibb.co/vqKvt8G/D6q0t-MOZ-400x400.jpg" alt="D6q0t-MOZ-400x400'/>
  <Card.Body>
    <Card.Title>NFT Plaza</Card.Title>
  </Card.Body>
</Card>
     </div>
     <div className="card2">
     <Card style={{ width: '18rem'}}>
    <Card.Img variant="top" className="" src='https://yt3.ggpht.com/ytc/AKedOLTUeGgy1iFOaNBxTCozphKo3m67je2yiUs-tLX63MI=s900-c-k-c0x00ffffff-no-rj' />
    <Card.Body>
      <Card.Title>BBC News</Card.Title>
    </Card.Body>
  </Card>
     </div>
</div>
             </div>
        </div>
    )
}