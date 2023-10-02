import React from "react";
import {Document, Page} from 'react-pdf'
import pdfFile from '../../assets/Resume.pdf';

const Resume = () => {
    return (
        <div>
            <h1> Here is a link </h1>
            <Document file ={pdfFile}>
                <Page pageNumber={1}/>
            </Document>
        </div>
    );
}




export default Resume;
