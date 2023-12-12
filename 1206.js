window.onload = function () {
  setInterval(time, 1000);
};

function time() {
  let date = new Date();

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let dayOfWeek = date.getDay(); // 获取星期几

  let daysOfWeekArray = ["日", "一", "二", "三", "四", "五", "六"];
  let dayOfWeekString = daysOfWeekArray[dayOfWeek];

  let time = `${year}年 ${month}月 ${day}日 星期${dayOfWeekString} ${hour}时 ${minutes}分 ${seconds}秒 `;
  document.getElementById("time").innerHTML = time;
}
