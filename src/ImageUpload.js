
import axios from 'axios';
 import "./ImageUpload.css"
import React, { Component } from 'react';
 
class ImageUpload extends Component {
 
    state = {
 
        // Initially, no file is selected
        selectedFile: null
    };
 
    // On file select (from the pop up)
    onFileChange = event => {
 
        // Update the state
        this.setState({ selectedFile: event.target.files[0] });
 
    };
 
    // On file upload (click the upload button)
    onFileUpload = () => {
 
        // Create an object of formData
        const formData = new FormData();
 
        // Update the formData object
        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );
 
        // Details of the uploaded file
        console.log(this.state.selectedFile);
 
        // Request made to the backend api
        // Send formData object
        axios.post("api/uploadfile", formData);
    };
 
    fileData = () => {
 
        if (this.state.selectedFile) {
 
            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {this.state.selectedFile.name}</p>
 
                    <p>File Type: {this.state.selectedFile.type}</p>
 
                    <p>
                        Last Modified:{" "}
                        {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>
 
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                </div>
            );
        }
    };
 
    render() {
 
        return (
            <div className='imgUpload'>
                <select name="cars" id="cars">
  <option value="aadhar">Aadhar Card</option>
  <option value="community">Community certificate</option>
  <option value="income">Income certificate</option>
  <option value="ten">10th Certificate</option>
  <option value="twelve">12th certificate</option>
</select>
                <div>
                    <input type="file"  onChange={this.onFileChange} />
                    <button className='upload' onClick={this.onFileUpload}>
                        Upload!
                    </button>
                </div>
                {this.fileData()}
             </div>
           
        )
    }
}
 
export default ImageUpload;


 {/* <div className='imgUpload'>
                    <h1>
                        Aadhar Card Photo:
                    </h1>
                    <h3>
                        File Upload using React!
                    </h3>
                    <div>
                        <input type="file" onChange={this.onFileChange} />
                        <button onClick={this.onFileUpload}>
                            Upload!
                        </button>
                    </div>
                    {this.fileData()}
                </div></><><div className='imgUpload'>
                    <h1>
                        Community Certificate:
                    </h1>
                    <h3>
                        File Upload using React!
                    </h3>
                    <div>
                        <input type="file" onChange={this.onFileChange} />
                        <button onClick={this.onFileUpload}>
                            Upload!
                        </button>
                    </div>
                    {this.fileData()}
                </div><div className='imgUpload'>
                        <h1>
                            Income Certificate:
                        </h1>
                        <h3>
                            File Upload using React!
                        </h3>
                        <div>
                            <input type="file" onChange={this.onFileChange} />
                            <button onClick={this.onFileUpload}>
                                Upload!
                            </button>
                        </div>
                        {this.fileData()}
                    </div>
                    <div className='imgUpload'>
                        <h1>
                            10th Mark Sheet:
                        </h1>
                        <h3>
                            File Upload using React!
                        </h3>
                        <div>
                            <input type="file" onChange={this.onFileChange} />
                            <button onClick={this.onFileUpload}>
                                Upload!
                            </button>
                        </div>
                        {this.fileData()}
                    </div>
                    <div className='imgUpload'>
                        <h1>
                            12th Mark Sheet:
                        </h1>
                        <h3>
                            File Upload using React!
                        </h3>
                        <div>
                            <input type="file" onChange={this.onFileChange} />
                            <button onClick={this.onFileUpload}>
                                Upload!
                            </button>
                        </div>
                        {this.fileData()}
                    </div></></>  */}
                        
            