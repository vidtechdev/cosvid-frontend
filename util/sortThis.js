const sortThis = (data) => {
  let sorted = [];
  data.forEach((d) => sorted.push(d));

  sorted = sorted.sort(function (a, b) {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });
  return sorted;
};

export default sortThis;
