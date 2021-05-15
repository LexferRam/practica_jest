const chunkArray = (arr, len) => {
  //init chunk arr
  const chunkedArr = [];

  //loop througharr
  arr.forEach((val) => {
    //get last element
    const last = chunkedArr[chunkedArr.length - 1];

    //check if last and last lenth is equal to the chunk len
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
};

module.exports = chunkArray;
