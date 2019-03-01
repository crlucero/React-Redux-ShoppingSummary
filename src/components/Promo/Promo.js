import React, { Component } from 'react'
import { 
    Button, 
    Collapse, 
    Card, 
    Form, 
    Col, 
    FormGroup, 
    FormLabel, 
    FormControl, 
    Row} from 'react-bootstrap'

    import { connect } from 'react-redux';
    import { handleChange } from '../../actions/PromoCodeActions';


class Promo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    handleChange = e => {
      this.props.handleChange(e);
    }

  render() {
    return (
      <div>
        <Button
          className="promo"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `Apply` : `Hide`} Promo Code
          {this.state.open === false ? ` +` : ` -`}
        </Button>

        <Collapse in={this.state.open}>
          <div>
            <Card>
              <Row className="show-grid">
                <br />
                <Col md={12}>
                  <Form>
                    <FormGroup controlId="formInlineName">
                      <FormLabel>Promo Code</FormLabel>
                      <FormControl
                        type="text"
                        placeholder="Enter Promo Code"
                        value={this.props.promoCode}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <Button
                      block
                      className="btn-round"
                      disabled={this.props.isDisabled}
                      onClick={this.props.giveDiscount}
                    >
                      Apply
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Card>
          </div>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(mapStateToProps, {handleChange})(Promo);