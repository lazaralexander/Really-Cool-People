import React, { useState } from "react";
//import components of the admin module to build the data structure of the user page
import { List, Datagrid, TextField, EmailField, UrlField } from "react-admin";

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="phone" />
      <UrlField source="website" />
    </Datagrid>
  </List>
);
