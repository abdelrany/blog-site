import Header from "../components/Header";
import logo from '../logo.svg';
const AuthorPage = () => {
    const image = "https://avatars.githubusercontent.com/u/79026033?s=400&u=6b8daeaea5174e0c0eca06660c71a463f4fb93af&v=4"

    return (
        <div>
            <Header />
            <div className="container">
                <div className="inner-container">
                    <h1 className="page-title">About the Author:abdelrany</h1>
                    <div className="inner-container1" >
                        <div>

                            <img src={image} className="hero-image1" alt="myimage" />
                        </div><div>

                            <img src={logo} className="hero-image2" alt="reactlogo" />
                        </div>
                    </div>

                    <div className="blog-content">
                        <p className="blog-text">As a software developer, I have a wide range of experience working with different technologies. I have a strong background in React, JavaScript, Ethereum (Ethereum.js), blockchain technologies, HTML, and CSS. My experience with React and JavaScript has allowed me to create dynamic and interactive user interfaces for various web applications. Additionally, my experience with Ethereum.js has given me the knowledge to build decentralized applications (DApps) on the Ethereum blockchain. Furthermore, my skills in HTML and CSS have allowed me to design and layout various websites. I am excited to continue building on my skills and experience in the software development industry, and I look forward to taking on new and challenging projects in the future.</p>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default AuthorPage;


