import t from 'tcomb-form-native';

var Gender = t.enums({
  Male: 'Dhr.',
  Female: 'Mevr.'
});

const Article = t.struct({
  gender: Gender,
  firstName: t.String,
  lastName: t.String,
  address: t.maybe(t.String),
  postcode: t.maybe(t.String),
  city: t.maybe(t.String),
  telephone: t.maybe(t.String),
  email: t.String,
  storage: t.Boolean,
  productName: t.String,
  productBrand: t.String,
});

export const formOptions = {
  auto: 'none',
  legend: 'Persoonlijke gegevens',
  factory: t.form.Radio,
  fields: {
    firstName:      { placeholder: "Voornaam..", error: "Dit is een verplicht veld" },
    lastName:       { placeholder: "Achternaam..", error: "Dit is een verplicht veld" },
    address:        { placeholder: "Straat + Huisnummer.." },
    postcode:       { placeholder: "Postcode.." },
    city:           { placeholder: "Plaats.." },
    productName:    { placeholder: "Product naam...", label: "Product", error: "Dit is een verplicht veld"},
    productBrand:   { placeholder: "Product merk...", error: "Dit is een verplicht veld"},
    telephone: {
      keyboardType: 'phone-pad',
      placeholder: "Telefoon-nr.."
    },
    email: {
      keyboardType: 'email-address',
      autoCapitalize: 'none',
      placeholder: "Email..",
      error: "Dit is een verplicht veld",
    },
    gender: {
      factory: t.form.radio,
      nullOption: {value: '', text: 'Aanhef'},
    },
    storage: {
      label: "Opslag verzorgd door 2ndGoods",
      help: "Wij kunnen voor u de opslag van het artikel verzorgen tijdens het verkoop proces.\n\nHet artikel komen wij dan bij uw ophalen.\n\nHiervoor een kleine kilometer vergoeding.",
    },
  },
}

export default Article;
