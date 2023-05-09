import { useState } from "react";
import { DataProvider, ListItems } from ".";
import { SearchContext } from "../Contexts";

const SearchBox = () => {
    let { text, setText } = useState();
    let res = (
        <>
            <SearchContext.Provider value={text}>
                <ListItems items={<DataProvider></DataProvider>} />
            </SearchContext.Provider>
            <div>
                <input type="text" onChange={event => setText(event.target.value)} />
            </div>
        </>
    );

    return res;
}

export { SearchBox }