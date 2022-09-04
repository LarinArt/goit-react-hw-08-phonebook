import { useSelector } from "react-redux";
import authSelectors from "redux/auth/auth-selector";
import { useGetContactsQuery } from "redux/contacts/contactsApi";
import Container from "components/ui/Container";
import Form from "components/Form";
import List from "components/ContactsList";
import Filter from "components/Filter/FIlter";
import styled from "styled-components";
// import Bg from "components/images/Bg.jpg";

const ContactsPage = () => {
  const { data } = useGetContactsQuery();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <MainWrapper>
      <Container>
        <Form />
        {isLoggedIn && data && (data.length > 1 ? <Filter /> : "")}
        <List />
      </Container>
    </MainWrapper>
  );
};

export default ContactsPage;

const MainWrapper = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  overflow-y: scroll;
  max-height: calc(100vh - 148px);
`;
