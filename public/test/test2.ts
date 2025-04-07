function getKranInfo() {
    const attributes = {};
    const items = document.querySelectorAll('.tab-pane-product-parameter-item');
    
    items.forEach(item => {
      const nameElement = item.querySelector('.parameter-name');
      const valueElement = item.querySelector('.parameter-value');
      
      if (nameElement && valueElement) {
        const nameClone = nameElement.cloneNode(true);
        const infoElement = nameClone.querySelector('.t-w');
        if (infoElement) {
          infoElement.remove();
        }
        
        const attributeName = nameClone.textContent.trim();
        const attributeValue = valueElement.textContent.trim();
        
        if (attributeName && attributeValue) {
          attributes[attributeName] = attributeValue;
        }
      }
    });
    
    return attributes;
  }
  
  console.log(getKranInfo());