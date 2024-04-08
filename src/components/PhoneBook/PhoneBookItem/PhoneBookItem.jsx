import css from './PhoneBookItem.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteContact } from '../../../redux/myPhoneBook/contacts/contacs-operations';
import EditButton from 'components/Buttons/EditButton';
import DeleteButton from 'components/Buttons/DeleteButton';
// import sprite from '../../../svg/sprite.svg';
import { Flex, Table } from 'antd';
import EditModal from 'components/Modal/Modal';
import EditeForm from '../EditeForm/EditeForm';

const PhoneBookItem = ({ contacts }) => {
  // const { id, name, number } = contact;
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // const contact = contacts.map(contact => contact);

  const onDelete = id => {
    setLoading(true);
    dispatch(deleteContact(id));
    setLoading(false);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleEdit = contact => {
    setSelectedContact(contact);
    toggleModal();
  };

  // const liStyle = {
  //   height: '45px',
  //   padding: '6px',
  //   marginTop: '6px',
  //   borderRadius: '2px',
  //   boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.5)',
  // };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Phone number',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Flex gap="small" justify="center">
          <EditButton onClick={() => handleEdit(record)} />
          <DeleteButton loading={loading} onClick={() => onDelete(record.id)} />
        </Flex>
      ),
    },
  ];

  return (
    <>
      <Table
        rowKey={record => record.id}
        pagination={false}
        columns={columns}
        dataSource={contacts}
        size="small"
        bordered
        title={() => 'My contacts'}
        className={css.table}
      />
      {showModal && (
        <EditModal isModalOpen={showModal} onClose={toggleModal}>
          <EditeForm contact={selectedContact} onSubmit={toggleModal} />
        </EditModal>
      )}
    </>

    // <Flex justify="space-between" align="center" component="li" style={liStyle}>
    //   <Flex gap="middle">
    //     <svg className={css.contact_icon}>
    //       <use href={sprite + '#user'}></use>
    //     </svg>
    //     <p>{name}: </p>
    //     <p>{number}</p>
    //   </Flex>
    //   <Flex gap="small">
    //     <EditButton onClick={toggleModal} />
    //     <DeleteButton loading={loading} onClick={onDelete} />
    //   </Flex>
    //   {showModal && (
    //     <EditModal isModalOpen={showModal} onClose={toggleModal}>
    //       <EditeForm contact={contact} onSubmit={toggleModal} />
    //     </EditModal>
    //   )}
    // </Flex>
  );
};

export default PhoneBookItem;
