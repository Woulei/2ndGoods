// See: https://github.com/gcanti/tcomb-form-native
import t from 'tcomb-form-native';

var Gender = t.enums.of('Male Female');

const User = t.struct({
  gender: Gender,
  firstName: t.String,
  lastName: t.String,
  address: t.maybe(t.String),
  postcode: t.maybe(t.String),
  city: t.maybe(t.String),
  telephone: t.maybe(t.String),
  email: t.String,
});

export const formOptions = {
  auto: 'none',
  fields: {
    firstName:  { placeholder: "Voornaam.." },
    lastName:   { placeholder: "Achternaam.." },
    address:  { placeholder: "Straat + Huisnummer.." },
    postcode:   { placeholder: "Postcode.." },
    city:       { placeholder: "Plaats.." },
    telephone: {
      keyboardType: 'phone-pad',
      placeholder: "Telefoon-nr.."
    },
    email: {
      keyboardType: 'email-address',
      autoCapitalize: 'none',
      placeholder: "Email..",
    },
    gender: {
      options: [
        {value: 'Male', text: 'Dhr.'},
        {value: 'Female', text: 'Mevr.'},
      ],
      nullOption: {value: '', text: 'Choose your gender'},
    },
  },
}

export default User;
