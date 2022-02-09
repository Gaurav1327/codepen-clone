import { useEffect, useState } from "react";
import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";
import "react-reflex/styles.css";
import { EditorLayout } from "../styles/EditorLayout";
import SolutionLayout from "./SolutionLayout";

const EditorMain = () => {
  const [html, setHtml] = useState(`<header> 
    <nav class="navigation">
      <div class="logotype">NewsApp</div>
      <ul class="categories">
        <li class="category-item"><a href="#">Sports</a></li>
        <li class="category-item"><a href="#">Tech</a></li>
        <li class="category-item"><a href="#">Books</a></li>
        <li class="category-item"><a href="#">Art</a></li>
      </ul>
    </nav>
    <div class="search">
      <input type="search" placeholder="Type to search..."/>
    </div>
  </header>
  <div class="wrapper">
    <aside class="sidebar">
      <ul class="sidebar-list">
        <li class="sidebar-item"><i class="fa fa-newspaper-o"></i></li>
        <li class="sidebar-item sb-active"><i class="fa fa-th"></i></li>
        <li class="sidebar-item"><i class="fa fa-picture-o"></i></li>
        <li class="sidebar-item"><i class="fa fa-bell-o"></i></li>
        <li class="sidebar-item"><i class="fa fa-bolt"></i></li>
      </ul>
    </aside>
    <main class="content">
      <div class="feed-grid">
        <div class="card-half wide">
          <div class="card-img"><span class="label"> <i class="fa fa-star"></i></span><img src="https://41.media.tumblr.com/7be0a9c6035a5eaaafaddab95a3d77ae/tumblr_mmp17zInpt1qhfgjbo1_540.jpg" alt="img"/></div>
          <div class="card-text">
            <h4>All outdoor & adventure lovers should follow this guy on instagram</h4>
            <p>Just take a look at a few of his shots and try not to want this in your feed regularly.</p>
          </div>
          <ul class="card-tools">
            <li class="tools-item"><i class="fa fa-heart like"></i><span class="tools-count">543</span></li>
            <li class="tools-item"><i class="fa fa-share share"></i></li>
          </ul>
        </div>
        <div class="card"> <img src="https://40.media.tumblr.com/027d3fdde45d8cb950a74dd070cf8e90/tumblr_nxfo8rG3o81qzleu4_og_540.jpg" alt="img"/>
          <div class="info-center">12 Photos Of A Gorgeously Designed NYC Home</div>
        </div>
        <div class="card"><img src="https://36.media.tumblr.com/1a6bf1c955f5278517f71d50b60ac89d/tumblr_nw46p7NOHH1qkegsbo2_540.jpg" alt="img"/>
          <div class="info-center">Beautiful Yet Simple Warehouse-Inspired Home</div>
        </div>
        <div class="card"><img src="https://41.media.tumblr.com/38033666a5ce5c84a658fd90409f8467/tumblr_nxcmsxVSHs1qkegsbo1_540.jpg" alt="img"/>
          <div class="info-center">Top trends this winter 2016</div>
        </div>
        <div class="card-half wide">
          <div class="card-img"><img src="https://40.media.tumblr.com/tumblr_lzgmkfRJ7U1qb899go1_500.jpg" alt="img"/></div>
          <div class="card-text">
            <h4>History travel to Spain. Photos stunning country</h4>
            <p>Just take a look at a few of his shots and try not to want this in your feed regularly.</p>
          </div>
          <ul class="card-tools">
            <li class="tools-item"><i class="fa fa-heart like"></i><span class="tools-count">133</span></li>
            <li class="tools-item"><i class="fa fa-share share"></i></li>
          </ul>
        </div>
        <div class="card-half">
          <div class="card-img"><img src="https://www.chelseafc.com/content/cfc/en/homepage/news/boilerplate-config/latest-news/2015/11/pre-match-briefing--stoke-city-v-chelsea--part-two/_jcr_content.autoteaser.jpeg" alt="img"/></div>
          <div class="card-text">
            <h4>Pre-Match Briefing: Stoke City v Chelsea</h4>
            <p>We have a tea-time appointment in the Potteries later today.</p>
          </div>
          <ul class="card-tools">
            <li class="tools-item"><i class="fa fa-heart like"></i><span class="tools-count">4533</span></li>
            <li class="tools-item"><i class="fa fa-share share"></i></li>
          </ul>
        </div>
        <div class="card"> <img src="https://41.media.tumblr.com/7be0a9c6035a5eaaafaddab95a3d77ae/tumblr_mmp17zInpt1qhfgjbo1_540.jpg" alt="img"/>
          <div class="info-center">Best 100 memorable sports photos</div>
        </div>
        <div class="card"><img src="https://cdn-images-1.medium.com/max/600/1*wFiuAFruqIUTNU99xpb_zw.gif" alt="img"/>
          <div class="info-center">Long shadow is dead. Welcome Diffuse shadows.</div>
        </div>
        <div class="card"> <img src="https://40.media.tumblr.com/027d3fdde45d8cb950a74dd070cf8e90/tumblr_nxfo8rG3o81qzleu4_og_540.jpg" alt="img"/>
          <div class="info-center">12 Photos Of A Gorgeously Designed NYC Home</div>
        </div>
        <div class="card"><img src="https://40.media.tumblr.com/214255d33d16e6075d674c9cd84d9a6c/tumblr_no7630It9v1qd6rjmo1_540.jpg" alt="img"/>
          <div class="info-center">Christina Schneiderlin: Interview with the artist</div>
        </div>
        <div class="card-half">
          <div class="card-img"><span class="label"> <i class="fa fa-star"></i></span><img src="https://40.media.tumblr.com/682b6eb0bcafb090c26cda164a235f3b/tumblr_n04czvggDF1sv6eyto1_500.jpg" alt="img"/></div>
          <div class="card-text">
            <h4>You just should run</h4>
            <p>Learn how to run can improve your health.</p>
          </div>
          <ul class="card-tools">
            <li class="tools-item"><i class="fa fa-heart like"></i><span class="tools-count">8543</span></li>
            <li class="tools-item"><i class="fa fa-share share"></i></li>
          </ul>
        </div>
      </div>
    </main>
  </div>
`);
  const [css, setCss] = useState(`@import url(https://fonts.googleapis.com/css?family=Raleway:400,500,600,700,300);
  * {
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: "Raleway", sans-serif;
    font-size: 14px;
  }
  
  .wrapper {
    display: flex;
    background-color: pink;
    flex-grow: 1;
  }
  
  header {
    display: flex;
    height: 65px;
    background-color: #ffffff;
    align-items: center;
    justify-content: space-between;
  }
  
  .sidebar {
    min-width: 120px;
    background-color: #1f282f;
  }
  
  .sidebar-list {
    display: flex;
    margin-top: 30px;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
  }
  
  .sidebar-item {
    margin-top: 25px;
    cursor: pointer;
    color: #3a3d46;
    font-size: 24px;
    transition: color 200ms ease;
  }
  .sidebar-item:hover {
    color: #ffffff;
  }
  
  .sb-active {
    color: #ffffff;
  }
  
  .content {
    width: 100%;
    padding: 50px;
    background-color: #e6e6e6;
  }
  
  .feed-grid {
    display: flex;
    max-width: 1170px;
    margin: 0 auto;
    flex-flow: row wrap;
    justify-content: center;
    align-content: flex-start;
  }
  
  .navigation {
    display: flex;
    align-items: center;
  }
  
  .logotype {
    display: flex;
    width: 120px;
    min-width: 120px;
    height: 65px;
    color: #ffffff;
    background-color: #2196f3;
    font-weight: bold;
    align-items: center;
    justify-content: center;
  }
  
  input[type=search] {
    display: flex;
    width: 300px;
    height: 15px;
    margin-right: 20px;
    padding: 10px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    outline: none;
    font-size: 12px;
    justify-content: flex-end;
  }
  
  .categories {
    display: flex;
    margin-left: 45px;
  }
  
  .category-item {
    margin: 0 10px;
  }
  
  .card {
    position: relative;
    width: 320px;
    height: 320px;
    margin: 7px;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px 0px rgba(110, 123, 140, 0.3);
    flex: auto;
  }
  .card img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
       object-fit: cover;
  }
  .card:nth-child(5) {
    flex: 545px;
  }
  
  .card-half {
    display: flex;
    width: 320px;
    height: 320px;
    margin: 7px;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px 0px rgba(110, 123, 140, 0.3);
    flex-flow: column wrap;
    justify-content: flex-end;
    flex: auto;
  }
  
  .wide {
    width: 480px;
  }
  
  .card-img {
    position: relative;
    height: 160px;
    flex: auto;
  }
  .card-img img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
       object-fit: cover;
  }
  
  .label {
    position: absolute;
    top: 20px;
    right: 20px;
    color: #fdd701;
    font-size: 20px;
  }
  
  .card-text {
    padding: 0 20px;
  }
  .card-text p {
    margin: 0;
    padding: 0;
    color: #888888;
  }
  
  .card-tools {
    display: flex;
    height: 50px;
    padding: 15px 20px;
    flex-flow: row wrap;
    align-items: flex-end;
  }
  
  .tools-item {
    margin-right: 20px;
    cursor: pointer;
    transition: opacity 200ms ease;
  }
  .tools-item:hover {
    opacity: 0.7;
  }
  
  .tools-count {
    padding: 0 5px;
    color: #888888;
    font-size: 14px;
  }
  
  .share {
    color: #333333;
  }
  
  .like {
    color: #df2324;
  }
  
  .info-center {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    padding: 0 10px;
    text-align: center;
    color: white;
    background: rgba(0, 0, 0, 0.3);
    text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    font-size: 24px;
    font-weight: bold;
    justify-content: center;
    align-items: center;
  }`);
  const [js, setJs] = useState(`/*Let's add some JS*/`);

  const [src, setSrc] = useState("")
  useEffect(()=>{
    setSrc(html + "<style>" + css + "</style>" + "<script>" + js + "</script>")
  }, [])
  useEffect(()=> {
    const timeOut = setTimeout(() => {setSrc(html + "<style>" + css + "</style>" + "<script>" + js + "</script>")}
    ,4000)
    return () => {
      clearTimeout(timeOut);
    };
  },[html, css, js])
  const onResize = (e) => {
    if (e.domElement) {
      e.domElement.classList.add("resizing");
    }
  };
  const onStopResize = (e) => {
    if (e.domElement) {
      e.domElement.classList.remove("resizing");
    }
  };
  const resizeProps = {
    onResize,
    onStopResize,
  };

  return (
    <EditorLayout>
      <ReflexContainer orientation="horizontal">
        <ReflexElement>
          <ReflexContainer orientation="vertical">
            <ReflexElement
              flex={0.5}
              renderOnResize
              propagateDimensions
              {...resizeProps}
            >
              <SolutionLayout
                language="html"
                solution={html}
                onChange={setHtml}
              />
            </ReflexElement>
            <ReflexSplitter className="splitter-vertical" {...resizeProps} />
            <ReflexElement
              flex={0.5}
              renderOnResize
              propagateDimensions
              {...resizeProps}
            >
              <SolutionLayout language="css" solution={css} onChange={setCss} />
            </ReflexElement>
            <ReflexSplitter className="splitter-vertical" {...resizeProps} />
            <ReflexElement
              flex={0.5}
              renderOnResize
              propagateDimensions
              {...resizeProps}
            >
              <SolutionLayout
                language="javascript"
                solution={js}
                onChange={setJs}
              />
            </ReflexElement>
          </ReflexContainer>
        </ReflexElement>
      </ReflexContainer>
      <iframe
        srcDoc={src}
        style={{
          marginTop: '8px',
          zIndex: '-1',
          border: "none",
          marginLeft: "-1vw",
          height: "41vh",
          width: "99.5vw",
        }}
      ></iframe>
    </EditorLayout>
  );
};

export default EditorMain;
