import React from "react";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { ContactList } from "../../components/ContactList/ContactList";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import { CircularProgress } from "@mui/material";

const StyledPageWrapper = styled("div")({
  backgroundSize: "cover",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const StyledContentWrapper = styled("div")({
  width: '50%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
});

const StyledLoader = styled(CircularProgress)({
  margin: "20px",
});

export default function ContactsPage() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <StyledPageWrapper>
      <StyledContentWrapper>
        <ContactForm />
        <SearchBox />
        {loading && <StyledLoader />}
        {error && <p>Error: {error}</p>}
        {!loading && !error && <ContactList />}
      </StyledContentWrapper>
    </StyledPageWrapper>
  );
}
