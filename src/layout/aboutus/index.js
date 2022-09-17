import * as React from "react";

export default function AboutUs() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url("img/watercolor-4117017_960_720.webp")`,
        backgroundSize: "100% 100%",
        marginTop: "100px",
      }}
    >
      <h2 style={{ color: "blue", textAlign: "center" }}>About Us</h2>
      <p>사용자의 선택에 따른 코디를 추천받는 사이트입니다.</p>
      <h3>사이트 개발자</h3>
      <p>ooo,xxx,aaa,bbb,ccc,ddd</p>
    </div>
  );
}
