create schema ac_account;
use ac_account;
drop table if exists application_user;

create table application_user (
       id bigint not null auto_increment,
        email varchar(255),
        password varchar(255),
        username varchar(255),
        primary key (id)
    ) engine=InnoDB;

    
alter table application_user 
       add constraint UK_cb61p28hanadv7k0nx1ec0n5l unique (email);

    
alter table application_user 
       add constraint UK_6c0v0rco93sykgyetukfmkkod unique (username);      