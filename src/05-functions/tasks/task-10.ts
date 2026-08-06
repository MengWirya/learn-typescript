/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

const enrollments = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

function calculatesReport() {
    const totalEnrollment = enrollments.length;
    let CompletedEnrollment = 0;
    let IncompleteEnrollment = 0;
    let totalStudentPassed = 0;
    let courseTypescript: number[] = []
    let courseDatabase: number[] = []
    let courseBackend: number[] = []

    enrollments.forEach((enrollment) => {
        enrollment.completed ? CompletedEnrollment++ : IncompleteEnrollment++;
        enrollment.score >= 75 ? totalStudentPassed++ : totalStudentPassed;
        enrollment.course === "TypeScript" ? courseTypescript.push(enrollment.score) : enrollment.course === "Database" ? courseDatabase.push(enrollment.score) : courseBackend.push(enrollment.score)
    });
    const completedPercentage = CompletedEnrollment / totalEnrollment;

    const allScore = enrollments.map(enrollment => enrollment.score || 0);
    const highestScore = Math.max(...allScore);
    const lowestScore = Math.min(...allScore);
    const totalScore = allScore.reduce((sum, score) => sum + score, 0);
    const averageScore = totalScore / totalEnrollment;
    const totalTSStudent = courseTypescript.length
    const totalDatabaseStudent = courseDatabase.length
    const totalBackendStudent = courseBackend.length
    const totalTSScore = courseTypescript.reduce((sum, score) => sum + score, 0);
    const totalDatabaseScore = courseDatabase.reduce((sum, score) => sum + score, 0);
    const totalBackendScore = courseBackend.reduce((sum, score) => sum + score, 0);
    const averageTS = totalTSScore / totalTSStudent
    const averageDatabase = totalDatabaseScore / totalDatabaseStudent
    const averageBackend = totalBackendScore / totalBackendStudent
    


    return {
        totalEnrollment,
        CompletedEnrollment,
        IncompleteEnrollment,
        completedPercentage,
        highestScore,
        lowestScore,
        totalScore,
        averageScore,
        totalStudentPassed,
        totalTSStudent,
        totalDatabaseStudent,
        totalBackendStudent,
        averageTS,
        averageDatabase,
        averageBackend
    };
}

function printTable() {
    console.table(calculatesReport())
}

printTable()