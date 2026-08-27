/**
 * An online exam has students and questions.
 * Tasks:
 * 1. Calculate each student's score (each correct answer get 25 points)
 * 2. Determine each student's correct answer, exp: [{student:"Andi", correct:0, wrong: 4}]
 * 3. Calculate the average score for each category.
 * 4. Generate final exam analytics
 * expeced result: {
        totalStudents: 3,
        averageScore: 66.67,
        highestScore: 100,
        lowestScore: 50,
        passedStudents: 1,
        failedStudents: 2,
        passRate: 33.33
    }
 */
const questions = [
    {
        id: 1,
        question: "What is TypeScript?",
        correctAnswer: "A",
        category: "TypeScript",
    },
    {
        id: 2,
        question: "Which method transforms an array?",
        correctAnswer: "B",
        category: "Array",
    },
    {
        id: 3,
        question: "Which method filters an array?",
        correctAnswer: "C",
        category: "Array",
    },
    {
        id: 4,
        question: "What does reduce() do?",
        correctAnswer: "D",
        category: "Array",
    },
];

const submissions = [
    {
        student: "Andi",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Budi",
        answers: [
            { questionId: 1, answer: "B" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "A" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Citra",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "C" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "B" },
        ],
    },
];

const combinedArray = submissions.map((data) => {
    const question = data.answers.map((info) => {
        const questionDetail = questions.find((ans) => ans.id === info.questionId)

        return {
            ...info,
            questionDetail: questionDetail
        }
    })

    return {
        ...data,
        answerKeys: question
    }
})

const detailedArray = combinedArray.map((data) => {
    let totalScore = 0
    const correct = data.answerKeys.reduce((total, info) => {
        const isCorrect = info.answer === info.questionDetail?.correctAnswer;
        isCorrect ? totalScore += 1 : totalScore
        return isCorrect ? total + 1 : total;
    }, 0);

    const incorrect = data.answerKeys.length - correct

    return {
        ...data,
        totalCorrect: correct,
        totalIncorrect: incorrect,
        totalScore: totalScore * 25,
    }
})

console.log(`\nTask 1`)
console.table(detailedArray, ['student', 'totalScore'])

console.log(`\nTask 2`)
console.table(detailedArray, ['student', 'totalCorrect', 'totalIncorrect'])

console.log(`\nTask 3`);
// const categories = [...new Set(questions.map(q => q.category))];

// const categoryAverages = categories.map((category) => {
//     let totalCategoryPoints = 0;
//     detailedArray.forEach((student) => {
//         student.answerKeys.forEach((ans) => {
//             if (ans.questionDetail?.category === category && ans.answer === ans.questionDetail?.correctAnswer) {
//                 totalCategoryPoints += 25;
//             }
//         });
//     });

//     // const totalPossiblePoints = categoriesInfo[category].maxPoints * submissions.length;
//     // const averagePercentage = (totalCategoryPoints / totalPossiblePoints) * 100;

//     return {
//         category: category,
//         averageScore: totalCategoryPoints / submissions.length
//     };
// });

// console.table(categoryAverages);


