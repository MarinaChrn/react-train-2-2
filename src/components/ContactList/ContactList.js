import { ContactItem } from "../ContactItem/ContactItem";
import { StyledList, StyledListItem } from "./ContactList.styled";

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <StyledList>
      {contacts.map((contact) => (
        <StyledListItem key={contact.id}>
          <ContactItem contact={contact} deleteContact={deleteContact} />
        </StyledListItem>
      ))}
    </StyledList>
  );
};
