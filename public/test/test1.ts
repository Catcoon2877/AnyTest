function getInfo() {

    const productCards = document.querySelectorAll('div._product.narrow');
    
    const rawArticles = Array.from(productCards).map(card => {
      return card.getAttribute('data-product-mini-card') || '';
    }).filter(article => article.trim());
    
    const formattedArticles = rawArticles.map(article => {

      if (article.length === 6) {
        return `0-${article.slice(0, 3)}-${article.slice(3)}`;
      } else if (article.length === 7) {
        return `0${article.slice(0, 1)}-${article.slice(1, 4)}-${article.slice(4)}`;
      } else if (article.length === 8) {
        return `0${article.slice(0, 2)}-${article.slice(2, 5)}-${article.slice(5)}`;
      }
    }).filter(article => article);
    
    console.log('Отформатированные артикулы:', formattedArticles);
    return formattedArticles;
  }
  getInfo();

  //Не уверен, нужно ли было форматировать артикулы под формат представленный на сайте, поэтому сделал на всякий случай.