export class Person {
  firstName: string;
  lastName: string;
  personId: string;
  email: string;
  username: string;
  password: string;
  acceptTerms: boolean;

  constructor(firstName?: string, lastName?: string, personId?: string, email?: string, username?: string, password?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.personId = personId;
    this.email = email;
    this.username = username;
    this.password = password;
    this.acceptTerms = false;
  }

}
