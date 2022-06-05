import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts, toggleStatus } from 'redux/contactsSlice';
import Avatar from 'react-avatar';
import {
  Table,
  TableBody,
  TableHead,
  TableTd,
  TableTh,
  TableTr,
  TableIcon,
} from './ContactTable.styled';

export const ContactTable = () => {
  const { contacts } = useSelector(getContacts);
  const dispatch = useDispatch();

  const tableHeaders = ['№', 'avatar', 'name', 'age', 'status', 'option'];
  return (
    <Table>
      <TableHead>
        <TableTr>
          {tableHeaders.map((header, idx) => (
            <TableTh key={idx}>{header}</TableTh>
          ))}
        </TableTr>
      </TableHead>
      <TableBody>
        {contacts.map(({ id, avatar, name, age, status }, idx) => {
          return (
            <TableTr key={id}>
              <TableTd>№{idx + 1}</TableTd>
              <TableTd>
                <Avatar size={40} round={true} name={avatar} />
              </TableTd>
              <TableTd>{name}</TableTd>
              <TableTd>{age}</TableTd>
              <TableTd
                onClick={() => {
                  dispatch(toggleStatus(id));
                }}
              >
                {status === 'yes' ? 'online' : 'offline'}
              </TableTd>
              <TableTd
                onClick={() => {
                  dispatch(deleteContact(id));
                }}
              >
                <TableIcon size="20px" />
              </TableTd>
            </TableTr>
          );
        })}
      </TableBody>
    </Table>
  );
};
