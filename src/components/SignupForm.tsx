import { Link } from "react-router-dom";

export default function SignupForm() {
  return (
    <form action="/post" method="POST" className="form form--lg">
      <h1 className="form__title">회원가입</h1>
      <div className="form__block">
        <label htmlFor="title" className="form__label">
          이메일
        </label>
        <input type="text" name="title" id="title" required />
      </div>
      <div className="form__block">
        <label htmlFor="password" className="form__label">
          패스워드
        </label>
        <input type="password" name="password" id="password" required />
      </div>
      <div className="form__block">
        <label htmlFor="password" className="form__label">
          패스워드확인
        </label>
        <input
          type="password"
          name="password_check"
          id="password_check"
          required
        />
      </div>
      <div className="form__block">
        계정이 이미 있으신가요?
        <Link to="/login">로그인하기</Link>
      </div>
      <div className="form__block">
        <input type="submit" value="회원가입" className="form__btn--submit" />
      </div>
    </form>
  );
}
