import React from 'react';
import{Card,Button,Row,Col} from 'react-bootstrap';
import '../layout/home/style.css';

export default function Stocks(){
    return(
        <div className="container">
             <div className="row1 card" >
                 <div className="col1">
                     <div className="card2"><Card style={{ width: '18rem'}}>
                     
                     <Card.Img className="CardImg" variant="top" src='https://www.financialexpress.com/wp-content/uploads/2021/08/MUTUAL-FUND-620x400.jpg' />
    <Card.Body>
      <Card.Title>Mutual Fund</Card.Title>
    </Card.Body>
</Card></div>

<div className="card2">
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" className="CardImg" src='https://asset5.scripbox.com/wp-content/uploads/2019/02/equity-investing-social-1024x576.jpg'/>
  <Card.Body>
    <Card.Title>Equity</Card.Title>
  </Card.Body>
  </Card>
</div>
                 
</div>

 <div className="col1">
     <div className="card2">
     <Card style={{ width: '18rem'}}>
  <Card.Img variant="top" className="CardImg" src='https://images.moneycontrol.com/static-mcnews/2021/06/Commodities-770x433.jpg?impolicy=website&width=770&height=431'/>
  <Card.Body>
    <Card.Title>Commodities</Card.Title>
  </Card.Body>
</Card>
     </div>
     <div className="card2">
     <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" className="CardImg" src='https://vagazine.com/vaga_v3/wp-content/uploads/2021/08/METAJACKET-RTFKT-NFT-fashion-Toby-Evans.gif' />
    <Card.Body>
      <Card.Title>Debt</Card.Title>
    </Card.Body>
  </Card>
     </div>
</div>
             </div>
        </div>
    )
}