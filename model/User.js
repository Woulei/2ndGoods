// See: https://github.com/gcanti/tcomb-form-native
import t from 'tcomb-form-native';

var Gender = t.enums({
  M: 'Male',
  F: 'Female',
});

const User = t.struct({
  gender : Gender,
  firstName: t.String,
  lastName: t.String,
  address: t.maybe(t.String),
  postcode: t.maybe(t.String),
  city: t.maybe(t.String),
  telephone: t.maybe(t.String),
  email: t.String,
});

export const formOptions = {
  auto: 'placeholders',
  fields: {
    email: {
      keyboardType: 'email-address', // change keyboard layout to email input
      autoCapitalize: 'none', // start email addresses with lower-case
    },
    telephone: {
      keyboardType: 'phone-pad',
    }
  }
}

export default User;