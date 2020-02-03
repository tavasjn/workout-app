-- seed info will go here
create table users(
    user_id serial primary key,
    user_name varchar(130),
    user_email varchar(150),
    user_image varchar(500),
    auth0_id varchar(350)
)