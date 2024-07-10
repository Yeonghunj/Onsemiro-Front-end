import IconImage from "../IconImage";
import { useMemo } from "react";
import ProfileWOPhoto from "../../assets/profile1.png";
import ProfileWPhoto from "../../assets/profile2.png";

import check from "../../assets/check.png";
import AuthLabel from "./authlabel";
import ProfileLine from "./profileline";

import "./index.css";

export default function Letter({ info, timeInfo, index }) {
  const message = useMemo(() => {
    switch (info.meta.type) {
      case "recommend":
        if (info.profile.photo_status)
          return (
            <>
              사진이 등록된 사용자에요!
              <br />
              사진 요청 여부를 다음 쪽지 시간(17:00)
              <br />
              전까지 결정해주세요.
            </>
          );
        return (
          <>
            사진이 등록되지 않은 사용자에요!
            <br />
            매칭 수락 여부를 다음 쪽지 시간(17:00)
            <br />
            전까지 결정해주세요.
          </>
        );
      case "request":
        if (info.meta.status === "photo")
          return (
            <>
              상대방이 사진 공개를 요청했어요!
              <br />
              상대방의 프로필이 마음에 든다면 사진을
              <br />
              공개하고 서로의 얼굴을 확인해보세요.
            </>
          );
        else if (info.meta.status === "finalAfterPhoto")
          return (
            <>
              상대방이 사진 요청을 수락하셨습니다.
              <br />
              매칭 수락 여부를 24시간 내에 결정해주세요.
            </>
          );
        return (
          <>
            사진이 등록되지 않은 사용자에요!
            <br />
            매칭 수락 여부를 다음 쪽지 시간(17:00)
            <br />
            전까지 결정해주세요.
          </>
        );
      case "response":
        if (
          info.meta.status === "directReject" ||
          info.meta.status === "finalReject"
        )
          return (
            <>
              상호 의견이 달라 매칭에 실패하였습니다.
              <br />
              창을 닫으면 더 이상 프로필을 볼 수 없습니다.
              <br />
              다음 매칭을 기대해 주세요.
            </>
          );
        else if (info.meta.status === "photoReject") {
          return (
            <>
              상대방이 사진 요청을 거절하셨습니다.
              <br />
              창을 닫으면 더 이상 프로필을 볼 수 없습니다.
              <br />
              새로운 상대를 찾아드릴게요!
            </>
          );
        } else if (
          info.meta.status === "directSuccess" ||
          info.meta.status === "finalSuccess"
        ) {
          return (
            <>
              축하드립니다! 매칭에 성공하셨습니다.
              <br />
              상대방의 카톡 아이디는 {info.counter_id}입니다.
            </>
          );
        }
    }
  }, [info]);

  const keys = useMemo(
    () =>
      Object.keys(info.profile).filter(
        (key) =>
          key !== "introduction" &&
          key !== "photo_status" &&
          key !== "auth_self" &&
          key !== "auth_univ" &&
          key !== "disease_inspection" &&
          key !== "univ" &&
          key !== "gender" &&
          key !== "age" &&
          key !== "photo"
      ),
    []
  );

  const keyMapWithKorean = useMemo(
    () => ({
      location: "거주 지역",
      height: "키",
      weight: "체형",
      face: "생김새",
      mbti: "MBTI",
      character: "성격",
      interest: "관심사",
      period: "만남 주기",
      tendency: "성적 성향",
    }),
    []
  );

  return (
    <div
      className="letterFrame flex flex-col items-center w-full shrink-0"
      style={{ transform: `translateX(-${index * 100}%)` }}
    >
      <header className="top-0 w-4/5 flex flex-row items-center justify-center py-3 border-b-2 ">
        <div className="w-5 mr-3">
          <IconImage src={timeInfo.icon}></IconImage>
        </div>
        <h5 className="tracking-wider">
          {info.date} {timeInfo.time} 쪽지
        </h5>
      </header>
      <div className="w-4/5 bg-sub text-center rounded-2xl shadow-lg py-2 mt-2">
        {message}
      </div>
      <div className="w-full mt-3 relative">
        <div className="w-1/4 m-auto">
          <IconImage
            src={
              info.profile.photo ??
              (info.profile.photo_status ? ProfileWPhoto : ProfileWOPhoto)
            }
          />
        </div>
        {info.profile.disease_inspection ? (
          <div className="bg-main rounded-xl flex absolute top-0 right-12 items-center w- px-3 py-1 box-border shadow-lg">
            <div className="w-4 mr-2">
              <IconImage src={check}></IconImage>
            </div>
            <p className="text-center text-white text-xs">
              STD 3종 <br />
              검사 완료
            </p>
          </div>
        ) : null}
      </div>
      <section className="w-full px-3 mb-2">
        <h4 className="text-sm">기본 정보</h4>
        <div className="rounded-lg border-slate-400 border-2 p-1">
          <div className="flex flex-row">
            {info.profile.auth_self ? <AuthLabel>본인 인증</AuthLabel> : null}
            {info.profile.auth_univ ? <AuthLabel>학교 인증</AuthLabel> : null}
          </div>
          <p className="text-base">
            {info.profile.univ}에 재학중인, {info.profile.age}세{" "}
            {info.profile.gender}
          </p>
        </div>
      </section>
      <section className="w-full px-3">
        <h4 className="text-sm">상세 정보</h4>
        <div className="rounded-lg border-slate-400 border-2 p-1">
          {keys.map((key) => (
            <ProfileLine
              label={keyMapWithKorean[key]}
              value={info.profile[key]}
              key={key}
            ></ProfileLine>
          ))}
        </div>
      </section>
      <section className="w-full px-3">
        <h4 className="text-sm">소개글</h4>
        <div className="rounded-lg border-slate-400 border-2 p-1">
          {info.profile.introduction}
        </div>
      </section>
    </div>
  );
}