"use strict";

// Set the target date in UTC
// const targetDate = new Date("2024-12-22T08:25:00Z").getTime(); // 10:25 AM Amsterdam time converted to UTC
const targetDate = new Date("2024-12-16T22:30:00Z").getTime(); // 10:25 AM Amsterdam time converted to UTC
// const meetingDate = new Date("December 23, 2024 20:45:00 GMT+10").getTime(); // 20:45 Bristbane time
const meetingDate = new Date("December 16, 2024 14:55:00 GMT+10").getTime();

// Update the countdown every second
const countdownInterval = setInterval(function () {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;
  const timeLeftMeet = meetingDate - now;

  // 380352614
  if (timeLeft <= 0 && timeLeftMeet <= 0) {
    document.getElementById("container").innerHTML = "🧑🏼‍❤️‍💋‍👩🏽";
    document.getElementById("container").classList.add("big-icon");
    clearTimeout(countdownInterval);
    return;
  }

  if (timeLeft <= 380352614) {
    document.getElementById("flight_count").innerHTML = `
              <p>🌍</p>
              <p>On</p>
              <p>✈️</p>
              <p>my</p>
              <p>💕</p>
              <p>way</p>
              <p>🌏</p>
          `;
    document.querySelector(".emoji-meet").classList.add("hidden");
    document.querySelector("#meeting").classList.remove("meeting_count");
    document.querySelector("#meeting").classList.add("meeting_count--less");
  } else {
    calculateLeftTime(timeLeft);
  }

  calculateLeftTime(timeLeftMeet, false);

  setTextVisible();
}, 1000);

const calculateLeftTime = function (timeLeft, flight = true) {
  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  if (days > 0) {
    document.querySelector(
      `${flight ? "#countdown-day" : "#countdown-day-meeting"}`
    ).innerText = `${days}`;
  } else {
    document.querySelector(
      `${flight ? "#countdown-day" : "#countdown-day-meeting"}`
    ).innerText = null;
    document
      .querySelectorAll(
        `${flight ? ".info__placement" : ".info__placement-meeting"}`
      )[0]
      .classList.add("hidden");
  }

  if (hours > 0) {
    document.querySelector(
      `${flight ? "#countdown-hours" : "#countdown-hours-meeting"}`
    ).innerText = `${hours}`;
  } else {
    if (days <= 0 && hours <= 0) {
      document.querySelector(
        `${flight ? "#countdown-hours" : "#countdown-hours-meeting"}`
      ).innerText = null;
      document
        .querySelectorAll(
          `${flight ? ".info__placement" : ".info__placement-meeting"}`
        )[1]
        .classList.add("hidden");
    } else {
      document.querySelector(
        `${flight ? "#countdown-hours" : "#countdown-hours-meeting"}`
      ).innerText = `0`;
    }
  }

  if (minutes > 0) {
    document.querySelector(
      `${flight ? "#countdown-min" : "#countdown-min-meeting"}`
    ).innerText = `${minutes}`;
  } else {
    if (days <= 0 && hours <= 0 && minutes <= 0) {
      document.querySelector(
        `${flight ? "#countdown-min" : "#countdown-min-meeting"}`
      ).innerText = null;
      document
        .querySelectorAll(
          `${flight ? ".info__placement" : ".info__placement-meeting"}`
        )[2]
        .classList.add("hidden");
    } else {
      document.querySelector(
        `${flight ? "#countdown-min" : "#countdown-min-meeting"}`
      ).innerText = `0`;
    }
  }

  if (seconds >= 0) {
    if (seconds < 10) {
      document.querySelector(
        `${flight ? "#countdown-sec" : "#countdown-sec-meeting"}`
      ).innerText = `0${seconds}`;
    } else {
      document.querySelector(
        `${flight ? "#countdown-sec" : "#countdown-sec-meeting"}`
      ).innerText = `${seconds}`;
    }
  } else {
    document
      .querySelectorAll(
        `${flight ? ".info__placement" : ".info__placement-meeting"}`
      )[3]
      .classList.add("hidden");
  }
};

const setTextVisible = function () {
  if (document.querySelector("#emoji-plane")) {
    document.querySelector("#emoji-plane").innerText = "✈️";
    document.querySelectorAll(".seen_informtion")[0].innerText = "days";
    document.querySelectorAll(".seen_informtion")[1].innerText = "hours";
    document.querySelectorAll(".seen_informtion")[2].innerText = "min";
    document.querySelectorAll(".seen_informtion")[3].innerText = "sec";
  }
  document.querySelector("#emoji-meet").innerText = "🧑🏼‍❤️‍💋‍👩🏽";
  document.querySelectorAll(".seen_informtion-meeting")[0].innerText = "days";
  document.querySelectorAll(".seen_informtion-meeting")[1].innerText = "hours";
  document.querySelectorAll(".seen_informtion-meeting")[2].innerText = "min";
  document.querySelectorAll(".seen_informtion-meeting")[3].innerText = "sec";
};
