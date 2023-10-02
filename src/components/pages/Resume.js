import React from "react";
import {Document, Page} from 'react-pdf'
import pdfFile from '../public/Resume.pdf';

function Resume () {
    return (
        <div>
            < Document file ={pdfFile}>
                <Page pageNumber={1}/>
            </Document>
        </div>
    );
}




export default Resume;
