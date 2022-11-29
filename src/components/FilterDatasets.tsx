interface Props {
  filterBySet: any;
  setSelectFilters: any;
  selectFilters: any;
}
const FilterDatasets = ({
  filterBySet,
  selectFilters,
  setSelectFilters,
}: Props) => {
  const filterBy = Array.from(filterBySet);

  const checkItem = (e: any) => {
    //check and add to the chart
    if (e.target.checked) {
      const newList = [...selectFilters];
      newList.push(e.target.name);
      setSelectFilters(newList);
      //uncheck and remove from the chart
    } else if (!e.target.checked) {
      const newList = selectFilters.filter(
        (element: string) => element !== e.target.name
      );
      setSelectFilters(newList);
    }
  };
  return (
    <div className="buttons-container">
      <h3>Choose country</h3>
      {/* render filters */}
      {filterBy.map((item: any) => {
        //what should be checked?
        const isChecked = selectFilters.find(
          (selectedCountry: string) => selectedCountry === item
        )
          ? true
          : false;
        return (
          <label key={item}>
            <input
              type="checkbox"
              name={item}
              defaultChecked={isChecked}
              onChange={(e) => {
                checkItem(e);
              }}
            />
            {item}
          </label>
        );
      })}
    </div>
  );
};

export default FilterDatasets;
