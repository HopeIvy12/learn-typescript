
type MatchingPairs ={
    question: string;
    answer:string;
    options:string[];
}

export const matchingPairs: MatchingPairs[] = [
    {
      question:"/question1-vanillajs.png",
      answer: "/question1-correct.png",
      options: [
        "/question1-correct.png",
        "/question1-incorrect.png",
        "/question1-incorrect2.png",
        "/question1-incorrect3.png",
      ],
    },
    {
      question:"/question2-vanillajs.png",
      answer: "/question2-correct.png",
      options: [
        "/question2-incorrect3.png",
        "/question2-incorrect1.png",
        "/question2-incorrect2.png",
        "/question2-correct.png"
      ],
    },
    {
      question:"/question3-vanillajs.png",
      answer: "/question3-correct.png",
      options: [
        "/question3-correct.png",
        "/question3-incorrect1.png",
        "/question3-incorrect2.png",
        "/question3-incorrect3.png",
      ],
    },
    {
      question:"/question4-vanillajs.png",
      answer: "/question4-correct.png",
      options: [
        "/question4-incorrect2.png",
        "/question4-incorrect1.png",
        "/question4-correct.png",
        "/question4-incorrect3.png",
      ],
    },
  ]
