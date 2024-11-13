import {
  StyledBtnDelete,
  StyledContainer,
  StyledName,
  StyledNumber,
} from "./ContactItem.styled";

export const ContactItem = ({ contact, deleteContact }) => {
  return (
    <StyledContainer>
      <StyledName> {contact.name}</StyledName>
      <StyledNumber>{contact.number}</StyledNumber>
      <StyledBtnDelete type="button" onClick={(e) => deleteContact(contact.id)}>
        Delete
      </StyledBtnDelete>
    </StyledContainer>
  );
};
