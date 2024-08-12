import { Link } from "react-router-dom";

export default function PostList({ hasNavigation = true }) {
  return (
    <>
      {hasNavigation && (
        <div className="post__navigation">
          <button className="post__navigation--active">전체</button>
          <button>내가 쓴글</button>
        </div>
      )}
      <div className="post__list">
        {[...Array(10)].map((e, index) => (
          <div key={index} className="post__box">
            <Link to={`/posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile"></div>
                <div className="post__author-name">프리티어소이</div>
                <div className="post__date">2023.8.12(월)</div>
              </div>
              <div className="post__title">게시글 {index}</div>
              <div className="post__text">
                모든 국민은 법률이 정하는 바에 의하여 공무담임권을 가진다.
                환경권의 내용과 행사에 관하여는 법률로 정한다. 제1항의
                탄핵소추는 국회재적의원 3분의 1 이상의 발의가 있어야 하며, 그
                의결은 국회재적의원 과반수의 찬성이 있어야 한다. 다만, 대통령에
                대한 탄핵소추는 국회재적의원 과반수의 발의와 국회재적의원 3분의
                2 이상의 찬성이 있어야 한다. 의무교육은 무상으로 한다. 국회나 그
                위원회의 요구가 있을 때에는 국무총리·국무위원 또는 정부위원은
                출석·답변하여야 하며, 국무총리 또는 국무위원이 출석요구를 받은
                때에는 국무위원 또는 정부위원으로 하여금 출석·답변하게 할 수
                있다.
              </div>
            </Link>
            <div className="post__utils-box">
              <div className="post__delete">
                <Link to={`/posts/delete/${index}`}>삭제</Link>
              </div>
              <div className="post__edit">
                <Link to={`/posts/edit/${index}`}>수정</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
