const {v4} = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Kened',
    email: 'kened@gmail.com',
    phone: '(99) 99999-9999',
    category_id: v4(),
    category_name: 'Instagram',

  },
  {
    id: v4(),
    name: 'Jose Silva',
    email: 'jose@gmail.com',
    phone: '(99) 99999-9999',
    category_id: v4(),
    category_name: 'Instagram',

  }
]


class ContactRepository {
  findAll(){
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id){
    return new Promise((resolve) => resolve(
      contacts.find((contact)=> contact.id === id),
    ));
  }

  findByEmail(email){
    return new Promise((resolve) => resolve(
      contacts.find((contact)=> contact.email === email),
    ));
  }

  create({name, email, phone, category_id}){
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id
      };
      contacts.push(newContact);
      resolve(newContact);
    });
  }

  update(id, {name, email, phone, category_id}){
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id
      };
     contacts = contacts.map((contact)=>(
      contact.id === id ? updatedContact : contact
     ));
     resolve(updatedContact);
    });
  }

  delete(id){
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactRepository();