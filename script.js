async function loadGallery() {
  try {
    const response = await fetch('./data/data.json');
    const data = await response.json();

    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';

      const img = document.createElement('img');
      img.src = `./images/${item.imageFile}`;
      img.alt = item.description;

      // 提取开始日期的月份数字
      const startDate = new Date(item.startDate);
      const month = String(startDate.getMonth() + 1).padStart(2, '0'); // 获取两位月份数字

      // 左右排列的容器
      const content = document.createElement('div');
      content.className = 'content';

      // 左侧文本部分
      const textContainer = document.createElement('div');
      textContainer.className = 'text-container';

      const projectName = document.createElement('h3');
      projectName.textContent = `${item.projectName}`;

      const dates = document.createElement('p');
      dates.className = 'dates';
      dates.textContent = `${item.startDate} ～ ${item.endDate}`;

      const type = document.createElement('p');
      type.className = 'type';
      type.textContent = `${item.type}`;

      const outcome = document.createElement('p');
      outcome.className = "outcome"
      outcome.textContent = `${item.outcome}`;

      textContainer.appendChild(projectName);
      textContainer.appendChild(dates);
      textContainer.appendChild(type);
      textContainer.appendChild(outcome);

      // 右侧月份数字部分
      const monthNumber = document.createElement('div');
      monthNumber.className = 'month-number';
      monthNumber.textContent = month;

      // 组合左右布局
      content.appendChild(textContainer);
      content.appendChild(monthNumber);

      // 组合卡片结构
      card.appendChild(img);
      card.appendChild(content);
      gallery.appendChild(card);
    });
  } catch (error) {
    console.error('加载数据时出错:', error);
  }
}



document.addEventListener('DOMContentLoaded', () => {
  loadGallery(1);
});