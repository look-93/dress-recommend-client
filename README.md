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

create table dress.review(
r_pk int(11) not null AUTO_INCREMENT primary key,
img_url varchar(200) not null,
create_date datetime not null,
u_pk int(11) not null,
constraint fk_user_review foreign key(u_pk) references dress.user(u_pk)
);

create table dress.comment(
c_pk int(11) not null primary key,
u_pk int(11) not null,
r_pk int(11) not null,
message TEXT not null,
create_date datetime not null,
constraint FK_user_comment FOREIGN KEY (u_pk) REFERENCES user(u_pk),
constraint FK_review_comment FOREIGN KEY (r_pk) REFERENCES review(r_pk)
);
