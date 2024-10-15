import WPAPI from 'wpapi';

const wp = new WPAPI({
	endpoint: import.meta.env.PUBLIC_APIURL
});

export default wp;

// BRON
// https://www.npmjs.com/package/wpapi
