import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import {SidebarItems} from './SidebarItems';
import {Link} from 'react-router-dom';
import { ListItemText } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';

export default function Sidebar(props) {
    return (
        <>
           
                {
                   
                    SidebarItems.map((item,index)=> {
                        const {name,icon,route}=item;

                        return (
                            <Link style={{ textDecoration: 'none'}} to={item.layout + route}>
                            <ListItem style={{ color: '#eeeeee'}} key={name}  >
                                {icon && <ListItemIcon style={{ color: '#a8a8a8'}}>{icon}</ListItemIcon>}
                               <ListItemText primary={name} />
                            </ListItem>
                            </Link>
                        );
                    })
                }
           
        </>
    );
}