import React from 'react';
import{Card,Button,Row,Col} from 'react-bootstrap';
import stock from './stock.png'
import nfts from './nfts.png';
import crypto from './crypto.jpeg';
import bank from './bank1.png';
import './style.css';

export default function Home(){
    return(
        <>
        <div className="container">
        <h1>Home page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolores optio reprehenderit deserunt nulla molestias nesciunt, dolore, repellat maxime ipsa doloremque fuga commodi? Repellendus asperiores totam accusamus, porro illo impedit aliquid laboriosam est odio pariatur eius ullam recusandae velit optio voluptates maxime possimus esse labore accusantium corrupti. Ad, harum modi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia libero qui quas nobis similique tempore adipisci. Dolores, quos iste. Fugit repellendus, earum recusandae totam incidunt omnis aliquam. Quae, accusantium! Doloribus, molestiae veritatis! Neque tempora maxime itaque nobis dolore deleniti asperiores hic optio cum voluptatum qui quis, amet quo nesciunt ipsa placeat sapiente accusamus. Eum tenetur ipsum qui delectus modi est et eaque, quas non porro quaerat exercitationem magnam itaque dolorem obcaecati sapiente vitae voluptate a perferendis! Molestias ullam rem accusamus! Quasi molestias saepe sunt iusto accusamus delectus, corrupti, repudiandae odio nostrum obcaecati adipisci a alias asperiores debitis blanditiis suscipit commodi.</p>
        </div>
        
        <div class="container">
             <div class="row1 card" >
                 <div class="col1">
                     <div class="card2"><Card style={{ width: '18rem' }}>
  <Card.Img variant="top"  src={nfts} />
  <Card.Body>
    <Card.Title>NFT's</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <a href="#">
          <div className="btn btn-sm btn-info">TRY NOW</div>
      </a>
  </Card.Body>
</Card></div>

<div class="card2">
<Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={crypto} />
    <Card.Body>
      <Card.Title>Crypto</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <a href="#">
          <div className="btn btn-sm btn-success">TRY NOW</div>
      </a>
    </Card.Body>
  </Card>
</div>
                 
</div>

 <div class="col1">
     <div class="card2">
     <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={stock} />
  <Card.Body>
    <Card.Title>Stock</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <a href="#">
          <div className="btn btn-sm btn-success">TRY NOW</div>
      </a>
  </Card.Body>
</Card>
     </div>
     <div class="card2">
     <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={bank} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <a href="#">
          <div className="btn btn-sm btn-success">TRY NOW</div>
      </a>
    </Card.Body>
  </Card>
     </div>
</div>
             </div>
        </div>
        </>
    )
}