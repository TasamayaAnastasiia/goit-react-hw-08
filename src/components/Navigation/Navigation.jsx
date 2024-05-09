import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLogin } from "../../redux/auth/selectors";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import css from "../Navigation/Navigation.module.css";
import ArticleIcon from "@mui/icons-material/Article";

const StyledButton = styled(Button)({
  color: "white",
  borderColor: "white",
});

const StyledArticleIcon = styled(ArticleIcon)({
  fill: "white",
  marginLeft: "10px",
});

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLogin);

  return (
    <nav className={css.navContainer}>
      <NavLink to="/">
        <StyledButton variant="outlined">Home</StyledButton>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <StyledButton variant="outlined">List contacts</StyledButton>
        </NavLink>
      )}
    </nav>
  );
};
