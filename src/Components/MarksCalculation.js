import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import { state } from '../data/students';

export default class MarksCalculation extends Component {
    
    calculate(event){
        const selectedID = event.target.value;
        const selectedStudent = state.marks.filter(std => {
            if(std.id === parseInt(selectedID))
                return std;
        });
        if(!selectedStudent.length){
            selectedStudent.push({
                maths: "%",
                physics: "%",
                chemistry: "%",
                biology: "%",
                english: "%"
            });
        } else{
            state.selectedStudentDetails.maths = selectedStudent[0].maths + "%";
            state.selectedStudentDetails.physics = selectedStudent[0].physics + "%";
            state.selectedStudentDetails.chemistry = selectedStudent[0].chemistry + "%";
            state.selectedStudentDetails.biology = selectedStudent[0].biology + "%";
            state.selectedStudentDetails.english = selectedStudent[0].english + "%";
            state.selectedStudentDetails.total = (selectedStudent[0].maths+selectedStudent[0].physics+selectedStudent[0].chemistry+selectedStudent[0].biology+selectedStudent[0].english)/5;
        }
    }
    render() {
        const vContainer = {
            width: '100%',
            padding: '10px'
        };
        return (
            <div className={vContainer}>
                <div className="m-5">
                    <h4 className="mb-3">Percentage calculation for person</h4>
                    <input type="number" onChange={this.calculate} className="form-control  mb-2" placeholder="Student ID" />
                    <button type="button" className="btn btn-primary btn-sm mb-5">Get data from server</button>
                    <h4 className="mb-3">Subject Percentage</h4>
                    <input type="text" disabled="true" className="form-control  mb-2" placeholder="Maths %" value={state.selectedStudentDetails.maths}></input>
                    <input type="text" disabled="true" className="form-control  mb-2" placeholder="Physics %" value={state.selectedStudentDetails.physics}></input>
                    <input type="text" disabled="true" className="form-control  mb-2" placeholder="Chemistry %" value={state.selectedStudentDetails.chemistry}></input>
                    <input type="text" disabled="true" className="form-control  mb-2" placeholder="Biology %" value={state.selectedStudentDetails.biology}></input>
                    <input type="text" disabled="true" className="form-control  mb-5" placeholder="English %" value={state.selectedStudentDetails.english}></input>
                    <h4 className="mb-3">Total Percentage</h4>
                    <ProgressBar height="30" bgcolor="blue" progress="30"></ProgressBar>
                </div>
            </div>
        )
    } 
}
