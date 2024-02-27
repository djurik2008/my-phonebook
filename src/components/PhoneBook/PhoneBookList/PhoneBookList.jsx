import css from './PhoneBookList.module.css';
import { useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectContactsState,
} from '../../../redux/myPhoneBook/contacts/contacts-selectors';
import Loader from 'components/Loader/Loader';
import { Report } from 'notiflix';
import PhoneBookItem from '../PhoneBookItem/PhoneBookItem';

const PhoneBookList = () => {
  const { items } = useSelector(selectFilteredContacts);
  const { fetchLoading, error } = useSelector(selectContactsState);

  if (error) {
    Report.failure(error);
  }
  const elements = items.map(item => {
    return <PhoneBookItem contact={item} key={item.id} />;
  });
  return (
    <>
      {fetchLoading && <Loader />}
      {Boolean(items.length) && <ul className={css.list}>{elements}</ul>}
    </>
  );
};

export default PhoneBookList;
