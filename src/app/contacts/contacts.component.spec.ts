import { ContactsComponent } from './contacts.component';

describe('Contacts', () => {
  test('Test contacts component', () => {
    const comp = new ContactsComponent();
    expect(comp).toBeDefined();
  });
});
