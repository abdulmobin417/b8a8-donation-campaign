const getDonateList = () => {
  const donated = localStorage.getItem("donate-list");
  if (donated) {
    return JSON.parse(donated);
  }
  return [];
};

const saveDonateList = (id) => {
  const donated = getDonateList();

  const exists = donated.find((product) => product[0] === id);
  if (exists) {
    for (const item of donated) {
      if (item[0] === id) {
        item[1] = item[1] + 1;
      }
    }
  } else {
    donated.push([id, 1]);
  }
  localStorage.setItem("donate-list", JSON.stringify(donated));
};

export { getDonateList, saveDonateList };
