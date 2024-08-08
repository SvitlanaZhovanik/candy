document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionButton = item.querySelector('.faq-question');

    questionButton.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      if (isOpen) {
        return;
      }

      faqItems.forEach(faq => {
        faq.classList.remove('open');
      });

      item.classList.add('open');
    });
  });
});
