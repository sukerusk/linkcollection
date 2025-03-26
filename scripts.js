// ロード時にリンクを順番に表示させる簡単なアニメーション
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link');
    links.forEach((link, index) => {
      link.style.opacity = 0;
      link.style.transition = 'opacity 0.5s ease';
      setTimeout(() => {
        link.style.opacity = 1;
      }, (index+1) * 200);
    });
  });
  