import React, { useEffect, useState } from "react";

const PaginationButton = ({ page, isCurrent }) => {
    const [className, setClassName] = useState("usa-pagination__button");

    useEffect(() => {
        if (isCurrent) {
            setClassName((prev) => `${prev} usa-current`);
        }
    }, [isCurrent]);

    return (
        <li class="usa-pagination__item usa-pagination__page-no">
            <a
                href={`/${Number(page) !== 1 ? page : ''}`}
                class="usa-pagination__button"
                className={className}
                aria-label={`Page ${page}`}
                aria-current="page"
            >
                {page}
            </a>
        </li>
    );
};

export default PaginationButton;
