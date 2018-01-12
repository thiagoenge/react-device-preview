import React, { Component } from 'react'

import './devices.min.css';

const DeviceList = [
  'iphonex',
  'galaxynote8',
  'iphone8',
  'iphone8plus',
  'iphone5s',
  'iphone5c',
  'ipadmini',
  'iphone4s',
  'nexus5',
  'lumia920',
  'galaxys5',
  'htcone',
  'macbookpro'
]

export default class extends Component {

  static defaultProps = {
    device: 'iphonex',
    controls: false,
    position: '', // landscape
    color: '',
  }

  constructor(props) {
    super(props);

    this.state = {
      position: props.position,
      color: props.color
    }
  }

  wrp(n) {
    return `marvel-device ${n} ${this.state.position} ${ this.state.color }`
  }

  iphonex() {
    return (
      <div className={ this.wrp('iphone-x') }>
        <div className="notch">
          <div className="camera"></div>
          <div className="speaker"></div>
        </div>
        <div className="top-bar"></div>
        <div className="sleep"></div>
        <div className="bottom-bar"></div>
        <div className="volume"></div>
        <div className="overflow">
          <div className="shadow shadow--tr"></div>
          <div className="shadow shadow--tl"></div>
          <div className="shadow shadow--br"></div>
          <div className="shadow shadow--bl"></div>
        </div>
        <div className="inner-shadow"></div>
        <div className="screen">
          { this.props.children }
        </div>
      </div>
    )
  }

  galaxynote8() {
    return (
      <div className={ this.wrp('note8') }>
        <div className="inner"></div>
        <div className="overflow">
          <div className="shadow"></div>
        </div>
        <div className="speaker"></div>
        <div className="sensors"></div>
        <div className="more-sensors"></div>
        <div className="sleep"></div>
        <div className="volume"></div>
        <div className="camera"></div>
        <div className="screen">
          { this.props.children }
        </div>
      </div>
    )
  }

  iphone8() {
    return (
      <div className={ this.wrp('iphone8') }>
        <div className="top-bar"></div>
        <div className="sleep"></div>
        <div className="volume"></div>
        <div className="camera"></div>
        <div className="sensor"></div>
        <div className="speaker"></div>
        <div className="screen">
          { this.props.children }
        </div>
        <div className="home"></div>
        <div className="bottom-bar"></div>
      </div>
    )
  }

  iphone8plus() {
    return (
      <div className={ this.wrp('iphone8plus') }>
        <div className="top-bar"></div>
        <div className="sleep"></div>
        <div className="volume"></div>
        <div className="camera"></div>
        <div className="sensor"></div>
        <div className="speaker"></div>
        <div className="screen">
          { this.props.children }
        </div>
        <div className="home"></div>
        <div className="bottom-bar"></div>
      </div>
    )
  }

  togglePosition = () => {
    if (this.state.position === '') {
      return this.setState({ position: 'landscape' });
    }

    if (this.state.position === 'landscape') {
      return this.setState({ position: '' });
    }
  }

  renderDevice(device) {
    if (this.props.controls) {
      return (
        <div>
          <div onClick={ this.togglePosition }>
            { this.state.position === '' ? 'Portret' : 'Landscape'  }
          </div>
          { this[device]() }
        </div>
      )
    }

    return this[device]();
  }


  render() {
    /* check device */
    const device = DeviceList.find(d => d === this.props.device);

    if (device) {
      return this.renderDevice(device);
    }

    return null;
  }
}
