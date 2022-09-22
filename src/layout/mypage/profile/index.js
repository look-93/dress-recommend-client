import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  // const params = useParams();

  // console.log(params.uPk)

  // 기본이미지 세팅
  const [Image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  const fileInput = useRef(null);
  // 이미지 변경
  const [selectedFile, setSelectedFile] = useState("");
  const onChange = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    } else {
      //업로드 취소할 시 기본 이미지로 재설정
      setImage(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      );
      return;
    }

    //화면에 프로필 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  // 이미지 정보 전송
  const profileImg = async () => {
    if (selectedFile !== "") {
      const data = new FormData();
      data.append("imgFile", selectedFile);
      const fileUrlResult = await axios.post(
        "http://localhost:8080/util/uploadProfile/",
        data,
        {
          //서버로 data 보내면서 헤더에 form-data라고 알려주는 역할
          header: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(fileUrlResult);
      const uPk = sessionStorage.getItem("userPk");
      const myReviewResult = await axios.post(
        "http://localhost:8080/user/updateMyImgInfo/",
        {
          uimgUrl: fileUrlResult.data,
          upk: uPk,
        }
      );
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Avatar
        alt="Profile"
        src={Image}
        sx={{ height: "180px", width: "180px", ml: 2, mt: 3, mr: 2 }}
      />

      <CardActions sx={{ ml: 2 }}>
        <Button
          sx={{ height: 30, mt: 1.5 }}
          component="label"
          variant="outlined"
        >
          파일선택
          <input
            hidden
            accept="image/*"
            name="profile_img"
            type="file"
            onChange={onChange}
            ref={fileInput}
          />
        </Button>
        <Button
          sx={{ height: 30, mt: 1.5 }}
          component="label"
          variant="outlined"
          onClick={() => {
            profileImg();
            window.location.replace("/mypage");
          }}
        >
          저장
        </Button>
      </CardActions>
    </Card>
  );
}
