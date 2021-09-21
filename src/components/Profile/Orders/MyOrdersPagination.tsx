import React from "react";
import { Link } from "react-router-dom";
import classes from "./styles/MyOrdersPagination.module.css";

interface Props {
    pageNumber: number;
    pages: number;
}

const MAX_PAGES = 11;

const generateStringPageLinks = (pageNumber: number, pages: number) => {
    let pageLinks: number[] = [pageNumber];
    let generatedPages = 1;

    while (generatedPages < pages && generatedPages < MAX_PAGES) {
        const lastGeneratedPage = pageLinks[pageLinks.length - 1];
        const firstGeneratedPage = pageLinks[0];

        if (lastGeneratedPage < pages) {
            pageLinks = [...pageLinks, lastGeneratedPage + 1];
            generatedPages++;
        }

        if (
            generatedPages < pages &&
            generatedPages < MAX_PAGES &&
            firstGeneratedPage > 1
        ) {
            pageLinks = [firstGeneratedPage - 1, ...pageLinks];
            generatedPages++;
        }
    }

    if (pageLinks[0] > 1) {
        pageLinks[0] = 1;
        pageLinks[1] = -1;
    }

    if (pageLinks[MAX_PAGES - 1] < pages) {
        pageLinks[MAX_PAGES - 1] = pages;
        pageLinks[MAX_PAGES - 2] = -1;
    }

    const stringPageLinks: string[] = pageLinks.map((link) => "" + link);

    return stringPageLinks;
};

const MyOrdersPagination: React.FC<Props> = ({ pageNumber, pages }) => {
    const stringPageLinks = generateStringPageLinks(pageNumber, pages);

    return (
        <div className={classes.pagination}>
            {stringPageLinks.map((link, index) => {
                if (link === "-1") {
                    return <p key={index}>...</p>;
                }

                let className: string | undefined;

                if (+link === pageNumber) {
                    className = classes.active;
                }

                return (
                    <Link
                        key={index}
                        className={className}
                        to={"/profile/my-orders?page=" + link}
                    >
                        {link}
                    </Link>
                );
            })}
        </div>
    );
};

export default MyOrdersPagination;
