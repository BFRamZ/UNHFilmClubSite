
<script>
  var results = ["test", "contact us"]
  
  function setList (group) {
    clearList();
    for (const person of group) {
      const item = document.createElement('li');
      const text = document.createTextNode(search.result);
      item.appendChild(text);
      list.appendChild(item;)
    }
    if (group.length == 0) {
      setNoResults();
    }
  }
  const searchInput = document.getElementById('search');
  
  const list = document.getElementById('list');
  
  searchInput.addEventListener('input', (event) {">"}{
    let value = event.target.value;
    if (value && value.trim().length > 0) {
      value = value.trim().toLowerCase();
      setList(results.filter(result => {
        return result.name.includes(value);
        
      }).sort((resultA, resultB) => {
        return getRelevancy(resultB.name, value) - getRelevancy(resultA, value);
      }));
    } else {
      clearList();
    }
  });
  
  function clearList() {
    while(list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }

  
  function getRelevancy(value, searchTerm) {
    if (value === searchTerm) {
      return 2;
    } else if (value.startsWith(term)) {
      return 1;
    } else {
      return 0;
    }
  }
</script>
