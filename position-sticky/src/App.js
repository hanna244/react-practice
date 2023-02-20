import "./App.css";
import PlanBox from "./components/PlanBox";
import Radio from "./components/Radio";

function App() {
  return (
    <>
      <div className="App">
        <section className="plan_container">
          <p className="plan_subHeadline">자막 소스와 언어만 선택하면 끝</p>
          <h1 className="plan_title">자막 구독 플랜 맞춤 구성하기</h1>
          <p className="plan_emph">
            모든 구독 플랜의 기본 제공 시간은 월 60분 ⏱️
          </p>
          <div className="plan_process">
            <h2 className="a11y">구독 플랜 구성 순서</h2>
            <PlanBox className="group_process first">
              <h3>1. 영상 자막 소스 선택</h3>
              <span className=""></span>
              <div>
                <Radio id="sourceVoice" name="source" label="음성" />
                <Radio id="sourceGraphic" name="source" label="그래픽" />
                <Radio
                  id="sourceVoiceAndGraphic"
                  name="source"
                  label="음성 + 그래픽"
                />
              </div>
            </PlanBox>
            <PlanBox className="group_process second">
              <h3>2. 번역 언어 선택 (복수 선택 가능)</h3>
              <div>
                <Radio id="languageEn" name="language" label="한국어 → 영어" />
                <Radio
                  id="languageJp"
                  name="language"
                  label="한국어 → 일본어"
                />
                <Radio
                  id="languageCn"
                  name="language"
                  label="한국어 → 중국어"
                />
              </div>
              <p>언어 추가 시 15% 할인</p>
            </PlanBox>
            <PlanBox className="group_process third">
              <h3>3. 결제수단 등록하면 구독 완료</h3>
              <div>
                <dl>
                  <div>
                    <dt>총 주문 금액</dt>
                    <dd>380,000원</dd>
                  </div>
                  <div>
                    <dt>구독 특별 할인</dt>
                    <dd>-30,000원</dd>
                  </div>
                  <div>
                    <dt>추가 언어 할인</dt>
                    <dd>-0원</dd>
                  </div>
                  <div>
                    <dt>제목 설명 번역 무료</dt>
                    <dd>추가 비용 없음</dd>
                  </div>
                  <div>
                    <dt>월 정기 결제 금액</dt>
                    <dd>350,000원</dd>
                  </div>
                </dl>
              </div>
            </PlanBox>
          </div>
          <div className="plan_submit">
            <h2 className="a11y">구독 진행</h2>
            <p>지금 1달 요금으로, 2달 이용 가능!</p>
            <button type="button">선택한 플랜으로 구독</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
