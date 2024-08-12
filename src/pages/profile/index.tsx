import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PostList from "../../components/PostList";

export default function Profile() {
  return (
    <>
      <Header />
      <div className="profile__box">
        <div className="flex__box-lg">
          <div className="profile__image" />
          <div>
            <div className="profile__email">test@test.co.kr</div>
            <div className="profile__name">김땡땡</div>
          </div>
        </div>
        <Link to="/" className="porfile__logout">
          로그아웃
        </Link>
      </div>
      <PostList hasNavigation={false} />
      <Footer />
    </>
  );
}
