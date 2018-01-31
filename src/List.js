/**
 * Created by shellbye on 2018/1/31.
 */
import React from 'react';

const List = props => (
    <ul>
        {
            props.items.map((item, index) => <li key={index}>{item}</li>)
        }
    </ul>
);

export default List;