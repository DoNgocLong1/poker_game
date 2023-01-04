import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Container,
  NameLabel,
  Budget
} from './User.styled';
import { IUserData } from 'types/user.type';
interface IUser{
  width?: number,
  height?: number,
  flex?: string,
  data?: IUserData,
  name?: string,
}
const User = ({width = 70, height = 70, flex = 'column' ,data, name}: IUser) => {
  return (
    <Container flex = {flex}>   
      <NameLabel>{data?.name || name}</NameLabel>
      <Avatar alt="Remy Sharp" src={data?.avatar} sx={{ width: width, height: height}}/>
      <Budget>400k</Budget> 
    </Container>
  )
}

export default User