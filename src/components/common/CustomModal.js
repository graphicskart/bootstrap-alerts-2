import React, { Component } from "react";
import { Modal, Button, Col } from "react-bootstrap";

export default class CustomModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <Modal
        show={this.state.show}
        onHide={this.handleClose}
        className={`${this.props.type} ${this.props.type} text-center`}
        size="md"
        centered
      >
        <Modal.Body>
          <Col xs={12}>
            <h4 className="title">{this.props.title}</h4>
            <Col xs={12} className="text-center">
              <hr className="separator" />
            </Col>
            <p className="modal-contents">{this.props.description}</p>
            <p className="icon">{this.props.icon}</p>
          </Col>
          <Col sm={12} xs={12} className="modal-footer-area ">
            <Button variant="outline-secondary" onClick={this.handleClose}>
              Continue shopping
            </Button>
            <Button variant={this.props.type} onClick={this.handleClose}>
              {this.props.buttonTitle}
            </Button>
          </Col>
        </Modal.Body>
      </Modal>
    );
  }
}
