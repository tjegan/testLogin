/* This contains server error code and respective message
*/

const errorconfig =
  window.__APP_CONFIG__ && window.__APP_CONFIG__.errorConfig
    ? window.__APP_CONFIG__.errorConfig
    : {
        F101: 'No Results Found',
        F102: 'Please provide valid input!.',
        F103: 'Required mandatory data.',
        F201: 'Cak No Already Exist!.',
        F202: 'Total approved quantity exceeds contract volume',
        F203: 'Total pickup schedule quantity exceeds arrival approved quantity',
        F204: 'Total Vessel Arrival quantity exceeds contract approved quantity', 
        F205: 'Error due to received/balancestock/intransit values less than 0',
        defaultErr: 'Oops Something went wrong. Please try again later'
      };

export default errorconfig;
