// import Image from "next/image";
//This imports Next.js's built-in <Image> component, which optimizes images automatically for better performance.
"use client"
import Link from "next/link"
// import{ useRouter } from "next/navigation";
import { useRouter } from "next/navigation";
import "./globals.css"

export default function Home() {
const router = useRouter();

function goToTestPage(){
  router.push("/testQuestions");
}

return (
    <main>
      <div className="container">
        <h1>Learn TypeScript with me!</h1>
        <section>
        <p>JavaScript is a flexible language, but its lack of strict rules can lead to unexpected errors that only appear when your code runs. TypeScript fixes this problem by adding static type checking, helping you catch mistakes before your code even runs.</p>
</section>
<section><h2>What is TypeScript?</h2>
<p>Javascript is loosely typed: Which means it does not strictly enforce data types.
Typescript is strongly typed: Whereas typescript enforces strict rules about types.</p>
<h3>TypeScript is a superset of JavaScript. A superset of JavaScript means a language that extends JavaScript by adding extra features while still being compatible with regular JavaScript code.</h3>
</section>

<section>
<h2>What are Typescripts main features?</h2>
<ul>
<li>✅ Catch Errors Early: TypeScript checks your code before it runs, preventing common mistakes.</li>
<li>✅ Better Autocompletion & Hints: Your editor can suggest functions, properties, and expected values.</li>
<li>✅ Custom Types: Define your own types to make your code clearer and more maintainable.</li>
</ul></section>
<section>
<h2>Learning TypeScript doesn’t have to be boring!</h2><p>First, we’ll break down the basics with short, simple explanations. Then, you’ll test your knowledge with an interactive matching game!</p>
<p>🧩 How It Works:</p>
<ol>
<li>1️⃣ Read a quick explanation of a TypeScript concept.</li>
<li>2️⃣ Play a matching game, where you pair Vanilla JavaScript code with its TypeScript equivalent.</li>
<li>3️⃣ See the results! Play as many times are you would like!</li>
</ol></section>
<p>By the end, you’ll have a stronger grasp of static types, error prevention, and TypeScript’s key features!</p>

        <div className="button-box">
          <Link href="/testQuestions">
            <button className="start-button" onClick={goToTestPage}>Start Testing</button>
          </Link>
        </div>
      </div>
    </main>
  )
}
