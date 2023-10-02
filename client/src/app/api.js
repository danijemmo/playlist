const BASE_URL = "http://localhost:3000/songs";

//get songs
export const getSongs = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
};

//create songs

export const createSong = async (song) => {
  const response = await fetch(`${BASE_URL}/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(song),
  });
  return await response.json();
};

// delete employee
export const deleteSong = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};
