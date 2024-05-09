import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)({
  color: 'white',
  borderColor: 'white',
  marginRight: '10px',
});

export const AuthNav = () => {
  return (
    <div>
      <NavLink to='/register'>
        <StyledButton variant="outlined">Registration</StyledButton>
      </NavLink>
      <NavLink to='/login'>
        <StyledButton variant="outlined">Log In</StyledButton>
      </NavLink>
    </div>
  )
}
