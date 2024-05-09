import React from 'react';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { selectIsLogin } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { AppBar as MuiAppBar, Toolbar, Typography } from '@mui/material';

const StyledAppBar = styled(MuiAppBar)({
  backgroundColor: '#1976d2',
  borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
});

const StyledToolbar = styled(Toolbar)({
  width: '80%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '40px',
});

const Title = styled(Typography)({
  flexGrow: 1,
});

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLogin);

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Title variant="h6">My App</Title>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </StyledToolbar>
    </StyledAppBar>
  );
};
