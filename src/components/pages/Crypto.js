import React from 'react';
import{Card,Button,Row,Col} from 'react-bootstrap';
import '../layout/home/style.css';

export default function Crypto(){
    return(
        <div className="container">
             <div className="row1 card" >
                 <div className="col1">
                     <div className="card2"><Card style={{ width: '18rem' }}>
                     
                     <Card.Img className="CardImg" variant="top" src='https://images-ext-2.discordapp.net/external/JldvX8FDm_u-XHW51u68Bmq4cXG5mez8RbUVfa-nU5E/https/images.news18.com/ibnlive/uploads/2021/07/1627528635_bitcoin-1.jpg?width=701&height=701' />
    <Card.Body>
      <Card.Title>Bitcoin</Card.Title>
    </Card.Body>
</Card></div>

<div className="card2">
<Card style={{ width: '18rem'}}>
<Card.Img variant="top" className="CardImg" src='https://phantom-marca.unidadeditorial.es/9225b4efeada5ef545f4f59a92038dd1/resize/1320/f/jpg/assets/multimedia/imagenes/2022/02/02/16438240836732.jpg'/>
  <Card.Body>
    <Card.Title>Ethereum</Card.Title>
  </Card.Body>
  </Card>
</div>
                 
</div>

 <div className="col1">
     <div className="card2">
     <Card style={{ width: '18rem'}}>
  <Card.Img variant="top" className="CardImg" src='https://img.freepik.com/free-vector/polygon-matic-token-symbol-cryptocurrency-dark-purple-polygonal-background-cryptocurrency-coin-logo-icon-vector-illustration_337410-1185.jpg'/>
  <Card.Body>
    <Card.Title>Polygon</Card.Title>
  </Card.Body>
</Card>
     </div>
     <div className="card2">
     <Card style={{ width: '18rem'}}>
    <Card.Img variant="top" className="CardImg" src='https://cdn.wccftech.com/wp-content/uploads/2022/02/0_VOi4jtEWyIhOKell.jpg' />
    <Card.Body>
      <Card.Title>Tether</Card.Title>
    </Card.Body>
  </Card>
     </div>
</div>
             </div>
        </div>
    )
}