class SearchView {
  _parentEl = document.querySelector('.search');
  _searchInput = this._parentEl.querySelector('.search__field');

  getQuery() {
    const query = this._searchInput.value;
    this._clearInput();
    return query;
  }
  _clearInput() {
    this._searchInput.value = '';
  }
  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
