
{// 1//
    const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const body = document.body;
let intervalID = null;
let timerIsActive = false;

startBtn.addEventListener("click", () => {
  if (timerIsActive) return;
  timerIsActive = true;
  intervalID = setInterval(changeColor, 1 * 1000);
});
stopBtn.addEventListener("click", () => {
  timerIsActive = false;
  clearInterval(intervalID);
});

const changeColor = () => {
  const randomIntegerFromInterval = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const colors = [
    "#D2D2D2",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548",
  ];

  const showColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  body.style.backgroundColor = showColor;
  startBtn.setAttribute("disabled", "disabled");
};
}
// =======================================


{// "2-1"
  const delay = (ms) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(ms);
      }, ms);
    });
  };
  const logger = (time) => console.log(`Resolved after ${time}ms`);

  delay(2000).then(logger); // Resolved after 2000ms
  delay(1000).then(logger); // Resolved after 1000ms
  delay(1500).then(logger); // Resolved after 1500ms
}
// =======================================


{// '2-2'
const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];
const toggleUserState = (allUsers, userName) => {
  return new Promise((resolve) => {
    const updatedUsers = allUsers.map((user) =>
      user.name === userName ? { ...user, active: !user.active } : user
    );
    resolve(updatedUsers);
  });
};
const logger = (updatedUsers) => console.table(updatedUsers);

toggleUserState(users, "Mango").then(logger);
toggleUserState(users, "Lux").then(logger);
}
// =======================================

{// '2-3'
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = ({ id }) => {
  const delay = randomIntegerFromInterval(200, 500);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;
      canProcess && resolve({ id, time: delay });
      !canProcess && reject({ id, time: delay });
    }, delay);
  });
};

const logSuccess = ({ id, time }) => {
  console.warn(`Transaction ${id} processed in ${time}ms`);
};

const logError = ({ id, time}) => {
  console.error(
    `Error processing transaction ${id}. Please try again later. time: ${time}ms`
  );
};

makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
}
// =======================================
