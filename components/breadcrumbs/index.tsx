import Link from "next/link";
import React from "react";

interface BreadcrumbsProps {
  items: {
    label: string;
    href: string;
  }[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => (
  <nav aria-label="breadcrumbs" className="flex items-center flex-wrap space-x-2">
    {items.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <Link href={item.href} passHref>
            <a className="text-white text-opacity-60 hover:text-opacity-100">{item.label}</a>
          </Link>

          {index !== items.length - 1 && (
            <div aria-hidden="true" className="select-none text-white text-opacity-40">
              /
            </div>
          )}
        </React.Fragment>
      );
    })}
  </nav>
);
