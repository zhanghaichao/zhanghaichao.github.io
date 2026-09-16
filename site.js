"use strict";
const projects = {
  where: { name:"WhereDidIPutIt?", category:"日常工具 / ORGANIZE", icon:"where-icon.png", description:"为那些总是忘记放在哪里的东西，建立一份自己的收纳记录。拍照、写下位置，需要时再搜索。", features:["通过照片、名称、备注和存放位置记录物品。","搜索物品，按自己的习惯组织家里的收纳位置。","物品记录保存在设备本地，导出和分享由你选择。"], policy:"where-did-i-put-it-privacy/" },
  mint: { name:"Mint · 汽车突围", category:"轻松游戏 / PUZZLE", icon:"mint-icon.png", description:"欢迎来到薄荷小城。移动棋盘上的汽车，为小红车腾出一条驶向出口的路。没有倒计时，按照自己的节奏慢慢解开。", features:["横向与纵向移动车辆，在 6 × 6 棋盘上寻找出口。","99 个关卡，支持撤销与提示，挑战更少的步数。","支持简体中文、繁体中文与 English，进度保存在本地。"], policy:"mint-unblock-car-puzzle/privacy.html", site:"mint-unblock-car-puzzle/" },
  memory: { name:"Memory Camera", category:"影像记录 / CAMERA", icon:"memory-icon.png", description:"从胶片的温暖，到早期数码的怀旧。选择一种相机年代，拍下此刻，或让已有照片有一种不同的质感。", features:["1986 至 2012 年间的八种相机风格。","拍摄新照片，或通过系统照片选择器导入照片。","照片效果在设备上处理，可对比、保存或主动分享。"], policy:"memory-camera-privacy/" },
  printfit: { name:"PrintFit", category:"日常工具 / PHOTO LAYOUT", icon:"printfit-icon.png", description:"把选中的照片排成合适的版式，整理成可以保存、分享或打印的作品。从屏幕到纸面，让这一步更简单。", features:["照片与排版项目保存在设备上，便于继续编辑。","由你选择导出、保存、分享或调用打印服务。","可选 Pro 功能通过 Google Play 一次性购买。"], policy:"printfit-privacy/" },
  dayframe: { name:"Dayframe", category:"影像记录 / PHOTO DIARY", icon:"dayframe-icon.png", description:"用照片和文字，把日子里的小片段收集起来。不必每一天都很特别，值得留下的，也可以只是普通的一刻。", features:["选择自己的照片，配上文字，制作个人照片日记。","通过日历、桌面小组件与海报回看记忆。","照片与记录在设备上处理，分享由你决定。"], policy:"dayframe-privacy/" },
  cargo: { name:"Cargo Loop", category:"轻松游戏 / BAGGAGE SORT", icon:"cargo-icon.png", description:"行李在传送带上循环前进，飞机等着装载。观察颜色，安排顺序，让每一件行李都找到合适的去处。", features:["围绕行李分拣与装载的关卡玩法。","按自己的进度挑战，关卡进度与偏好保存在设备上。","支持离线游玩，可设置音乐、音效、振动与语言。"], policy:"cargo-loop-privacy/" }
};
const filters = document.querySelector(".filters");
filters.hidden = false;
filters.addEventListener("click", event => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;
  filters.querySelectorAll("button").forEach(item => item.setAttribute("aria-pressed", String(item === button)));
  let count = 0;
  document.querySelectorAll(".project").forEach(card => {
    card.hidden = button.dataset.filter !== "all" && card.dataset.category !== button.dataset.filter;
    if (!card.hidden) count++;
  });
  document.querySelector("#filter-status").textContent = `已显示 ${count} 个作品`;
});
const dialog = document.querySelector("#project-dialog");
let opener;
document.querySelectorAll("[data-project]").forEach(link => link.addEventListener("click", event => {
  const project = projects[link.dataset.project];
  if (!project || typeof dialog.showModal !== "function") return;
  event.preventDefault(); opener = link;
  document.querySelector("#dialog-title").textContent = project.name;
  document.querySelector("#dialog-category").textContent = project.category;
  document.querySelector("#dialog-icon").src = `assets/${project.icon}`;
  document.querySelector("#dialog-description").textContent = project.description;
  document.querySelector("#dialog-features").replaceChildren(...project.features.map(text => {
    const li = document.createElement("li"); li.textContent = text; return li;
  }));
  document.querySelector("#dialog-policy").href = `https://zhanghaichao.github.io/${project.policy}`;
  const site = document.querySelector("#dialog-site"); site.hidden = !project.site;
  if (project.site) site.href = `https://zhanghaichao.github.io/${project.site}`;
  dialog.showModal(); document.body.style.overflow = "hidden"; dialog.scrollTop = 0;
}));
dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target !== dialog) return;
  const r = dialog.getBoundingClientRect();
  if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
});
dialog.addEventListener("close", () => { document.body.style.overflow = ""; opener?.focus(); });
const copy = document.querySelector("#copy-email");
if (navigator.clipboard?.writeText) {
  copy.hidden = false;
  copy.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText("seansheaton@gmail.com"); document.querySelector("#copy-status").textContent = "邮箱已复制，期待你的来信。"; }
    catch { document.querySelector("#copy-status").textContent = "暂时无法复制，请选择上方邮箱文字，或点击写邮件。"; }
  });
}
document.querySelector("#year").textContent = new Date().getFullYear();
