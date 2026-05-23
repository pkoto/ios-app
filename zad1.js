const user = {
  imie: "Jan",
  nazwisko: "Kowalski",
  miasto: "Katowice",
  wiek: 21,
  kierunek: "informatyka",
  hobby: "fotografia" //wlasne pole
};

console.log(`${user.imie} ${user.nazwisko}`);
console.log(`Użytkownik pochodzi z miasta ${user.miasto} i studiuje ${user.kierunek}.`);

if (user.wiek >= 18) {
  console.log("Użytkownik jest pełnoletni");
} else {
  console.log("Użytkownik nie jest pełnoletni");
}

console.log(`W wolnym czasie ${user.imie} interesuje się: ${user.hobby}.`);
