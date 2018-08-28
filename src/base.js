  
  import Rebase from 're-base';
  import Firebase from 'firebase';
 const firebaseApp=Firebase.initializeApp({
  apiKey: "AIzaSyD_br4tCzBenT2ku00CyfjpxYFlQIffz7I",
  authDomain: "cvreact-56d2c.firebaseapp.com",
  databaseURL: "https://cvreact-56d2c.firebaseio.com",
 })
  const base = Rebase.createClass(firebaseApp.database());
    


  export {firebaseApp};
  export default base; 