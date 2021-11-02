// configuration object for various screen linking
const config = {
  screens: {
    Home: 'home',
    PickUp: 'pickup',
    Referrals: 'referrals',
    Orders: 'orders',
    Profile: 'profile',
    Cart: 'cart',
  },
};

//The linking object containing the prefixes of the app and config
const linking = {
  prefixes: ['demo://shoppy'],
  config,
};

export default linking;

// To test in terminal:
// ex: npx uri-scheme open demo://shoppy/referrals --ios

// To test in moobile safari:
// ex: demo://shoppy/home
