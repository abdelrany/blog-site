import Header from "../components/Header";
import { my_blogs } from "../blogs";
import { useLocation } from "react-router-dom";

const BlogPage = () => {
    let { state } = useLocation()
    let blog_id = state.blog_id;
    const iamge = "https://images.unsplash.com/photo-1592609931041-40265b692757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZ3JhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"

    return (
        <div>
            <Header />
            <div className="container">
                <div className="inner-container">
                    <h1 className="page-title">{my_blogs[blog_id].title}</h1>
                    <div className="blog-subcontents">
                        <p className="blog-author">{my_blogs[blog_id].author}</p>
                        <p className="blog-date">{my_blogs[blog_id].date}</p>
                    </div>
                    <img src={iamge} className="hero-image" alt="" />
                    <div className="blog-content">
                        <p className="blog-text">{my_blogs[blog_id].content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogPage;