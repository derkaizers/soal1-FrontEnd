import React, { Component } from 'react';
import Hasilnama from './component/Hasilnama'
import Footer from './component/Footer'
import './App.css'

class App extends Component {
  constructor(){
    super();
    this.state={nama:''}
  }

  klik() {
    this.setState({ nama: this.refs.nama.value })
  }
  render() {
  return (
   <table form="box" className="col-md-10">
    <div className="container"  >
      
      <ul className="nav nav-tabs">
     
        <li className="active">
          <a className="nav-link active" data-toggle="tab" href="#input">Input</a>
        </li>
          <li><a className="nav-link active" data-toggle="tab" href="#output">Output</a></li>
        </ul>
        
        <div className="tab-content">
          <div id="input" className="tab-pane fade in active">
            <label>Masukin Namanya Dunkkk!!</label> 
            <input className="form-control" id="nama1" ref="nama" type="text"/><br/>
            <button type="submit" className="btn btn-danger" onClick={ ()=> {this.klik()} }>Pencet disini Om!!!</button>
          </div>
        
          <div id="output" className="tab-pane fade">
              
         <Hasilnama nm={this.state.nama}/>
              
          </div>
          <Footer />
        </div>
        
    </div>
    </table>
  );
  }
}

export default App;
