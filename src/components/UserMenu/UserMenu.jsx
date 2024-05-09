import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { clearList } from "../../redux/contacts/slice";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import css from './UserMenu.module.css';

const StyledButton = styled(Button)({
  color: 'white',
  border: '1px solid white',
});

const Wrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser);

  return (
    <Wrapper className={css.userGap}>
      <p variant="body">
        Welcome, {userName}
      </p>
      <StyledButton onClick={() => { dispatch(logOut()); dispatch(clearList()); }}>
        Logout
      </StyledButton>
    </Wrapper>
  );
};
