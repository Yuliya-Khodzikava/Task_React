import React, { Component } from 'react';
import styled from "styled-components";

import variables from '../../resources/styles/variables';

const Home = styled.div`
    height: 335px;
    background: ${variables.gray_color};
`;
const Header = styled.h1`
    color: ${variables.green_color};
    text-align: center;
    padding-top: 70px;
    margin-bottom: 35px;
`;
const Search = styled.div`
    width: 700px;
    height: 110px;
    margin: 0 auto;
    border: 2px solid ${variables.green_color};
`;
const SearchHeader = styled.h1`
    font-size: ${variables.search_header_font_size};
    text-align: center;
`;
const Input = styled.input`
    width: 200px;
    height: 35px;
    font-style: italic;
    font-size: ${variables.search_input_font_size};
    padding-left: 7px;
    border: 1px solid #8b7e66;
    margin-left: 150px;
`;
const Button = styled.button`
    width: 35px;
    height: 35px;
    background-color: ${variables.green_color};
    color: ${variables.white_color};
    border: none;
`;
const File = styled.p`
    width: 200px;
    font-size: ${variables.file_font_size};
    float: right;
    margin-right: 95px;
`;
const CustomizationHeader = Header.extend`
    font-size: ${variables.custom_header_font_size};
    padding-top: 10px;
    margin-bottom: 15px;
`;
const ToolsHeader = styled.h2`
    font-size: ${variables.tools_header_font_size};
    margin-bottom: 10px;
    margin-left: 30px;
`;
const ToolsArea = styled.div`
    height: 235px;
    border: 1px solid ${variables.light_gray_color};
    margin-left: 30px;
    margin-right: 30px;
`;
const ToolsList = styled.div`
    list-style: none;
`;
const ListItem = styled.li`
    font-size: ${variables.list_item_font_size};
    border: 1px solid ${variables.dark_gray_color};
    padding: 10px;
    float: left;
    width: 18%;
    height: 15px;
    margin-top: 5px;
    margin-left: 5px;
    margin-bottom: 5px;
    white-space: nowrap; /* Запрещаем перенос строк */
    overflow: hidden; /* Обрезаем все, что не помещается в область */
    text-overflow: ellipsis; /* Добавляем многоточие */
    background: ${variables.gray_color};
        &:hover {
            border: 1px solid ${variables.green_color};
        }
`;

class Item extends Component {
    render() {
        return <ListItem>{this.props.name}</ListItem>;
    }
}

class ItemsList extends Component {
    constructor(props){
        super(props);
        this.state = { items: this.props.data.items};

        this.filterList = this.filterList.bind(this);
    }
    // фильтрация списка
    filterList(e){
        var filteredList = this.props.data.items.filter(function(item){
            return item.toLowerCase().search(e.target.value.toLowerCase())!== -1;
        });
        // обновление состояния
        this.setState({items: filteredList});
    }
    render() {
        return (
            <div>
                <Home>
                    <Header>Welcome<br/> to Schneider Customization Tool</Header>
                    <Search>
                        <SearchHeader>Retrieve your customization</SearchHeader>
                        <Input placeholder='Enter existing customization code' onChange={this.filterList}></Input>
                        <Button>Go</Button>
                        <File>Or Import Customization File</File>
                    </Search>
                </Home>
                <CustomizationHeader>Start your Customization</CustomizationHeader>
                <ToolsHeader>Industrial automation and control</ToolsHeader>
                <ToolsArea>
                    <ToolsList>
                        {
                            this.state.items.map(function(item){
                                return <Item key={item} name={item} />
                            })
                        }
                    </ToolsList>
                </ToolsArea>
            </div>
        );
    }
}

export default ItemsList;