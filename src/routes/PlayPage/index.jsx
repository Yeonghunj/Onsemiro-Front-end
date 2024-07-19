import HomeHeader from "../../components/HomeHeader";

export default function PlayPage() {
  return (
    <div className="flex flex-col">
      <HomeHeader />
      <main className="flex flex-col w-full mt-header-height relative">
        <div className="flex flex-row items-center justify-between fixed top-header-height w-main-frame py-4 px-2 z-10">
          <button
            className="bg-main text-white w-full box-border py-4 rounded-md text-xl mb-5"
          >
            ONSEMIRO로
            <br />
            돌아가기
          </button>
          <button
            className="bg-main text-white w-full box-border py-4 rounded-md text-xl mb-5"
          >
            내 프로필
            <br />
            표시 확인
          </button>
        </div>
        <section className="mt-28 px-6">
          <h3>TEST</h3>
          <h6>상시 업데이트 중</h6>
        </section>
      </main>
    </div>
  );
}