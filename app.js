const notEmptyResults = results.filter(
    ([timeInMonths, avgTimePerWeek]) =>
        typeof timeInMonths !== "undefined" &&
        typeof avgTimePerWeek !== "undefined"
);

const resultsInMonths = notEmptyResults.map((res) => res[0]);

const weeksInAYear = 52;
const monthsInAYear = 12;

const resultsDTO = notEmptyResults.map(([timeInMonths, avgTimePerWeek]) => {
    const weeksSpentLearning = timeInMonths * (weeksInAYear / monthsInAYear);
    const totalTimeInHours = Math.round(weeksSpentLearning * avgTimePerWeek);

    return {
        timeInMonths,
        avgTimePerWeek,
        totalTimeInHours,
    };
});

const avgTimePerWeek = resultsDTO.map((r) => r.avgTimePerWeek);

const resultsTotalHours = resultsDTO.map((r) => r.totalTimeInHours);

const sortedResultsDTO = resultsDTO.sort(
    (a, b) => a.totalTimeInHours - b.totalTimeInHours
);

const sortedResultsDTOInHours = sortedResultsDTO.map((r) => r.totalTimeInHours);

console.log(sortedResultsDTO);

const sortedResultsWithoutMargin = sortedResultsDTO.slice(
    3,
    sortedResultsDTO.length - 3
);

const avgTimeInHours = Math.round(
    sortedResultsWithoutMargin.reduce((p, c) => c.totalTimeInHours + p, 0) /
        sortedResultsWithoutMargin.length
);

const avgLearningTime = Math.round(
    sortedResultsWithoutMargin.reduce((p, c) => c.avgTimePerWeek + p, 0) /
        sortedResultsWithoutMargin.length
);

const avgAge = Math.round(
    sortedResultsWithoutMargin.reduce((p, c) => c.avgTimePerWeek + p, 0) /
        sortedResultsWithoutMargin.length
);

console.log("learning: ", avgLearningTime);

console.log(avgTimeInHours);

const avgTimeWhenLearning20hrs = avgTimeInHours / 20;

console.log(avgTimeWhenLearning20hrs);

const avgMonthsToGetJob =
    avgTimeWhenLearning20hrs / (weeksInAYear / monthsInAYear);

console.log(avgMonthsToGetJob);
