
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { examSlice } from "../store/store.js";
import { callAxios } from "../libs/function.js";
import _ from "lodash";

import {ListGroup,Button} from 'react-bootstrap';

export default function SampleComponent() {
    const dispatch = useDispatch()
    const dummyItems = useSelector((state) => {
        return state.examReducer.items
    })

    const changeItems = () => {
        let len = dummyItems.length
        let cloneItems = _.cloneDeep(dummyItems)
        cloneItems.push(`comp item${len+1}`)
        
        dispatch(examSlice.actions.changeitems(cloneItems));
    }

    return(
        <div>
            <Button variant="primary" onClick={changeItems}>AddItems</Button>{' '}
            <ListGroup>
                {dummyItems.map((item) => (
                    <ListGroup.Item key={item}>{item}</ListGroup.Item>
                ))}
            </ListGroup>
            
        </div>
    )
}