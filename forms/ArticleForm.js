import t from 'tcomb-form-native';

var Gender = t.maybe(t.enums({
  Male: 'Dhr.',
  Female: 'Mevr.'
}));

const Article = t.struct({
  gender: Gender,
  first_name: t.String,
  last_name: t.String,
  address: t.maybe(t.String),
  postcode: t.maybe(t.String),
  city: t.maybe(t.String),
  telephone: t.maybe(t.String),
  email: t.String,
  storage_at_2ndgoods: t.Boolean,
  product_name: t.String,
  product_brand: t.String,
});

export const formOptions = {
  auto: 'none',
  legend: 'Persoonlijke gegevens',
  factory: t.form.Radio,
  fields: {
    first_name:      { placeholder: "Voornaam..", error: "Dit is een verplicht veld" },
    last_name:       { placeholder: "Achternaam..", error: "Dit is een verplicht veld" },
    address:        { placeholder: "Straat + Huisnummer.." },
    postcode:       { placeholder: "Postcode.." },
    city:           { placeholder: "Plaats.." },
    product_name:    { placeholder: "Product naam...", label: "Product", error: "Dit is een verplicht veld"},
    product_brand:   { placeholder: "Product merk...", error: "Dit is een verplicht veld"},
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
    storage_at_2ndgoods: {
      label: "Opslag verzorgd door 2ndGoods",
      help: "Wij kunnen voor u de opslag van het artikel verzorgen tijdens het verkoop proces.\n\nHet artikel komen wij dan bij uw ophalen.\n\nHiervoor een kleine kilometer vergoeding.",
    },
  },
}

export default Article;
