export default function PostForm() {
  return (
    <form action="/post" method="POST" className="form">
      <div className="form__block">
        <label htmlFor="title" className="form__label">
          제목
        </label>
        <input type="text" name="title" id="title" required />
      </div>
      <div className="form__block">
        <label htmlFor="summery" className="form__label">
          요약
        </label>
        <input type="text" name="summery" id="summery" required />
      </div>
      <div className="form__block">
        <label htmlFor="content" className="form__label">
          내용
        </label>
        <textarea name="content" id="content" required />
      </div>
      <div className="form__block">
        <input type="submit" value="제출" className="form__btn--submit" />
      </div>
    </form>
  );
}
