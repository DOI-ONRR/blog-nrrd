import React from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames';

const Pagination = ({ currentPage, numPages }) => {
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? '' : (currentPage - 1).toString();
    const nextPage = (currentPage + 1).toString();

    const midPoint = Math.floor(numPages / 2) + 1;

    return (
        <div class="grid-row">
            <div class="grid-col">
                <nav aria-label="Pagination" class="usa-pagination">
                    <ul class="usa-pagination__list">
                        {/* Previous page */}
                        {!isFirst && (
                            <li class="usa-pagination__item usa-pagination__arrow">
                                <Link
                                    to={"/" + prevPage}
                                    class="usa-pagination__link usa-pagination__previous-page"
                                    aria-label="Previous page"
                                >
                                    <svg
                                        class="usa-icon"
                                        aria-hidden="true"
                                        role="img"
                                    >
                                        <use href="/assets/img/sprite.svg#navigate_before"></use>
                                    </svg>
                                    <span class="usa-pagination__link-text">
                                        Previous
                                    </span>
                                </Link>
                            </li>
                        )}
                        {/* First page */}
                        <li class="usa-pagination__item usa-pagination__page-no">
                            <a
                                href="/"
                                class="usa-pagination__button"
                                className={classNames("usa-pagination__button", {"usa-current": currentPage === 1})}
                                aria-label="Page 1"
                                aria-current="page"
                            >
                                1
                            </a>
                        </li>
                        {/* Second slot */}
                        {currentPage === 1 || ((midPoint - currentPage) < 3) ? (
                            <li
                                class="usa-pagination__item usa-pagination__overflow"
                                aria-label="ellipsis indicating non-visible pages"
                            >
                                <span>…</span>
                            </li>
                        ) : (
                            <li class="usa-pagination__item usa-pagination__page-no">
                                <a
                                    href="/2"
                                    class="usa-pagination__button"
                                    className={classNames("usa-pagination__button", {"usa-current": currentPage === 2})}
                                    aria-label="Page 2"
                                >
                                    2
                                </a>
                            </li>
                        )}
                        {/* 3 middle slots */}
                        {getMiddlePages(currentPage, midPoint, numPages).map((page, index) => (
                            <li key={index}
                                class="usa-pagination__item usa-pagination__page-no"
                            >
                                <a
                                    href={`/${page}`}
                                    class="usa-pagination__button"
                                    className={classNames("usa-pagination__button", {"usa-current": currentPage === page})}
                                    aria-label={`Page ${page}`}
                                >{page}</a>

                            </li>
                        ))}
                        {/* Sixth slot */}
                        {((numPages - currentPage) > 3) ? (
                            <li
                                class="usa-pagination__item usa-pagination__overflow"
                                aria-label="ellipsis indicating non-visible pages"
                            >
                                <span>…</span>
                            </li>
                        ) : (
                            <li class="usa-pagination__item usa-pagination__page-no">
                                <a
                                    href={`/${numPages - 1}`}
                                    class="usa-pagination__button"
                                    className={classNames("usa-pagination__button", {"usa-current": currentPage === numPages - 1})}
                                    aria-label={`Page ${numPages - 1}`}
                                >
                                    {numPages - 1}
                                </a>
                            </li>
                        )}
                        {/* Last page */}
                        <li class="usa-pagination__item usa-pagination__page-no">
                            <a
                                href={"/" + numPages}
                                className={classNames("usa-pagination__button", {"usa-current": currentPage === numPages})}
                                aria-label={`Last page, page ${numPages}`}
                            >
                                {numPages}
                            </a>
                        </li>
                        {/* Next page */}
                        {!isLast && (
                            <li class="usa-pagination__item usa-pagination__arrow">
                                <Link
                                    to={"/" + nextPage}
                                    class="usa-pagination__link usa-pagination__next-page"
                                    aria-label="Next page"
                                >
                                    <span class="usa-pagination__link-text">
                                        Next{" "}
                                    </span>
                                    <svg
                                        class="usa-icon"
                                        aria-hidden="true"
                                        role="img"
                                    >
                                        <use href="/assets/img/sprite.svg#navigate_next"></use>
                                    </svg>
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Pagination;

const getMiddlePages = function (currentPage, midPoint, numPages) {
    var middlePages = [];
    if (currentPage === 1) {
        middlePages.push(midPoint - 1);
        middlePages.push(midPoint);
        middlePages.push(midPoint + 1);
    }
    else if (currentPage > 1 && currentPage < 5) {
        middlePages.push(3, 4, 5);
    }
    else if (Math.abs(midPoint - currentPage) <= 3) {
        middlePages.push(currentPage - 1);
        middlePages.push(currentPage);
        middlePages.push(currentPage + 1);
    }
    else if ((numPages - currentPage) <= 2) {
        middlePages.push(numPages - 4);
        middlePages.push(numPages - 3);
        middlePages.push(numPages - 2);
    }
    return middlePages;
}