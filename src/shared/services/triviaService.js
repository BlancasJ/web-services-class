const REQUEST_URL = "https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=multiple";

export const fetchQuestions = async () => {
  return fetch(REQUEST_URL)
  .then((response) => response.json())
  .then((data) => data["results"])
  .catch((error) => console.log(error));
}
