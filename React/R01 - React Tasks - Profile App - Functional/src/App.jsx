import { Fragment } from "react";
import { Article } from "./components/Article";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import './resources/css/style.css';

// export default App = () => {
//     return(
//         <Fragment>
//             <header>
//             <h1>1920 x 400</h1>
//             </header>
//             <section>
//                 <aside> 
//                     <div id="aside-avatar"></div>
//                     <article>
//                         <span>User Name</span>
//                         <span>MERN Full Stack Developer</span>
//                         <span>my-email@mern-web.dev</span>
//                         <span>+0970-599-1234-567</span>
//                     </article>
//                 </aside>
//                 <article class="class-name">
//                     <span>User Name</span>
//                     <hr />
//                     <p id="article-paragraph">
//                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//                     </p>
//                     <hr />
//                     <article>
//                         <p>
//                             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//                         </p>
//                         <img src={MainImage} alt="This is an image" />
//                     </article>
//                 </article>
//             </section>
//         </Fragment>
//     );
// };


export default function App(){
    return(
        <Fragment>
            <Header />
            <section>
                <SideMenu />
                <Article />
            </section>
        </Fragment>
    );
};

// export const App = () => {
//     return(
//         <Fragment>
//             <header>
//             <h1>1920 x 400</h1>
//             </header>
//             <section>
//                 <aside> 
//                     <div id="aside-avatar"></div>
//                     <article>
//                         <span>User Name</span>
//                         <span>MERN Full Stack Developer</span>
//                         <span>my-email@mern-web.dev</span>
//                         <span>+0970-599-1234-567</span>
//                     </article>
//                 </aside>
//                 <article class="class-name">
//                     <span>User Name</span>
//                     <hr />
//                     <p id="article-paragraph">
//                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//                     </p>
//                     <hr />
//                     <article>
//                         <p>
//                             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//                         </p>
//                         <img src={MainImage} alt="This is an image" />
//                     </article>
//                 </article>
//             </section>
//         </Fragment>
//     );
// };

// export const TestApp = () => {
//     return(
//         <h1>TestApp component</h1>
//     );
// }

// let App = () => {
//     return(
//         <Fragment>
//             <header>
//             <h1>1920 x 400</h1>
//             </header>
//             <section>
//                 <aside> 
//                     <div id="aside-avatar"></div>
//                     <article>
//                         <span>User Name</span>
//                         <span>MERN Full Stack Developer</span>
//                         <span>my-email@mern-web.dev</span>
//                         <span>+0970-599-1234-567</span>
//                     </article>
//                 </aside>
//                 <article class="class-name">
//                     <span>User Name</span>
//                     <hr />
//                     <p id="article-paragraph">
//                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//                     </p>
//                     <hr />
//                     <article>
//                         <p>
//                             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//                         </p>
//                         <img src={MainImage} alt="This is an image" />
//                     </article>
//                 </article>
//             </section>
//         </Fragment>
//     );
// }
// export default App;

// function App(){
//     return (
//     <Fragment>
//         <header>
//             <h1>1920 x 400</h1>
//         </header>
//         <section>
//             <aside> 
//                 <div id="aside-avatar"></div>
//                 <article>
//                     <span>User Name</span>
//                     <span>MERN Full Stack Developer</span>
//                     <span>my-email@mern-web.dev</span>
//                     <span>+0970-599-1234-567</span>
//                 </article>
//             </aside>
//             <article className="class-name">
//                 <span>User Name</span>
//                 <hr />
//                 <p id="article-paragraph">
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//                 </p>
//                 <hr />
//                 <article>
//                     <p>
//                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//                     </p>
//                     <img src={MainImage} alt="This is an image" />
//                 </article>
//             </article>
//         </section>
//     </Fragment>
//     )
// }

// export default App;