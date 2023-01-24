import {  useState } from "react";



export const Filter = () => {
  const isMobile = false;

  const [isOpen, setisOpen] = useState(false);

  const [filterType, setFilterType] = useState({
    draft: false,
    paid: false,
    pending: false,
  });

  const filterView = (event: any) => {
    if (event.target.id === "draft") {
      setFilterType({
        paid: false,
        pending: false,
        draft: !filterType.draft,
      });
    }

    if (event.target.id === "pending") {
      setFilterType({
        paid: false,
        draft: false,
        pending: !filterType.pending,
      });
    }

    if (event.target.id === "paid") {
      setFilterType({
        draft: false,
        pending: false,
        paid: !filterType.paid,
      });
    }

    console.log(filterType);
  };

  const clickHandler = () => {
    setisOpen(!isOpen);
  };

 

  return (
    <div className=" relative flex  justify-center items-center gap-40 ">
      <div
        onClick={clickHandler}
        className="cursor-pointer flex  items-center justify-center gap-3"
      >
        <p className="text-brand-text dark:text-brand-white ">
          {isMobile ? "Filter" : "Filter by status"}
        </p>

        {isOpen ? (
          <svg width="11" height="7" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 1l4.228 4.228L9.456 1"
              stroke="#7C5DFA"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 6.22803L5.2279 2.00013L9.4558 6.22803"
              stroke="#7C5DFA"
              strokeWidth="2"
            />
          </svg>
        )}
      </div>

      <div
        className={` absolute  dark:text-brand-white dark:bg-brand-gray-muted -bottom-36 right-30 w-44  flex-col gap-2  rounded-lg p-6 box-border shadow-md
      ${isOpen ? "flex" : "hidden"}
      
      `}
      >
        <div className="w-20 flex justify-start items-center gap-3">
          <div
            className={`h-3 w-3 bg-brand-violet-highlight rounded-sm bg-center bg-no-repeat hover:cursor-pointer
        ${filterType.draft ? "bg-checked bg-brand-violet" : ""}
        `}
            id="draft"
            onClick={filterView}
          ></div>

          <p>Draft</p>
        </div>

        <div className="w-20 flex justify-start items-center gap-3">
          <div
            className={`h-3 w-3 bg-brand-violet-highlight rounded-sm bg-center bg-no-repeat hover:cursor-pointer
${filterType.pending ? "bg-checked bg-brand-violet" : ""}
`}
            id="pending"
            onClick={filterView}
          ></div>

          <p>Pending</p>
        </div>

        <div className="w-20 flex justify-start items-center gap-3">
          <div
            className={`h-3 w-3 bg-brand-violet-highlight rounded-sm bg-center bg-no-repeat hover:cursor-pointer
${filterType.paid ? "bg-checked bg-brand-violet" : ""}
`}
            id="paid"
            onClick={filterView}
          ></div>

          <p>Paid</p>
        </div>
      </div>
    </div>
  );
};
