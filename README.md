코스모 파이널 프로젝트 클라이언트

- material ui 설치 불가시

npm install @mui/material @mui/styled-engine-sc styled-components --force

npm install @mui/material @emotion/react @emotion/styled --force

<!-- 사진 관련 (unsplash 가입, 키 필요)
npx create-react-app unsplash -->

axios
npm install axios --force

npm install react-router-dom

npm i styled-components --force

npm install react-bootstrap bootstrap --force

npm install --save swiper --force

npm install --save sass --force

create table user (
u_pk int(11) not null auto_increment primary key,
u_id varchar(100) not null,
u_password varchar(100) not null,
u_name varchar(30) not null,
u_email varchar(200) not null,
u_phon varchar(11) not null,
u_gender char(1) not null,
u_imgurl varchar(200)
);

create table dress.review(
r_pk int(11) not null AUTO_INCREMENT primary key,
top_img_url varchar(200) not null,
bottom_img_url varchar(200) not null,
create_date datetime not null,
u_pk int(11) not null,
modify_date datetime,
content text,
constraint fk_user_review foreign key(u_pk) references dress.user(u_pk)
);

create table dress.comment(
c_pk int(11) not null primary key,
u_pk int(11) not null,
message TEXT not null,
create_date datetime not null,
ur_pk int(11) not null,
constraint fk_comment_user foreign key (u_pk) references user(u_pk),
constraint fk_comment_used_review foreign key (ur_pk) references used_review (ur_pk)
);

create table used_review(
ur_pk int(11) not null auto_increment primary key,
contents text not null,
rating char(1) not null,
file_url varchar(200) not null,
title varchar(50) not null,
r_pk int(11) not null,
ur_create_date varchar(200),
constraint fk_used_review_review foreign key(r_pk) references dress.review(r_pk)
);

create table star(
s_pk int(11) not null auto_increment,
u_pk int(11) not null,
r_pk int(11) not null,
constraint fk_star_user foreign key(u_pk) references dress.user(u_pk),
constraint fk_star_used_review foreign key(r_pk) references dress.used_review(r_pk),
);

create table heart(
h_pk int(11) not null auto_increment primary key,
u_pk int(11) not null,
r_pk int(11) not null,
constraint fk_heart_user foreign key(u_pk) references dress.user(u_pk),
constraint fk_heart_review foreign key(r_pk) references dress.review(r_pk)
);
