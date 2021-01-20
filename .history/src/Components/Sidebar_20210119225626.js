import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import {SidebarItems} from './SidebarItems';
export default function Sidebar() {
    return (
        <>
           
                {
                    SidebarItems.map(item=> (
                        <ListItem key={item.name}>
                            <p>{item.name}</p>
                        </ListItem>
                    ))
                }
           
        </>
    );
}