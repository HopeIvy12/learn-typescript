"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { matchingPairs } from "@/app/components/Questions";
import Image from "next/image"; // Import Image for optimized loading

export default function Game() {
  const [currentRound, setCurrentRound] = useState(0);
  const [score, setScore] = useState(0);
  const [lessonIndex, setLessonIndex] = useState(0);

  const lessons = [
    {
      title: "Lesson 1: Introduction to Static Typing",
      content:
        "In TypeScript, static typing means that the type of a variable is checked before the program runs. This helps find mistakes early and makes the code easier to understand. TypeScript has three ways to define types: explicit typing (where you set the type yourself), implicit typing (where TypeScript guesses the type based on the value), and `any` (which lets you avoid strict types for flexibility).",
      exampleTitle: "Examples of Explicit Typing",
      examples: [
        "let age: number = 25; age = 30; // ✅ Valid",
        'let age: number = 25; age = "twenty-five"; // ❌ Error! TypeScript catches this mistake',
      ],
    },
    {
      title: "Lesson 2: Interfaces in TypeScript",
      content:
        "Interfaces let you define what kind of object you're working with. They help make sure your objects have the right properties and types. You can also extend or use interfaces to keep your code clean and organized.",
      exampleTitle: "Interface Examples",
      examples: [
        `interface Person { name: string; age: number;}`,
        ` const user: Person = { name: "Alice", age: 25 }; // ✅ This works!`,
      ],
    },
    {
      title: "Lesson 3: Classes in TypeScript",
      content:
        "Classes in TypeScript are like templates for creating objects. You can add properties (like `name` and `age`) and methods (functions that belong to the object). TypeScript adds types to make sure your properties and methods are used correctly.",
      exampleTitle: "Class Examples",
      examples: [
        `class Person { 
          name: string; 
          age: number; 
          
          constructor(name: string, age: number) { 
            this.name = name; 
            this.age = age; 
          } 
          
          greet() { 
            return \`Hello, my name is \${this.name} and I am \${this.age} years old.\`; 
          } 
        }`,
        `const person = new Person("Alice", 30);`,
        `console.log(person.greet()); // ✅ "Hello, my name is Alice and I am 30 years old."`,
      ],
    },
    {
      title: "Lesson 4: Type Aliases in TypeScript",
      content:
        "Type aliases let you create a new name for a type. You can use type aliases for simple types, objects, or even combinations of types. They make your code easier to read and use.",
      exampleTitle: "Type Alias Examples",
      examples: [
        `type ID = string | number;`,
        `const userID: ID = 123; // ✅ Valid`,
        `const productID: ID = "abc"; // ✅ Valid`,
        `const invalidID: ID = true; // ❌ Error!`,
      ],
    },
  ];

  const currentPair = matchingPairs[currentRound];
  const currentLesson = lessons[lessonIndex];
  const router = useRouter();

  const handleChoice = (choice: string) => {
    if (choice === currentPair.answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentRound < matchingPairs.length - 1) {
        setCurrentRound(currentRound + 1);
        setLessonIndex((lessonIndex + 1) % lessons.length); // Cycle through lessons
      } else {
        alert(`Great job! Your score: ${score + (choice === currentPair.answer ? 1 : 0)}`);
        router.push("/"); // Redirect to home page
      }
    }, 3000);
  };

  return (
    <div className="game-container">
      
      <div className="lesson-container">
        <h2>{currentLesson.title}</h2>
        <p>{currentLesson.content}</p>
        <p><strong>{currentLesson.exampleTitle}</strong></p>
        <p className="example">{currentLesson.examples}</p>
        <p>
          Round {currentRound + 1} / {matchingPairs.length}
        </p>
      </div>

      <div className="example">
        <Image className="question-image" src={currentPair.question} alt="JavaScript Element" width={700} height={400}  quality={85} />
      </div>

      <div className="options-container">
        {currentPair.options.map((option, index) => (
          <button key={index} className="option-button" onClick={() => handleChoice(option)}>
            <Image src={option} alt={`Option ${index + 1}`} width={650} height={350} quality={85}/>
          </button>
        ))}
      </div>
      <p className="score">Score: {score}</p>
    </div>
  );
}
