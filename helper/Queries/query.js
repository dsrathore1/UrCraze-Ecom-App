export const getContactDetail = 'SELECT * FROM CONTACT_DETAILS';
export const insertData = 'INSERT INTO CONTACT_DETAILS(NAME, EMAIL, MSG) VALUES($1,$2,$3)';
export const getContactDataByID = 'SELECT * FROM CONTACT_DETAILS WHERE ID=$1';
export const checkEmailExists = 'SELECT * FROM CONTACT_DETAILS WHERE EMAIL=LOWER($1) OR EMAIL=UPPER($1)';
export const deleteDetailByID = 'DELETE FROM CONTACT_DETAILS WHERE ID=$1';
export const updateDetailByID = 'UPDATE CONTACT_DETAILS SET NAME=$1, EMAIL=$2, MSG=$3 WHERE ID=$4';