import React, { Component } from 'react';
import { Button, Collapse, Card, Media, Row, Col } from 'react-bootstrap';

export default class ItemDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
    }

  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide`} Item Details
          {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Card>
              <Media className='media-card'>
                <img
                  className="align-self-left"
                  width={100}
                  height={100}
                  src="https://i5.walmartimages.com/asr/631cbcc0-d014-486e-9ad2-d68bb1eeaffd_1.b46e228c705a5eed28432049528c6ab0.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                />
                <Media.Body>
                  <p>Essentials Racing Style Gaming Chair, Black</p>
                  <Row className="show-grid-row">
                    <Col md={6}>
                      <strong> {`$${this.props.price}`} </strong>
                      <br />
                      <strong className='price-strike'> {`$${this.props.price}`} </strong>
                    </Col>
                    <Col md={6}>
                        Quantity: 1
                    </Col>
                  </Row>
                </Media.Body>
              </Media>
            </Card>
          </div>
        </Collapse>
      </div>
    );
  }
}
