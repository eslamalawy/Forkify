import View from './View';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this.#generateMarkupNextButton(curPage);
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      return this.#generateMarkupPreviousButton(curPage);
    }

    // Other page
    if (curPage < numPages) {
      return (
        this.#generateMarkupPreviousButton(curPage) +
        this.#generateMarkupNextButton(curPage)
      );
    }

    // Page 1, and there are NO other pages
    return '';
  }

  #generateMarkupPreviousButton(currentPage) {
    return `
        <button data-goto="${
          currentPage - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
            </svg>
           <span>Page ${currentPage - 1}</span>
        </button>
    `;
  }
  #generateMarkupNextButton(currentPage) {
    return `
      <button data-goto="${
        currentPage + 1
      }" class="btn--inline pagination__btn--next">
              <span>Page ${currentPage + 1}</span>
                  <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
              </svg>
        </button>
    `;
  }

  addHandlerClick(handlerFunction) {
    //publicher-subscriber pattern
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return; 
      const goToPage = +btn.dataset.goto;
      handlerFunction(goToPage);
    });
  }
}

export default new PaginationView();
