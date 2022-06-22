const input = [0,10,1,9,0,6,7,8,9];

//--------------------------------

const getZeroIndexes = (massive) => {
    const res = [];
    for (let i = 0; i < massive.length; i++) {
        if (!massive[i]) {
            res.push(i);
        }
    }
    return res;
};

const getIntervals = (zeroIndexes, length) => {
    const firstZero = zeroIndexes[0];
    const lastZero = zeroIndexes[zeroIndexes.length - 1];
    const res = [];
    if (firstZero !== 0) {
        res.push({ start: 0, finish: firstZero - 1 });
    }
    for (let i = 0; i < zeroIndexes.length - 1; i++) {
        const start = zeroIndexes[i] + 1;
        const finish = zeroIndexes[i + 1] - 1;
        res.push({ start, finish });
    }
    if (lastZero !== length - 1) {
         res.push({ start: lastZero + 1, finish: length -1 });
    }
    return res;
}


const getIndexesBetween = (start, end) => {
    const res = [];
    for (let i = start; i <= end; i++) {
        const fromStart = i - start + 1;
        const formEnd = end - i + 1;
        res.push(Math.min(fromStart, formEnd));
    }
    return res;
};

//------------------------------------



getIntervals(getZeroIndexes(input), input.length).forEach(interval => {

    console.log(getIndexesBetween(interval.start, interval.finish));

});