import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../resources/styles/variables';

const FooterItems = styled.div`
`;
const FooterHeader = styled.h1`
    font-size: ${variables.footer_header_font_size};
    padding-top: 40px;
    margin-left: 30px;
`;
const FooterTable = styled.table`
    margin-left: 30px;
    margin-bottom: 30px;
`;
const FooterTableRow = styled.tr`
`;
const FooterTableData = styled.td`
    color: ${variables.blue_color};
    font-size: ${variables.footer_table_font_size};
    padding-right: 100px;
`;

class Footer extends Component {
    render() {
        return(
            <FooterItems>
                <FooterHeader>Residential and Small Business</FooterHeader>
                <FooterTable>
                    <FooterTableRow>
                        <FooterTableData> > Electrical Car Charging</FooterTableData>
                        <FooterTableData> > Installation Material and System</FooterTableData>
                        <FooterTableData> > Installation Material and System</FooterTableData>
                    </FooterTableRow>
                    <FooterTableRow>
                        <FooterTableData> > Electrical Protection and Control</FooterTableData>
                        <FooterTableData> > Light Switches and Electrical Sockets</FooterTableData>
                        <FooterTableData> > Home Automation</FooterTableData>
                    </FooterTableRow>
                    <FooterTableRow>
                        <FooterTableData> > Emergency Lighting</FooterTableData>
                        <FooterTableData> > Network Infrastructure and Connectivity</FooterTableData>
                        <FooterTableData> > Home Security</FooterTableData>
                    </FooterTableRow>
                    <FooterTableRow>
                        <FooterTableData></FooterTableData>
                        <FooterTableData> > Uninterruptible Power Supply (UPS)</FooterTableData>
                        <FooterTableData></FooterTableData>
                    </FooterTableRow>
                </FooterTable>
            </FooterItems>
        )
    }
}

export default Footer;