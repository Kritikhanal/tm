import axios from "axios";

export const fetchSynonyms = async (word) => {
  try {
    const response = await axios.get(
      `https://api.datamuse.com/words?rel_syn=${word}`
    );
    return response.data.map((item) => item.word);
  } catch (error) {
    console.error("Error fetching synonyms:", error);
    return [];
  }
};
