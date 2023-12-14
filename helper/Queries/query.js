export const getContactDetail = 'SELECT * FROM CONTACT_DETAILS';
export const insertData = 'INSERT INTO CONTACT_DETAILS(NAME, EMAIL, MSG) VALUES($1,$2,$3)';
export const getContactDataByID = 'SELECT * FROM CONTACT_DETAILS WHERE ID=$1';
export const checkEmailExists = 'SELECT * FROM CONTACT_DETAILS WHERE EMAIL=LOWER($1) OR EMAIL=UPPER($1)';