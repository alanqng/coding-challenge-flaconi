import styled from "styled-components";

export const FilterDiv = styled.div`
 
    width: 200px;
    //margin: 20px auto 0;
    font-size: 14px;
    //overflow: auto;
    position: relative;


.instructions {
    width: 100%;
    text-align: center;
}

.dropdown-button {
    float: left;
    width: 100%;
    background: whitesmoke;
    padding: 10px 12px;
    background-color: white;
    cursor: pointer;
    border: 1px solid lightgray;
    box-sizing: border-box;
    
    .dropdown-label, .dropdown-quantity {
        float: left;
    }
    
    .dropdown-quantity {
        margin-left: 4px;
    }
    
    .fa-filter {
        float: right;
    }
}

.dropdown-list {
    float: left;
    width: 100%;
    background-color: white;
    border: 1px solid lightgray;
    border-top: none;
    box-sizing: border-box;
    padding: 10px 12px;
    position: absolute;
    z-index: 1000;
    left: 0;
    top: 100%;
    
    ul {
        margin: 10px 0;
        max-height: 200px;
        overflow-y: auto;
        padding-left: 0;
        li {
        list-style: none;
        }        
        input[type="checkbox"] {
            position: relative;
            top: 2px;
        }
    }
}
`
