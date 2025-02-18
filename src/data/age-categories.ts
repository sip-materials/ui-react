const ageCategories: Array<{
  start: number;
  end: number;
  title: string;
  title_jp: string;
}> = [
  {
    start: Number.NEGATIVE_INFINITY,
    end: 17,
    title: "Under 18",
    title_jp: ""
  },
  {
    start: 18,
    end: 22,
    title: "18 - 22",
    title_jp: ""
  },
  {
    start: 23,
    end: 30,
    title: "23 - 30",
    title_jp: ""
  },
  {
    start: 31,
    end: 40,
    title: "31 - 40",
    title_jp: ""
  },
  {
    start: 41,
    end: 50,
    title: "41 - 50",
    title_jp: ""
  },
  {
    start: 51,
    end: Number.POSITIVE_INFINITY,
    title: "51 +",
    title_jp: ""
  },
];
export default ageCategories;