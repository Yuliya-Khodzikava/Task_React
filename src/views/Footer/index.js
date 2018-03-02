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
                    {
                        this.props.rows.map(row => {
                            return (
                                <FooterTableRow>
                                    {row.map(element => <FooterTableData>{element}</FooterTableData>)}
                                </FooterTableRow>
                            )
                        })
                    }
                </FooterTable>
            </FooterItems>
        )
    }
}

export default Footer;