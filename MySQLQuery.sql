use remisa_cms;

select * from tbl_accounts;
select * from tbl_users;

select * from tbl_users where _id_user = (select _fk_id_user from tbl_accounts where _id_account = 1);


