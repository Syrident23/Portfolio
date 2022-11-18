import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    vscode,
    git,
    github,
    npm,
    postman,
    Next,
    Node,
    Ts,
    Sql,
    Mongo,
    
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="html" alt="" />
        <img src={css} title="CSS" alt="" />
        <img src={js} title="JavaScript" alt="" />
        <img src={Ts} title='TypeScript' alt='' />
        <img src={react} title="React" alt="" />
        <img src={Next} title='Next.js' alt='' />
        <img src={redux} title="Redux" alt="" />
        <img src={Node} title='Node' alt='' />
        <img src={Sql} title='SQL' alt='' /> 
        <img src={Mongo} title='MongoDB' alt='' />
        
      </section>
      <section>
        <h1 className="text-2xl pt-10 bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        <img src={npm} title="NPM" alt="NPM" />
        <img src={postman} title="Postman" alt="Postman" />
      </section>
    </main>
  );
}

export default Technologies;