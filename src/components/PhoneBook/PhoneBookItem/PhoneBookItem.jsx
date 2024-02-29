import css from './PhoneBookItem.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteContact } from '../../../redux/myPhoneBook/contacts/contacs-operations';
import EditButton from 'components/Buttons/EditButton';
import DeleteButton from 'components/Buttons/DeleteButton';
import sprite from '../../../svg/sprite.svg';
import { Flex } from 'antd';
import EditModal from 'components/Modal/Modal';
import EditeForm from '../EditeForm/EditeForm';

const PhoneBookItem = ({ contact }) => {
  const { id, name, number } = contact;
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onDelete = () => {
    setLoading(true);
    dispatch(deleteContact(id));
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const liStyle = {
    height: '45px',
    padding: '6px',
    marginTop: '6px',
    borderRadius: '2px',
    boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.5)',
  };

  return (
    <Flex justify="space-between" align="center" component="li" style={liStyle}>
      <Flex gap="middle">
        <svg className={css.contact_icon}>
          <use href={sprite + '#user'}></use>
        </svg>
        <p>{name}: </p>
        <p>{number}</p>
      </Flex>
      <Flex gap="small">
        <EditButton onClick={toggleModal} />
        <DeleteButton loading={loading} onClick={onDelete} />
      </Flex>
      {showModal && (
        <EditModal isModalOpen={showModal} onClose={toggleModal}>
          <EditeForm contact={contact} onSubmit={toggleModal} />
        </EditModal>
      )}
    </Flex>
  );
};

export default PhoneBookItem;
